import express from "express";
import {
    showFoods,
    showFoodById,
    createFood,
    updateFood,
    deleteFood,
    upload
} from "../controllers/FoodController.js";

import {
    ShowUser,
    createAccount
} from "../controllers/UserController.js";

import {
    addItems,
    getItem,
    updateItem,
    allItems,
    deleteItem,
    deleteItems
} from "../controllers/CartController.js";

import {
    createBooking
} from "../controllers/BookTableController.js";

import {
    createBillDetails,getBillDetailsById
} from "../controllers/BillDetailsController.js";

import {
    showNewestStatusId,
    createBillStatus, 
    getAllBillsByUser,
    getAllBillsByBill,
    getAllBills,
    updateBillStatus,
    updateBillPaid,
    cancelBillStatus
} from "../controllers/BillStatusController.js";
import { authenToken, refreshToken, logout } from "../middleware/Authentication.js";

const router = express.Router();

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// get all Food
router.get("/api/foods", showFoods);

// get single Food 
router.get("/api/foods/:id", showFoodById);

// create Food
router.post("/api/foods",upload.single('food_src'), createFood);

// update Food 
router.put("/api/foods/:id",upload.single('food_src'), updateFood);

// delete Food
router.delete("/api/foods/:id", deleteFood);

////////////////////////// USER ////////////////////////////////
router.post("/api/login", ShowUser);

// create account
router.post("/api/register", createAccount);


////////////////////////// CART ////////////////////////////////
// add to cart
router.post("/api/cartItem",authenToken, addItems);

// get a item in cart
router.get("/api/cartItem/:user_id/:food_id", authenToken, getItem);

// get all items by user id
router.get("/api/cartItem/:user_id",authenToken, allItems);

// update item qty
router.put("/api/cartItem/",authenToken, updateItem);

// delete a item in cart
router.delete("/api/cartItem/:user_id/:food_id",authenToken, deleteItem);

// delete all items in cart
router.delete("/api/cartItem/:id",authenToken, deleteItems);

////////////////////////// Booking ////////////////////////////////
router.post("/api/booking/", createBooking);

////////////////////////// Bill Details ////////////////////////////////
router.post("/api/billdetails",authenToken, createBillDetails);
router.get("/api/billdetails/:id",authenToken, getBillDetailsById);

////////////////////////// Bill Status ////////////////////////////////
router.get("/api/billstatus/new", showNewestStatusId);
router.post("/api/billstatus", createBillStatus);
router.get("/api/billstatus/user/:id", getAllBillsByUser);
router.get("/api/billstatus/bill/:id", getAllBillsByBill);
router.get("/api/billstatus", getAllBills);
router.put("/api/billstatus/:id", updateBillStatus);
router.put("/api/billstatus/paid/:id", );
router.put("/api/billstatus/cancel/:id", cancelBillStatus);

//refreshToken
router.post('/api/refreshToken', refreshToken);
router.post('/api/logout', logout);

// export default router
export default router;