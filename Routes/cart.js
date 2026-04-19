import express from 'express';
import { isAuthenticated } from '../Middlewares/Auth.js';
import { addToCart } from '../Controllers/cart.js';
  
const router = express.Router();

// add to cart 
//@api -/api/cart/add
router.post ('/add',isAuthenticated,addToCart)


export default router; 