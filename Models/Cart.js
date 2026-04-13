 import mongoose from "mongoose";

 const cartItemSchema = new mongoose.Schema({

    productId:{
        typeof :mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required:true,
    },
    title: {type:String, required:true},
    price: {type:String, required:true},
    qty: {type:String, required:true},
 });

 const cartSchema = new mongoose.Schema({

    userId:{
        typeof :mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true,
    },
    items :cartItemSchema,
 })

 export const Cart = mongoose.model('cart', cartSchema)