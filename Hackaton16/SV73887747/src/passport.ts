import passport from "passport";
import { Strategy as GoogleStrategy, Profile } from "passport-google-oauth20";

passport.serializeUser((user: any, done) => {
  done(null, user); 
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENTID as string,
      clientSecret: process.env.SECRETID as string,
      callbackURL: process.env.CALLBACKURL as string,
    },
    (accessToken: string, refreshToken: string | undefined, profile: Profile, done: (error: any, user?: any) => void) => {
      console.log("Perfil de Google:", profile);
      return done(null, profile);
    }
  )
);

export default passport;