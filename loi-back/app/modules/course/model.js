const connection = require('../../database/mysql/connection');
exports.courseModel = async () => {
	const db = await connection();
	const [courses] = await db.query('SELECT * from `courses`');
	return courses;
};
exports.saveCourse = async (course) => {
	const db = await connection();
	const [courses] = await db.query('INSERT INTO `courses` SET ?', course);
	return courses.insertId;
};
exports.deleteCourse = async (id) => {
	const db = await connection();
	const [courses] = await db.query('DELETE FROM `courses` WHERE id=?', [id]);
	return courses;
};
exports.courseModel = async () => {
	const db = await connection();
	const [courses] = await db.query('SELECT * from `courses`');
	return courses;
};

// const connection = require("../../../database/connections/mongodb");
// const objectId = require("mongodb").ObjectID;
// exports.all = async (params = null) => {
//     const db = await connection();
//     const result = await db.collection("tasks").find({});
//     const items = await result.toArray();
//     return items;
// };

// exports.create = async params => {
//     const db = await connection();
//     const result = await db.collection("tasks").insertOne(params);
//     return result;
// };
// exports.update = async data => {
//     const db = await connection();
//     const result = await db.collection("tasks").updateOne({ _id: objectId(data.id) }, { $set: { title: data.title } });
//     return result.modifiedCount > 0;
// };
