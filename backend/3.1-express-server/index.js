import express from "express";

const app = express();
const PORT = 3000;

/* HTTP REQUEST
GET => Request resource
POST => Send resource
PUT => Update resource (semua diupdate)
PATCH => Partially update resource (hanya bagian yang diupdate)
DELETE => Delete resource
*/

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
  res.sendStatus(200);
});

app.get("/about", (req, res) => {
  res.send("<h1>My name is Shidqi Amirul Haq</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact me at: shidqiamirulhaq@gmail.com</h1>");
});

app.post("/", (req, res) => {
  res.sendStatus(201);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
