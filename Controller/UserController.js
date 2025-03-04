const User = require('../Model/User')
const bcrypt = require('bcryptjs');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find()
        console.log(User);

        res.status(200).json({
            status: 'success',
            data: {
                users
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
}
// register user
exports.registerUser = async (req, res) => {
    try {
        console.log('====================================');
        console.log(req.body);
        console.log('====================================');
        const { username, password, email } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10)
        console.log(hashedPassword);
        const newUser = new User({
            username: username,
            password: hashedPassword,
            email: email
        })

        // newUser.save()

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
}