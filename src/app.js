const express= require('express');
const app = express();
const path= require ("path"); 
const hbs = require("hbs");
//mongodb+srv://Aditya:<password>@catturday.xj7gt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority Aditya maltpussy  

require("./db/conn");
const Register= require("./models/registers");
const port= process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(express.static(static_path)) //tells express to use the static resource
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("index");
}); 

app.get("/login", (req, res) => {
    res.render("login");
})


app.get("/register", (req, res) => {
    res.render("register");
})

//creating a user in our database
app.post("/register", async(req, res) => {
    try{
       const password= req.body.psw;
       const cPassword= req.body.pswrepeat; 
       if(password===cPassword){
        const registerCustomer= new Register({
            fname: req.body.fname,
            lname: req.body.lname,
            gender: req.body.gender,
            pno: req.body.pno,
            email: req.body.email,
            psw: password,
            pswrepeat: cPassword

        }) 

        const registered= await registerCustomer.save();
        res.status(201).render("index");
       } else{
           res.send("Kindly enter the same password!");
       }
    }
    catch (error){
        res.status(400).send("Go back to the home page");
    }
  })

  //login validation
  app.post("/login", async(req, res)=>
  {

    try{
        const email=req.body.email;
        const psw= req.body.psw;

        const useremail= await Register.findOne({email:email});
        if(useremail.psw===psw){
            res.status(201).render("index");
        } else{
            res.send("Invalid Login");
        }
    }
    catch(error){
        res.status(400).send("Bad Request");
    }
  })
  app.get("/contact", (req, res) => {
    res.render("contact");
})


app.listen(port, () =>{
    console.log(`Server is running at port ${port}`);
})