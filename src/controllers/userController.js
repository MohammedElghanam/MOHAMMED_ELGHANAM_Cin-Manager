const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {PORT} = require('../config/jwt');


class UserController {

    static async register(req, res) {

        const { name, email, password, role } = req.body;
        try {

            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({ name, email, password: hashedPassword, role });
            return res.status(201).json({ userId: user._id });

        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
        
    }

    static async login(req, res) {

        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });

            if (!user) return res.status(400).json({ message: 'User not found' });
            
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
            
            const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
                expiresIn: '1h',
            });
            return res.json({ token });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async getAllusers(req, res) {

        try {
          const users = await User.find();
          return res.json(users);
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
        
    }

}

module.exports = UserController;