var db = require('../fn/mysql-db');

exports.loadAll = () => {
	var sql = 'select * from products';
	return db.load(sql);
}