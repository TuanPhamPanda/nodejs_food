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

const router = express.Router();

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
router.post("/api/cartItem", addItems);

// get a item in cart
router.get("/api/cartItem/:user_id/:food_id", getItem);

// get all items by user id
router.get("/api/cartItem/:user_id", allItems);

// update item qty
router.put("/api/cartItem/", updateItem);

// delete a item in cart
router.delete("/api/cartItem/:user_id/:food_id", deleteItem);

// delete all items in cart
router.delete("/api/cartItem/:id", deleteItems);



////////////////////////// Booking ////////////////////////////////
router.post("/api/booking/", createBooking);



////////////////////////// Bill Details ////////////////////////////////
router.post("/api/billdetails", createBillDetails);
router.get("/api/billdetails/:id", getBillDetailsById);



////////////////////////// Bill Status ////////////////////////////////
router.get("/api/billstatus/new", showNewestStatusId);
router.post("/api/billstatus", createBillStatus);
router.get("/api/billstatus/user/:id", getAllBillsByUser);
router.get("/api/billstatus/bill/:id", getAllBillsByBill);
router.get("/api/billstatus", getAllBills);
router.put("/api/billstatus/:id", updateBillStatus);
router.put("/api/billstatus/paid/:id", );
router.put("/api/billstatus/cancel/:id", cancelBillStatus);





// export default router
export default router;