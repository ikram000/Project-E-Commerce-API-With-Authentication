import express from 'express'
import { addProduct, getAllproduct, getProductById } from '../Controllers/product.js';

const router = express.Router();

//add product
// @api - /api/product/add
router.post('/add', addProduct)

// get all product

router.get('/all', getAllproduct)

//get product by id
router.get('/:id', getProductById)

export default router