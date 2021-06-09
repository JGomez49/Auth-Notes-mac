// 15. Vistas de Login y Registro de Usuarios: https://www.youtube.com/watch?v=l4K12TBbwKg
// 16. Registro de Usuario o SignUp: https://www.youtube.com/watch?v=EpomajNVcMk
// 17. Login de Usuarios con Passport y bcrypt: https://www.youtube.com/watch?v=NN-Jt6EjFAc


const usersCtrl = {};
const passport = require('passport');
const User = require('../models/User');
// const user = require('../models/User');

// -------------------------Sing Up---------------------------------
usersCtrl.renderSignUpForm = (req,res)=>{
    res.render('users/signup');
};

usersCtrl.signup =  async (req,res)=>{
    const errors = [];
    const{name, email, password, confirm_password} = req.body

    if (password != confirm_password){
        errors.push({text: 'Passwords do not match'});
    }

    if (password.length < 4){
        errors.push({text: 'Passwords must be minimum 4 characters length'});
    }

    if (errors.length > 0){
        res.render('users/signup',{
            errors,
            name,
            email
        })
    } else {
        const emailUser = await User.findOne({email: email});
        if(emailUser){
            req.flash('error_msg','The email is already in use.');
            res.redirect('/users/signup');
        } else {
            const newUser = new User({
                name: name,
                email: email,
                password: password
            });
            newUser.password = await newUser.encryptPassword(password);
            req.flash('success_msg','Congratulations, You are now registred!');
            await newUser.save();
            res.redirect('/users/signin');
        }
    }
};


// --------------------------------------Sing In----------------------------
usersCtrl.renderSigninForm = (req,res)=>{
    res.render('users/signin');
};

// usersCtrl.signin = (req,res)=>{
//     res.send('Singin!');
// };

usersCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/notes',
    failureFlash: true
});

// ---------------------------------------Log Out---------------------------
usersCtrl.logout = (req,res)=>{
    res.send('Logout!');
};


module.exports = usersCtrl;