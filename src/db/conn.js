const mongoose= require("mongoose");
mongoose.connect("mongodb+srv://Aditya:wholetthecatsout@catturday.xj7gt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/myFirstDatabase", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`Connection is Successful`);
}).catch((e) => {
console.log(`Connection Failed!`);

})
