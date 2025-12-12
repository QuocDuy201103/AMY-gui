import crypto from "crypto";
import type { Express, NextFunction, Request, Response } from "express";
import session from "express-session";
import passport from "passport";
import {
  Strategy as GoogleStrategy,
  type Profile,
  type VerifyCallback,
} from "passport-google-oauth20";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const googleCallbackUrl = process.env.GOOGLE_CALLBACK_URL;
const sessionSecret =
  process.env.SESSION_SECRET ?? crypto.randomBytes(32).toString("hex");
if (!process.env.SESSION_SECRET) {
  console.warn(
    "SESSION_SECRET not set; using a generated secret for this process. Sessions will reset on restart.",
  );
}

if (!googleClientId || !googleClientSecret || !googleCallbackUrl) {
  throw new Error(
    "GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, and GOOGLE_CALLBACK_URL must be set",
  );
}

passport.serializeUser((user: Express.User, done: (err: any, user?: Express.User) => void) => {
  done(null, user);
});

passport.deserializeUser(
  (obj: Express.User, done: (err: any, user?: Express.User | false | null) => void) => {
    done(null, obj as Express.User);
  },
);

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: googleCallbackUrl,
    },
    (
      _accessToken: string,
      _refreshToken: string,
      profile: Profile,
      done: VerifyCallback,
    ) => {
      const user = {
        id: profile.id,
        name: profile.displayName,
        email: profile.emails?.[0]?.value ?? "",
      };
      done(null, user);
    },
  ),
);

export function setupAuth(app: Express): void {
  app.use(
    session({
      secret: sessionSecret as string,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        sameSite: "lax",
        secure: app.get("env") === "production",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.get(
    "/api/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] }),
  );

  app.get(
    "/api/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/admin/login?error=auth_failed",
      successRedirect: "/admin/contacts",
    }),
  );

  app.get("/api/auth/status", (req, res) => {
    res.json({
      authenticated: !!req.user,
      user: req.user || null,
    });
  });

  app.post("/api/auth/logout", (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err);
      req.session.destroy(() => {
        res.clearCookie("connect.sid");
        res.json({ success: true });
      });
    });
  });
}

export function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (req.isAuthenticated && req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

