const userService = require("../services/user");

// Function to create a new user
const userfunction = async (req, res) => {
  try {
    const userData = req.body;
    const savedUser = await userService.createUser(userData);
    
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error creating user:", error);
    
    // Handle validation errors
    if (error.message === "Name and Email are required") {
      return res.status(400).json({ error: error.message });
    }
    
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Function to fetch user by ID
const getuserfunction = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userService.getUserById(id);
    
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching user:", error);
    
    // Handle user not found error
    if (error.message === "User not found") {
      return res.status(404).json({ error: error.message });
    }
    
    // Handle invalid ID format error
    if (error.message === "Invalid user ID format") {
      return res.status(400).json({ error: error.message });
    }
    
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { userfunction, getuserfunction };
