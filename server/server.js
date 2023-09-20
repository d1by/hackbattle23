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

app.route("/playerinfo")
    .get(async (req,res) => {
        // Viewing the database
        const items = await Player.find();
        res.send(items);
    })

app.route("/contractinfo")
    .get(async (req,res) => {
        // Viewing the database
        const items = await Contract.find();
        res.send(items);
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
    