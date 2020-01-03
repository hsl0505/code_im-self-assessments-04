var fs = require("fs");
var path = require("path");

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, "utf8", function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(" ").length;
    callback(null, wordCount);
  });
};

// getWordCount("async-word-count/files/fileOne.txt", (err, data) =>
//   console.log(err, data)
// );
// console.log(path.join(__dirname, "files/fileOne.txt"));

// fs.readFile("async-word-count/files/fileOne.txt", "utf8", (err, data) =>
//   console.log(err, data)
// );

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  // YOUR CODE HERE
  getWordCount(filePathOne, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      let a = data;
      getWordCount(filePathTwo, (err, data) => {
        if (err) {
          callback(err, null);
        } else {
          let b = data;
          callback(null, a + b);
        }
      });
    }
  });
};

module.exports = getTotalWordCount;
