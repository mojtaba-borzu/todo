var express = require("express");
var cors = require('cors')
var app = express();
app.use(cors())
app.get("/url", (req, res, next) => {
    res.json([{name:"mojtaba",family:"borzu"},{name:"ali",family:"khodai"}]);
   });

app.listen(3001, () => {
 console.log("Server running on port 3001");
});