const connection = require('../../database/mysql/connection');
const connectionMongo = require('../../database/mongoDB/connection');
const objectId = require('mongodb').ObjectID;

exports.userModel = async () => {
	const db = await connection();
	const [user] = await db.query('SELECT * from `users`');
	return user;
};
exports.saveUser = async (user) => {
	const db = await connection();
	const [item] = await db.query('INSERT INTO `users` SET ?', user);
	return item.insertId;
};
exports.deleteUser = async (id) => {
	const db = await connection();
	const [result] = await db.query('DELETE FROM `users` WHERE id=?', [id]);
	return result;
};

exports.getUsers = async (page = 1, number = 10) => {
	const db = await connectionMongo();
};

//NOTE mongo
exports.countUsers = async () => {
	const db = await connectionMongo();
};

exports.createUser = async (newUserData) => {
	const db = await connectionMongo();
	const newUser = await db.collection('users').insertOne(newUserData);
	return newUser;
};

exports.findUserByCredentials = async (email, password) => {
	const db = await connectionMongo();
};

exports.findItems = async () => {
	const db = await connectionMongo();
	const result = await db.collection('test').find({});
	const items = await result.toArray();
	return items;
};
exports.update = async (item) => {
	const db = await connectionMongo();
	const result = await db.collection('test').updateOne(
		{_id: objectId(item.id)},
		{
			$set: {name: item.username, email: item.email},
		},
	);
	return result.modifiedCount > 0;
};

exports.deleteMongo = async (id) => {
	const db = await connectionMongo();
	const result = await db.collection('test').deleteOne({_id: objectId(id)});
	return result.deletedCount > 0;
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
