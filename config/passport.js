var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var Band = require('../models/band');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},
function(acessTOken, refreshToken, profile, cb){
    Band.findOne({'googleID': profile.id}, function(err, band) {
        if (err) return cb(err);
        if (band) {
            return cb(null, band);
        } else {
            var newBand = new Band({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id,
            });
            newBand.save(function(err) {
                if (err) return cb(err);
                return cb(null, newBand);
            });
        }
    });
}
));
passport.serializeUser(function(band, done) {
    done(null, band.id);
});
passport.deserializeUser(function(id, done) {
    Band.findById(id, function(err, band) {
        done(err, band);
    });
});