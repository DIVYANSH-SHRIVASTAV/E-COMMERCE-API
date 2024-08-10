import express from "express";
import { addToCart, clearCart, decreaseProductQty, removeProductFromCart, userCart } from "../Controllers/cart.js";
import { Authenticated } from '../Middlewares/auth.js';

const router=express.Router();
//add to Cart
router.post("/add",Authenticated,addToCart);
// get User Cart
router.get("/user",Authenticated,userCart);
//remove product from cart
router.delete("/remove/:productId",Authenticated,removeProductFromCart);
//clear all cart
router.delete("/clear",Authenticated,clearCart);
//decrease qty
router.post("/--qty",Authenticated,decreaseProductQty);

export default router;