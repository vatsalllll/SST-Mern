const express = require('express')

const router = require('express').Router()


router.post("/api/products", async (req, res) => {
    await ProductModel.create({
     product_name: req.body.product_name,
     product_price: req.body.product_price,
     isInStock: req.body.isInStock,
     category: req.body.category,
   });
 
   return res.status(201).json({ message: "Product Created" });
 });
 
 
 // get route
 
 router.get('/api/products' , async(req , res)=>{
    const allProucts = await ProductModel.find({isInStock:true})
 
    return res.json(allProucts)
 })
 
 // Get product by id
 
 router.get('/api/products/:id' , async(req , res)=>{
  const product = await ProductModel.findById(req.params.id)
 
  return res.json(product)
 })
 
 // Update product
 
 router.put('/api/products/:id' , async(req , res)=>{
   const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id , req.body)
   return res.json(updatedProduct)
 })
 
 
 /// Delete a Resource
 
 router.delete('/api/products/:id' , async(req , res)=>{
   const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id)
 
   res.json(deletedProduct)
 })
 
 