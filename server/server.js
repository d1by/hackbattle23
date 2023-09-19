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
    console.log("Server is up and running on port 3100..");
})


app.post("/", function(req, res) {
    console.log("post recieved"); //
    console.log(req.body.cityName); //
    const query = req.body.cityName; //
    const appid = "e41206f753c1488f93c34642de84f1a4";
    const units = "metric"; //


    url = "https://api.openweathermap.org/data/2.5/weather?&q="+ query + "&appid="+ appid +"&units="+ units;
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;

            res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celcius." + " Feels like " + description + " in "+ query + " </h1>")
            icon = weatherData.weather[0].icon;
            weatherUrl = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write("<img src = " + weatherUrl + ">");
            res.send();
        })
    })
})