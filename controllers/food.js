import {
    getFoods,
    getFoodById,
    insertFood,
    updateFoodById,
    deleteFoodById,
} from "../models/FoodModel.js";
import multer from "multer";


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, `./images/${category}`);
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
export const upload = multer({
    storage: storage,
    fileFilter: fileFilter
  });
  

export const showFoods=(req,res)=>{
    getFoods((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// get single Food
export const showFoodById=(req,res)=>{
    getFoodById(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

let categories = [
    {
        category: "Bánh Mì",
        src: "banhmi"
    },
    {
        category: "Bún",
        src: "bun"
    },
    {
        category: "Món Phụ",
        src: "mp"
    },
    {
        category: "Phở",
        src: "pho"
    },
    {
        category: "Thức Uống",
        src: "tu"
    },
    {
        category: "Tráng Miệng",
        src: "tm"
    },
]

// create Food
var category;
export const createFood = (req,res) => {

    const food_src = req.file.originalname;
    let body = req.body;

    category = categories.find(item=>item.category === body.food_category);
    const sourceImage = category.src;

    body.food_src = `${food_src}/${sourceImage}`; 
    console.log(body);
    res.send(body);

    /*
    insertFood(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
    */
};

// update Food
export const updateFood=(req,res)=>{
    const data = req.body;
    const file = req.file.path;
    const id = req.params.id;
    updateFoodById(data,id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// delete Food
export const deleteFood=(req,res)=>{
    const id = req.params.id;
    deleteFoodById(id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};