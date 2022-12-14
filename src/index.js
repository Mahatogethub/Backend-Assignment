const express=require("express");
const mongoose=require("mongoose")
const route=require("./routes/route")

const app=express();

app.use(express.json());
mongoose.connect("mongodb+srv://Ranamahato:9XBWNazgyvZ41FGS@rana.1qocv4g.mongodb.net/Assignment", {
    useNewUrlParser: true
})
    .then(()=> console.log("mongodb is connect"))
    .catch((error)=>console.log(error.message))

app.use("/",route)

app.listen(3000,()=>{
console.log("Express app running on "+ 3000)
})