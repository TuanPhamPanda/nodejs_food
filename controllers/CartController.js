import {
  getAllItems,
  getAItem,
  insertToCart,
  updateCartItemQty,
  deleteItemInCart,
  deleteAllItemsByUser,
} from "../models/CartModel.js";
import { format } from "./formatQuery.js";

// get all Items
export const allItems = (req, res) => {
  getAllItems(req.params.user_id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// get a Item
export const getItem = (req, res) => {
  const user_id = req.params.user_id;
  const food_id = req.params.food_id;
  getAItem(user_id, food_id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// add to cart
//successfully
export const addItems = (req, res) => {
  const data = req.body;

  getAItem(data.user_id, data.food_id, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      if (results.length === 0) {
        const query = format(data).replace("}", "");
        insertToCart(query, (err, results) => {
          if (err) {
            res.send(err);
          } else {
            res.json(results);
          }
        });
      } else {
        const updateJSON = {
          user_id: data.user_id,
          food_id: data.food_id,
          item_qty: data.item_qty + results[0].item_qty,
        };
        const query = format(updateJSON).replace("}", "");
        console.log(query);

        updateCartItemQty(query, (err, results) => {
          if (err) {
            res.send(err);
          } else {
            res.json(results);
          }
        });
      }
    }
  });
};

// update Item
export const updateItem = (req, res) => {
  const data = req.body;
  updateCartItemQty(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete a item in cart
export const deleteItem = (req, res) => {
  const user_id = req.params.user_id;
  const food_id = req.params.food_id;
  deleteItemInCart(user_id, food_id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete all items in cart
//when bill
export const deleteItems = (req, res) => {
  deleteAllItemsByUser(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
