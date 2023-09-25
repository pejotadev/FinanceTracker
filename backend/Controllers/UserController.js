const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            level: parseInt(req.body.level)
        });
        res.json(user);
    } catch (err) {
        next(err);
    }
};

exports.loginUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }
        const result = await bcrypt.compare(req.body.password, user.password);
        if (result) {
            const token = jwt.sign({ email: user.email, userId: user.id }, 'secret', { expiresIn: '1h' });
            return res.status(200).json({ token: token, expiresIn: 3600, userId: user.id });
        }
        return res.status(401).json({ message: 'Authentication failed' });
    } catch (err) {
        next(err);
    }
};