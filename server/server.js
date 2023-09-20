const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

//functions
function readCSV(name){
    fs.createReadStream('../data_preprocessing/Clean_FIFA22_Data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results[0]);
    });
}
function getImage(num){
    async function fetchText() {
        const url = 'http://127.0.0.1:5000/graphs/'+num;
        let response = await fetch(url);
        console.log(response.status); // 200
        console.log(response.statusText); // OK
        if (response.status === 200) {
            let data = await response.text();
            console.log(data);
            // let jsonData = JSON.parse(data);
            // for (let i = 0; i < jsonData.length ; i++ ){
            //     if(jsonData[i].name===user){
            //         if(jsonData[i].password===password){
            //             loggedIn = true
            //             console.log(jsonData[i]);
            //             navigate("/", {state:jsonData[i]});
            //         }else{
            //             alert("Wrong password, try again");
            //         }
            //     }
            // }
            // if (loggedIn===false){
            //     console.log("User does not exist. Redirecting to Sign up Page.");
            //     navigate("/login");
            // }
        }
    }
    fetchText();
}
getImage(29);

//database shit
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

//all stuff
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
    .post(async (req, res)=>{
        const search_name = req.body.name;
        const items = await Player.find();
    })

app.route("/contracts")
    .get(async (req,res) => {
        // Viewing the database
        const items = await Contract.find();
        res.send(items);
    })
    .post(async (req,res) => {
        //const playername = req.body.playername;
        //const teamname = req.body.teamname;
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

