const User = require('../models/user');

const create_user = (req, res) => {
    let user = new User(req.body);
		
    let saveUser = () => {
        user.save((err) => {
            if (err) {
                res.send("Username already taken");
            }
            else {
                res.send({_id:user._id, username: user.username})
            }
        })
    }
    saveUser();
}

const get_users = (req, res) => {
	User.find({}, (err, users) => {
		if(err){
			res.send(err);
		}
		else {
			res.send(users);
		}
	})
}
module.exports = {
	create_user,
	get_users,
}