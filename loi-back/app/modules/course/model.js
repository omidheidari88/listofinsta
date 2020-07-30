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
