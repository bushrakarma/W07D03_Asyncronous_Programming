const fs = require("fs");
const axios = require("axios");
const express = require("express");
const app = express();

const readFile = () => {
    fs.readFile("data.txt", (err, data) => {
        if(err){
            throw "Error is:" + err;
        }
        // data is buffer
        contentOfFile = data.toString();
        console.log(contentOfFile);
        // return contentOfFile;
    })
};
readFile()
const writeFile = () => {
    fs.writeFile("text.txt", "A new file has been created", (err) =>{
        if(err) throw err
    })
};
writeFile()