const mongoose = require("mongoose");
const blogModel = require("../models/blogModel.js");
// const userModel = require("../models/userModel.js");

exports.getAllBlogsController = async (req, res) => {
  try {
    const blogs = await blogModel.find({})
    if (!blogs) {
      return res.status(200).send({
        success: false,
        message: "No Blogs Found",
      });
    }
    return res.status(200).send({
      success: true,
      BlogCount: blogs.length,
      message: "All Blogs lists",
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error WHile Getting Blogs",
      error,
    });
  }
};

exports.createBlogController = async (req, res) => {
    try {
      const { title, description, image} = req.body;
      //validation
      if (!title || !description) {
        return res.status(400).send({
          success: false,
          message: "Please Provide ALl Fields",
        });
      }
    
  
      const newBlog = new blogModel({ title, description, image});
     
      await newBlog.save();

      return res.status(201).send({
        success: true,
        message: "Blog Created!",
        newBlog,
      });
    } 
    
    catch (error) {
      console.log(error);
      return res.status(400).send({
        success: false,
        message: "Error WHile Creting blog",
        error,
      });
    }
  };




  exports.updateBlogController = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, image } = req.body;
      const blog = await blogModel.findByIdAndUpdate(
        id,
        { ...req.body },
        { new: true }
      );
      return res.status(200).send({
        success: true,
        message: "Blog Updated!",
        blog,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        success: false,
        message: "Error WHile Updating Blog",
        error,
      });
    }
  };

  // find blog by ID

  exports.getBlogByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const blog = await blogModel.findById(id);
      if (!blog) {
        return res.status(404).send({
          success: false,
          message: "blog not found with this is",
        });
      }
      return res.status(200).send({
        success: true,
        message: "fetch single blog",
        blog,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        success: false,
        message: "error while getting single blog",
        error,
      });
    }
  };

  exports.deleteBlogController = async (req, res) => {
    try {
      const blog = await blogModel
        .findByIdAndDelete(req.params.id)
      await blog.user.save();
      return res.status(200).send({
        success: true,
        message: "Blog Deleted!",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        success: false,
        message: "Erorr WHile Deleteing BLog",
        error,
      });
    }
  };