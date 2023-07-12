import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/routes.js";
import path from 'path';
const __dirname = path.resolve();

const PORT = process.env.PORT || 8081;

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.json({ message: "Welcome to restaurant api" });
});

app.use(router);

app.use(express.static("images"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
