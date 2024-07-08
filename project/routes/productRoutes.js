const router = require("express").Router();
const productControllers = require("../controllers/productControllers");

router.post("/api/products", productControllers.createProduct);

// get route

router.get("/api/products", productControllers.getallProducts);

// Get product by id

router.get("/api/products/:id", productControllers.getById);

// Update product

router.put("/api/products/:id", productControllers.updateProduct);

/// Delete a Resource

router.delete("/api/products/:id", productControllers.deleteProduct);
