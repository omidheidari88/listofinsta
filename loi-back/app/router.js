const courseRouter = require('./modules/course/routes');
const productRouter = require('./modules/product/routes');
const authRouter = require('./modules/auth/routes');
const adminRouter = require('./modules/admin/routes');

module.exports = (app) => {
	app.use('/course', courseRouter);
	app.use('/product', productRouter);
	app.use('/auth', authRouter);
	app.use('/admin', adminRouter);
};
