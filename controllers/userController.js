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

module.exports = {
	create_user,
}