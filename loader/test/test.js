const mdLoader = require("../markdownLoader");
const fs = require("fs");
fs.readFile("./loader/test/test.md", "utf-8", (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(mdLoader(data));
    }
});
