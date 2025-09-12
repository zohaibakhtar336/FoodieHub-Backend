// TEST USER CONTROLLER
const testUserController = (req, res) => {
  try {
    res.status(200).send("<h1>Test User Data</h1>");
  } catch (error) {
    console.error("Error in Test User API:", error);
    res.status(500).send({
      success: false,
      message: "Error occurred in Test User API",
      error,
    });
  }
};

export { testUserController };
