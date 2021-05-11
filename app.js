const fs = require("fs");
const axios = require("axios");
const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.json("Hello");
});
const readFile = () => {
  fs.readFile("data.txt", (err, data) => {
    if (err) {
      throw "Error is:" + err;
    }
    // data is buffer
    contentOfFile = data.toString();
    // console.log(contentOfFile);
  });
};
readFile();
const writeFile = () => {
  fs.writeFile("text.txt", "A new file has been created", (err) => {
    if (err) throw err;
  });
};
writeFile();

const getPost = (id) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}/`)
    .then((responce) => {
      console.log(responce.data);
    })
    .catch((err) => {
      throw err;
    });
};
getPost(15)

const getPostAsync = async (id) => {
  try {
    const responce = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/`
    );
    console.log(responce.data);
  } catch (err) {
    throw err;
  }
};
getPostAsync(15)
app.listen(port, () => {
  // console.log(`app listening at http://localhost:${port}`);
});
