const fs = require("fs");
const axios = require("axios");
const express = require("express");
const { clear } = require("console");
const { json } = require("body-parser");
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
// getPost(15)

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
// getPostAsync(15)

const appendToFile = (data) => {
  fs.appendFile("data.txt", `\n ${data}`, (err) => {
    if (err) throw err;
    console.log("data appended");
  });
};
// appendToFile("hello")

const copyFile = (fileName) => {
  fs.copyFile(fileName, `copy_of_${fileName}`, (err) => {
    if (err) throw err;
    console.log("Done");
  });
};
// copyFile("data.txt")

// the API Expects JSON data to be sent and that's why `JSON.stringify` is used
const newPost = JSON.stringify({
  title: "JavaScript Basics",
  body: "This post contains information about javaScript",
  // the id of the user who is going to create the post
  userId: 1,
});

const createPost = (post) => {
//   axios({
//     method: "post",
//     url: "https://jsonplaceholder.typicode.com/posts",
//     data: post,
//   });

  axios.post("https://jsonplaceholder.typicode.com/posts", post)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
};
createPost(newPost);
clear()
const newPost1 = JSON.stringify({
  id: 1,
  title: "Updated Title",
  body: "Updated body",
  userId: 1,
});

const updatePost = (id, data) => {
  
};

updatePost(1, newPost1);
const getUsers = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    let users = JSON.stringify(response.data);
    const saveUsers = (users) => {
      fs.writeFile("users.txt", users, (err) => {
        if (err) throw err;
      });
    };
    saveUsers(users);
  } catch (err) {
    throw err;
  }
};
// getUsers();

// clear()
app.listen(port, () => {
  // console.log(`app listening at http://localhost:${port}`);
});
