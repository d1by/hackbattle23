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

//database shit
mongoose.connect('mongodb+srv://cjaradhye:Aradhye12345@cluster0.hvylnwq.mongodb.net/?retryWrites=true&w=majority/hackbattle');
const playerSchema = new mongoose.Schema({
    id: Number,
    name: String,
    nationality: String,
    password: String,
    club: String,
    wage: String,
    height: String,
    weight: String,
    img: String
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

//functions
function readCSV(){
    fs.createReadStream('../data_preprocessing/Clean_FIFA22_Data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
        const playerArray = [36,29,64,82,251,14136,1591,241,242,243];
        for(let j = 0; j < 10; j++){
            let i = playerArray[j];
            let temp = results[i];
            const img = await getImage(i);
            console.log(img);
            const obj = new Player({
                id: i,
                name: temp.Name,
                nationality: temp.Nationality,
                password: "todopassword",
                club: temp.Club,
                wage: temp.Wage,
                height: temp.Height,
                weight: temp.Weight,
                img: img
            });
            
        }
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
            return(data)
        }
    }
    fetchText();
}
readCSV();

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

