const taskStatus = require('./task_status');
const {saveProduct, deleteProduct, productModel} = require('./model');

exports.getItem = async (req, res) => {
	const items = await productModel();
	res.status(201).send({items});
};
exports.store = async (req, res) => {
	const items = req.body;
	const id = await saveProduct(items);
	res.status(201).send({message: 'items saved to DB', items: {...items, product_id: id}});
};
exports.remove = async (req, res) => {
	const id = req.params.id;

	const results = await deleteProduct(id);
	if (results.affectedRows == 1) {
		const item = await productModel();
		res.send({item});
	}
};

// exports.user = async (req, res) => {
// 	const {page, number} = req.query;
// 	const users = await getUser(page, number);
// 	const total_users = await getTotal();
// 	const total_page = total_users / number;
// 	const pagination = {
// 		total: total_users,
// 		number,
// 		page,
// 		next_page: page < total_page ? `http://localhost:5000/api/user?page=${parseInt(page) + 1}&number=${number}` : null,
// 		prev_page: page > 1 ? `http://localhost:5000/api/user?page=${page - 1}&number=${number}` : null,
// 	};
// 	const data = users.map(removePassword).map(addFullname).map(persianMobile);
// 	res.send({data});
// };

// exports.create = async (req, res) => {
// 	const users = req.body;
// 	const result = await createUser(users);
// 	res.send({users, result});
// };
// exports.deleteUser = async (req, res) => {
// 	const uid = req.params.id;
// 	const result = await deleteUserModel(uid);

// 	if (result.affectedRows > 0) {
// 		res.send({uid, result});
// 	}
// 	if (result.affectedRows > 0) {
// 		res.send({message: 'no user found'});
// 	}
// };
