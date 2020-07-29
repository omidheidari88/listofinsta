const connection = require('../../database/mysql/connection');
exports.productModel = async () => {
	const db = await connection();
	const [product] = await db.query('SELECT * from `products`');
	return product;
};
exports.saveProduct = async (product) => {
	const db = await connection();
	const [item] = await db.query('INSERT INTO `products` SET ?', product);
	return item.insertId;
};
exports.deleteProduct = async (id) => {
	const db = await connection();
	const [result] = await db.query('DELETE FROM `products` WHERE product_id=?', [id]);
	return result;
};

// exports.getUser = async (page = 1, number = 20) => {
// 	const offset = (page - 1) * number;
// 	const db = await connection();
// 	const [users] = await db.query(`SELECT * from users LIMIT ${number} OFFSET ${offset}`);
// 	return users;
// };
// exports.getTotal = async () => {
// 	const db = await connection();
// 	const [users] = await db.query(`SELECT COUNT(id) as total FROM users`);
// 	return users[0].total;
// };
// exports.createUser = async (user) => {
// 	const db = await connection();
// 	const [users] = await db.query('INSERT INTO `users` SET?', user);
// 	return users;
// };
// exports.deleteUserModel = async (uid) => {
// 	const db = await connection();

// 	const [result] = await db.query('DELETE FROM `users` WHERE id=?', [uid]);
// 	return result;
// };
