import {
  getFoods,
  getFoodById,
  insertFood,
  updateFoodById,
  deleteFoodById,
} from "../models/FoodModel.js";
import multer from "multer";

let categories = [
  {
    category: "Bánh Mì",
    src: "banhmi",
  },
  {
    category: "Bún",
    src: "bun",
  },
  {
    category: "Món Phụ",
    src: "mp",
  },
  {
    category: "Phở",
    src: "pho",
  },
  {
    category: "Thức Uống",
    src: "tu",
  },
  {
    category: "Tráng Miệng",
    src: "tm",
  },
];

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const body = req.body;
    const food = JSON.parse(body.food);

    const category = categories.find(
      (item) => item.category === food.food_category
    ).src;

    cb(null, `./images/${category}`);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file === undefined) {
    return;
  } else {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
};

export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

export const showFoods = (req, res) => {
  getFoods((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// get single Food
export const showFoodById = (req, res) => {
  getFoodById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// create Food
export const createFood = (req, res) => {
  let body = req.body;
  const food = JSON.parse(body.food);
  const category = categories.find(
    (item) => item.category === food.food_category
  ).src;

  food.food_src = `${category}/${food.food_src}`;

  const query = JSON.stringify(food)
    .replaceAll('":', "=")
    .replaceAll(',"', ",")
    .replaceAll('{"', "")
    .replaceAll("}", "");

    insertFood(query, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// update Food
export const updateFood = (req, res) => {
  const data = req.body;
  let body = req.body;
  const food = JSON.parse(body.food);
  const category = categories.find(
    (item) => item.category === food.food_category
  ).src;

  if (req.body.food_src == undefined) {
    food.food_src = `${category}/${food.food_src}`;
  }

  const query = JSON.stringify(food)
    .replaceAll('":', "=")
    .replaceAll(',"', ",")
    .replaceAll('{"', "")
    .replaceAll("}", "");

  const id = req.params.id;

  updateFoodById(query, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete Food
export const deleteFood = (req, res) => {
  const id = req.params.id;
  deleteFoodById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
