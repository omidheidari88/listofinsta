const {saveCourse, deleteCourse, courseModel} = require('./model');

exports.getItem = async (req, res) => {
	const items = await courseModel();
	res.status(201).send({items});
};
exports.store = async (req, res) => {
	const items = req.body;
	const id = await saveCourse(items);
	res.status(201).send({message: 'items saved to DB', items: {...items, course_id: id}});
};
exports.remove = async (req, res) => {
	const id = req.params.id;
	const results = await deleteCourse(id);
	if (results.affectedRows == 1) {
		const item = await courseModel();
		res.send({item});
	}
};
