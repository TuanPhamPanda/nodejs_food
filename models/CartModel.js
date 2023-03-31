import db from "../config/database.js";

// get all items by user id
//page cart
export const getAllItems = (id, result) => {
  db.query(`SELECT * FROM cart, user, food WHERE cart.user_id = ${id} AND user.user_id = cart.user_id AND food.food_id = cart.food_id GROUP BY food.food_id, user.user_id`, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// get a items by user id, food id
//check updata cart
export const getAItem = (user, food, result) => {
  db.query(
    "SELECT * FROM cart WHERE user_id = ? AND food_id = ?",
    [user, food],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// insert new item to cart
export const insertToCart = (data, result) => {
  db.query("INSERT INTO cart SET " + data, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

// update qty of a cart item
//update cart when equals food_id and user_id
export const updateCartItemQty = (data, result) => {
  db.query(`UPDATE cart SET ${data}`, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// delete cart item
export const deleteItemInCart = (user, food, result) => {
  db.query(
    "DELETE FROM cart WHERE user_id = ? AND food_id = ?",
    [user, food],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// delete all Items
export const deleteAllItemsByUser = (id, result) => {
  db.query("DELETE FROM cart WHERE user_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
