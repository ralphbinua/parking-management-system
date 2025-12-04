import Users from "../models/user-information.js";

export const createUser = async (req, res) => {
  try {
    const { full_name, user_type, username, password } = req.body;

    const newUser = new Users({ full_name, user_type, username, password });
    await newUser.save();

    const userResponse = newUser.toObject();
    delete userResponse.password;

    res.status(201).json({
      message: "User created successfully",
      user: userResponse
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await Users.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Remove password before sending back
    const userData = user.toObject();
    delete userData.password;

    res.json({ message: "Login successful", user: userData });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};