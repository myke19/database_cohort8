const express = require("express")
const mongoose = require('mongoose');
const userRoute = require("./routes/userRoutes.js")
const productRoute = require("./routes/productRoutes.js");

const compass_string = "mongodb://localhost:27017/cohort8_db"
const atlas_string = "mongodb://apeyiomotobi04_db_user:benita06@ac-byl4cdr-shard-00-00.kmrpclp.mongodb.net:27017,ac-byl4cdr-shard-00-01.kmrpclp.mongodb.net:27017,ac-byl4cdr-shard-00-02.kmrpclp.mongodb.net:27017/?ssl=true&replicaSet=atlas-nnppk8-shard-0&authSource=admin&appName=Cluster0"

mongoose.connect(atlas_string)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("Connection Error: ", err));

const app = express()
const port = 4444


app.use(express.json())

app.get("/" , (req, res) => {
    res.send("Server is active")
})
app.use("/users", userRoute)
app.use("/products", productRoute)
app.listen(port, () => {
    console.log(`server is up and running on port : ${port}`)
})