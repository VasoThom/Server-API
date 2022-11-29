import express from "express";
import Users from "./Users.js";
const app = express();

app.listen(3000, () => {
  console.log("Welcome ");
});
app.get("/users", (req, res) => {
  //   res.json(Users);

  const query = Users.find((id) => id.first_name === req.query.name);
  if (query) {
    res.send(query);
    console.log(query);
  } else {
    res.send("Name not found");
    console.log("not found");
  }
});
app.get("/users/:id", (req, res) => {
  const user = Users.find((id) => id.id === +req.params.id);

  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send("User not found");
  }
});
