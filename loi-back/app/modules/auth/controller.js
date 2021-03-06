const {findBy, create, find, userModel, registerUser} = require('./model');
const {validationResult} = require('express-validator');
const passport = require('passport');
const {googleRecaptcha, verifyHashedPassword, verifyRecaptcha} = require('./middleware');
const {sign, verify, findToken} = require('../../services/token');

const uniqueString = require('unique-string');
exports.showLogin = async (req, res) => {
	let message = req.session.message || '';
	req.session.message = '';
	res.render('auth/login', {message});
};
exports.doLogin = async (req, res, next) => {
	const {email, password} = req.body;
	const user = await findBy('email', email);
	if (!user) {
		return res.status(401).send({
			success: false,
			message: 'user not found',
		});
	}
	const token = findToken(req);
	if (!token) {
		const newToken = sign({uid: user.id, is_admin: user.is_admin});
		return res.status(200).send({message: 'Login was success', userLogin: true, token: newToken, success: true});
	}
	const verifyToken = verify(token);
	if (!verifyToken) {
		console.log('can not verify token');
		return res.status(401).send({
			success: false,
			message: "you don't have verify option",
		});
	}
	res.status(200).send({message: 'Login was success', userLogin: true, token, success: true});

	// const user = await findBy('email', email);
	// const messages = [];
	// const result = validationResult(req);
	// const errors = result.array();
	// errors.forEach((err) => messages.push(err.msg));
	// if (messages.length > 0) {
	// 	return res.render('auth/login', {messages, password, email});
	// } else {
	// 	// passport.authenticate('local-login', {
	// 	// 	successRedirect: '/',
	// 	// 	failureRedirect: '/auth/login',
	// 	// 	failureFlash: true,
	// 	// })(req, res, next);
	// 	passport.authenticate('local-login', (err, user) => {
	// 		if (!user) {
	// 			return res.redirect('/auth/login');
	// 		}
	// 		if (remember) {
	// 			res.cookie('rememberBox', uniqueString(), {maxAge: 1000 * 60 * 60 * 24 * 6, httpOnly: true, signed: true});
	// 		}
	// 		return res.redirect('/');
	// 	})(req, res, next);
	// }
};

exports.showRegister = async (req, res) => {
	let message = req.flash('errors');
	const recaptcha = googleRecaptcha().render();
	return res.render('auth/register', {message, recaptcha});
};

//NOTE
exports.doRegister = async (req, res, next) => {
	const {email, password, confpass, first_name, last_name} = req.body;
	const userData = {
		name: `${first_name}-${last_name}`,
		email,
		password,
		confpass,
		is_admin: false,
	};
	const registeredUser = await registerUser(userData);
	const user = await findBy('email', email);
	const token = sign({uid: registeredUser.insertId, is_admin: user.is_admin});
	res.status(200).send({item: user, message: 'REGISTER success', token, success: true});

	// const {first_name, last_name, email, password, confpass} = req.body;

	// const messages = [];
	// const result = validationResult(req);
	// const errors = result.array();
	// errors.forEach((err) => messages.push(err.msg));
	// if (password !== confpass) {
	// 	messages.push('password do not match');
	// 	req.flash('errors', messages);
	// }
	// const recaptcha = googleRecaptcha().render();
	// // const recaptcharesult = await verifyRecaptcha(req, res, googleRecaptcha());
	// // if (recaptcharesult === false) {
	// // 	messages.push('check robot box');
	// // 	req.flash('errors', messages);
	// // }
	// if (messages.length > 0) {
	// 	// return res.render('auth/register', {recaptcha, messages, first_name, last_name, password, confpass, email});
	// 	messages.map((message) => res.status(200).send({message: message}));
	// } else {
	// 	passport.authenticate(
	// 		'local-register',
	// 		{
	// 			// successRedirect: res.status(200).send({message: 'REGISTER success'}),
	// 			// failureRedirect: res.status(400).send({message: 'REGISTER failed'}),
	// 			failureFlash: true,
	// 		},
	// 		async () => {
	// 			// const user = await find({email});
	// 			const user = await findBy('email', email);
	// 			res.status(200).send({item: user, message: 'REGISTER success'});
	// 		},
	// 	)(req, res, next);
	// }
};
exports.logout = async (req, res) => {
	// res.clearCookie('rememberBox');
	req.session.destroy(() => {
		res.redirect('/auth/login');
	});
};

exports.google = passport.authenticate('google', {
	scope: ['email', 'profile'],
});

exports.googleCallback = async (req, res, next) => {
	passport.authenticate('google', {
		successRedirect: '/',
		failureRedirect: '/auth/login',
		failureFlash: true,
	})(req, res, next);
};

//-------------Forget Password--------------
exports.showForgetPassword = async (req, res) => {
	let message = req.flash('errors');
	return res.render('auth/forgetpassword', {message});
};
exports.doForgetPassword = async (req, res, next) => {
	const {email} = req.body;
	const messages = [];
	const result = validationResult(req);
	const errors = result.array();
	errors.forEach((err) => messages.push(err.msg));
	const findingUser = await findBy('email', email);
	if (!findingUser) {
		messages.push('no user found with this email');
		req.flash('errors', messages);
	} else {
		const success = 'link has been sent to your email';
		req.flash('success', success);
		res.render('auth/login', {success, email});
	}
	if (messages.length > 0) {
		res.render('auth/forgetpassword', {messages, email});
	}
};

//-------------Reset Password--------------
exports.showResetPassword = async (req, res) => {
	let message = req.flash('errors');
	return res.render('auth/resetPassword', {message});
};
exports.doResetPassword = async (req, res, next) => {
	// const {email, password, remember} = req.body;
	// const messages = [];
	// const result = validationResult(req);
	// const errors = result.array();
	// errors.forEach((err) => messages.push(err.msg));
	// if (messages.length > 0) {
	// 	return res.render('auth/login', {messages, password, email});
	// } else {
	// 	// passport.authenticate('local-login', {
	// 	// 	successRedirect: '/',
	// 	// 	failureRedirect: '/auth/login',
	// 	// 	failureFlash: true,
	// 	// })(req, res, next);
	// 	passport.authenticate('local-login', (err, user) => {
	// 		if (!user) {
	// 			return res.redirect('/auth/login');
	// 		}
	// 		if (remember) {
	// 			res.cookie('rememberBox', uniqueString(), {maxAge: 1000 * 60 * 60 * 24 * 6, httpOnly: true, signed: true});
	// 		}
	// 		return res.redirect('/');
	// 	})(req, res, next);
	// }
};
