import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.js';


export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;


    const user = await Users.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }


    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }


    const token = jwt.sign({ userId: user._id, username: user.username }, 'sercretKey', {
      expiresIn: '1h', // Token expiration time
    });

    res.status(200).json({ token, userId: user._id, username: user.username });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
