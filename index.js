const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 4000;

const courses = require("./data/data.json");
console.log(courses);

app.get("/", (req, res) => {
  res.send(courses);
});
app.get("/:id", (req, res) => {
  const id = +req.params.id;
  console.log(id);
  const singleCourse = courses.find((c) => c.id === id);
  res.send(singleCourse);
});
app.listen(port, () => {
  console.log("server running port:", port);
});
