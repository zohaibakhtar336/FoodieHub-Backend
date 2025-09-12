import categoryModel from "../models/categoryModel.js";

// CREATE CATEGORY
const createCatController = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;

    // Validation: check if title is provided
    if (!title) {
      return res.status(400).send({
        success: false,
        message: "Category title is required",
      });
    }

    const newCategory = new categoryModel({ title, imageUrl });
    await newCategory.save();

    res.status(201).send({
      success: true,
      message: "Category created successfully",
      newCategory,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error occurred while creating category",
      error,
    });
  }
};

// GET ALL CATEGORIES
const getAllCatController = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    if (!categories || categories.length === 0) {
      return res.status(404).send({
        success: false,
        message: "No categories found",
      });
    }

    res.status(200).send({
      success: true,
      totalCat: categories.length,
      categories,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error occurred while fetching categories",
      error,
    });
  }
};

// UPDATE CATEGORY
const updateCatController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, imageUrl } = req.body;

    const updatedCategory = await categoryModel.findByIdAndUpdate(
      id,
      { title, imageUrl },
      { new: true } // return the updated document
    );

    if (!updatedCategory) {
      return res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Category updated successfully",
      updatedCategory,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error occurred while updating category",
      error,
    });
  }
};

// DELETE CATEGORY
const deleteCatController = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send({
        success: false,
        message: "Category ID is required",
      });
    }

    const category = await categoryModel.findById(id);
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Category not found with this ID",
      });
    }

    await categoryModel.findByIdAndDelete(id);

    res.status(200).send({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error occurred while deleting category",
      error,
    });
  }
};

export {
  createCatController,
  getAllCatController,
  updateCatController,
  deleteCatController,
};
