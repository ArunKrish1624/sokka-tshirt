const { Register } = require('./../../models');
const sendToken = require('./../../utils/jwtHelper');
const bcrypt = require('bcryptjs'); // For password hashing and comparison
const sendEmail = require('../../utils/sendEmail');

// Register a new user
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await Register.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already registered' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const adminEmail = process.env.ADMIN_MAIL;
        const employeeEmail = process.env.EMP_MAIL;
        const role = email === adminEmail ? 'admin' : email === employeeEmail ? 'employee' : 'user';

        const user = await Register.create({
            name,
            email,
            password,
            role,
        });

        // ✅ Send welcome email
        const subject = '🎉 Welcome to Sokka Garments!';
        const htmlContent = `
      <h2>Hi ${name},</h2>
      <p>Thank you for registering with <strong>Sokka Garments</strong>!</p>
      <p>We're thrilled to have you on board. Whether you're looking for comfortable casuals or classy fits, Sokka has everything to match your vibe.</p>
      <p>Explore our latest collection and enjoy exclusive member perks soon!</p>
      <br/>
      <p>🧵 Stay Stylish,<br/>Team Sokka</p>
    `;

        await sendEmail(email, subject, htmlContent);

        sendToken(user, 201, res);
    } catch (error) {
        if (error.code === 11000 && error.keyPattern?.email) {
            return res.status(400).json({ message: 'Email is already registered' });
        }
        console.error('Error in registerUser:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.getAuthData = async (req, res) => {
    const { email } = req.params;
    try {
        const user = await Register.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUserProfile = async (req, res) => {
    try {
        const { email } = req.params;
        const { img } = req.body;

        if (!img) {
            return res.status(400).json({ message: 'Image is required' });
        }

        const updateIMG = await Register.findOneAndUpdate(
            { email },
            { $set: { img } }, // Use $set to specifically update the img field
            { new: true, runValidators: true }
        );

        if (!updateIMG) {
            return res.status(404).json({ message: 'image not found' });
        }

        res.status(200).json({ message: 'image updated successfully', updateIMG });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Check if user exists (Login)
exports.signinUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Query the 'users' collection
        const user = await Register.findOne({ email }).select('+password');
        if (!user) {
            return res.status(404).json({ message: 'User email not found' });
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            console.log('Comming Pass :', password);
            console.log('Stored Pass :', user.password);
            return res.status(401).json({ message: 'Invalid password' });
        }

        // return res.status(200).json({ message: 'Success', user });
        sendToken(user, 200, res);
    } catch (error) {
        console.error('Error in addUser:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.getUserNameByEmail = async (req, res) => {
    try {
        const { email } = req.params;

        // Find the user by email
        const user = await Register.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return the user's name
        res.status(200).json({ name: user.name });
    } catch (error) {
        console.error('Error in getUserNameByEmail:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};