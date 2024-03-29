const userModel = require("../models/userModel.js");

exports.registerController = async (req, res) => {
    try {
      const { username, email, password } = req.body;
      //validation
      if (!username || !email || !password) {
        return res.status(400).send({
          success: false,
          message: "Please Fill all fields",
        });
      }
      //exisiting user
      const exisitingUser = await userModel.findOne({ email });
      if (exisitingUser) {
        return res.status(401).send({
          success: false,
          message: "user already exisits",
        });
      }
  
      //save new user
      const user = new userModel({ username, email, password });
      await user.save();
      return res.status(201).send({
        success: true,
        message: "New User Created",
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: "Error In Register callback",
        success: false,
        error,
      });
    }
  };




exports.getAllusers = () => {
    
}

exports.loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      //validation
      if (!email || !password) {
        return res.status(401).send({
          success: false,
          message: "Please provide email or password",
        });
      }
      const user = await userModel.findOne({ email, password });
      if (!user) {
        return res.status(200).send({
          success: false,
          message: "email or password faulty",
        });
      }
      
      return res.status(200).send({
        success: true,
        messgae: "login successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: "Error In Login Callcback",
        error,
      });
    }
  };