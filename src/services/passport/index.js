import 'dotenv/config';
import passport, { Passport } from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { User } from '../../models/users';
import { UserRepository } from '../../respository/userRepository';
import bcrypt from 'bcryptjs';

passport.use(new LocalStrategy({
    usernameField: "username",
    passwordField: "pass",
    session: false
}, (username, pass, done) => {
    const user = UserRepository.findByUsername(username);
    if (user == undefined)
        return done(null, false)
    else if (!bcrypt.compareSync(pass, user.pass))
        return done(null, false);
    else
        return done(null, user.toDto());
}));

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
    algorithms: [process.env.JWT_ALGORITHM]
}

passport.use('token', new JwtStrategy(opts, (jwt_payload, done) => {

    const user_id = jwt_payload.sub;

    const user = UserRepository.findById(user_id);

    if(user == undefined)
        return done(null, false);
    else    
        return done(null, user);
}));

export const password = () => (req, res, next) => passport.authenticate('local', {session: false}, (err, user, info) => {
    if (err){
        console.log(err)
        return res.status(400).json(err)
    }else if (err || !user){
        console.log(err)
        return res.status(401).end()
    }

    req.logIn(user, {session:false}, (err) => {
        if (err){
            console.log(err)
            return res.status(401).end()
        }
        next()
    })
})(req, res, next);

export default passport;