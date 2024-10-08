const express = require("express");
const app = express();
let port = 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})

// app.use((req,res) =>{
//     console.log(req);
//     console.log("Request Received");
//     res.send("Hello World");
// })

// app.get("/", (req, res) => {
//     res.send("this is nodemon sever");
// });
// app.get("/apple", (req, res) => {
//     res.send("Hello Apple");
// });
// app.get("/orange", (req, res) => {
//     res.send("Hello Orange");
// });
// app.get("*", (req, res) => {
//     res.send("Path does not found");
// });

app.get("/", (req, res) => {
    res.send("this is nodemon sever");
});
app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    res.send(`You are viewing @${username} profile page`);
});
app.get("/search", (req, res) => {
    console.log(req.query);
    res.send("this is nodemon sever");
});