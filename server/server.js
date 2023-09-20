const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express();
// app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// app.use(express.static("public"));

mongoose.connect('mongodb+srv://cjaradhye:Aradhye12345@cluster0.hvylnwq.mongodb.net/?retryWrites=true&w=majority/hackbattle');

const playerSchema = new mongoose.Schema({
    name: String,
    password: String,
    club_history: Array,
    clauses: {
        duration: Array,
        legalities: Array
    }
})

const teamSchema = new mongoose.Schema({
    name: String,
    password: String,
    club_history: Array,
    clauses: {
        duration: Array,
        legalities: Array
    }
})

const contractSchema = new mongoose.Schema({
    latex_file: String, 
    hash_latex: String,
    public_keys: {
        from: String,
        to: String
    }
})

const Player = mongoose.model('player', playerSchema);
const Contract = mongoose.model('contract', contractSchema);

// 

app.route("/")
    .get((req, res)=>{
        res.send("<h1>Hello World</h1>");
    })

app.route("/players")
    .get(async (req,res) => {
        // Viewing the database
        const items = await Player.find();
        res.send(items);
    })

app.route("/contracts")
    .get(async (req,res) => {
        // Viewing the database
        const items = await Contract.find();
        res.send(items);
    })
    .post(async (req,res) => {
        
        const weekwage = req.body.weekwage;
        const date = req.body.date;
        const legalities = req.body.legalities;

        const obj = {
            weekwage: weekwage,
            date: date,
            legalities: legalities
        }

        console.log(obj);

        // let name;
        // let finalData;
        // const data = await User.find();
        // console.log(obj);
        
        // let p1 = new Promise((resolve,reject)=>{
        //     console.log("reached here");
        //     for(let i = 0; i < data.length; i++){
        //         const classes = data[i].data.classes
        //         for (let j = 0; j<classes.length; j++){
        //             const tempName = classes[j][5];
        //             console.log(tempName);
        //             if(tempName===facultyName){
        //                 console.log("This is the final name" + facultyName);
        //                 data[i].notifications.push(obj)
        //                 name = data[i].name;
        //                 finalData = data[i].notifications;
        //                 resolve(finalData);
        //             }
        //         }
        //     }
        // })
        
        // p1.then((final)=>{
        //     User.findOneAndUpdate({name: name},{$set:{notifications: final}}).then((value)=>{
        //         console.log(final)
        //     });
        // })
    
    

    })
    

app.listen(5500,()=>{
    console.log("Server is up and running on port 5500..");
})



// const Player1 = new Player({
    //     name: "Aradhye",
    //     password: "swarup",
    //     club_history: [],
    //     clauses: {
    //         duration: [],
    //         legalities: []
    // }});
    
    // const Player2 = new Player({
    //     name: "Harsh",
    //     password: "kumarsinha",
    //     club_history: [],
    //     clauses: {
    //         duration: [],
    //         legalities: []
    // }});
    
    // const Player3 = new Player({
    //     name: "Meet",
    //     password: "parikh",
    //     club_history: [],
    //     clauses: {
    //         duration: [],
    //         legalities: []
    // }});
    
    // const Player4 = new Player({
    //     name: "Tanmay",
    //     password: "paturunaga",
    //     club_history: [],
    //     clauses: {
    //         duration: [],
    //         legalities: []
    // }});
    
    // const Player5 = new Player({
    //     name: "Dibyanshu",
    //     password: "mohapatra",
    //     club_history: [],
    //     clauses: {
    //         duration: [],
    //         legalities: []
    // }});
    
    // const Player6 = new Player({
    //     name: "Gagan",
    //     password: "bangagiri",
    //     club_history: [],
    //     clauses: {
    //         duration: [],
    //         legalities: []
    // }});
    
    // Player.bulkSave([Player1, Player2, Player3, Player4, Player5, Player6]);
    



app.route("/sendmessage")
    .post(async (req,res) => {
        
        const weekwage = req.body.weekwage;
        const date = req.body.date;
        const legalities = req.body.legalities;

        const obj = {
            weekwage: weekwage,
            date: date,
            legalities: legalities
        }

        console.log(obj);

        // let name;
        // let finalData;
        // const data = await User.find();
        // console.log(obj);
        
        // let p1 = new Promise((resolve,reject)=>{
        //     console.log("reached here");
        //     for(let i = 0; i < data.length; i++){
        //         const classes = data[i].data.classes
        //         for (let j = 0; j<classes.length; j++){
        //             const tempName = classes[j][5];
        //             console.log(tempName);
        //             if(tempName===facultyName){
        //                 console.log("This is the final name" + facultyName);
        //                 data[i].notifications.push(obj)
        //                 name = data[i].name;
        //                 finalData = data[i].notifications;
        //                 resolve(finalData);
        //             }
        //         }
        //     }
        // })
        
        // p1.then((final)=>{
        //     User.findOneAndUpdate({name: name},{$set:{notifications: final}}).then((value)=>{
        //         console.log(final)
        //     });
        // })
    
    

    })