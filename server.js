
const dotenv = require("dotenv").config();
const{MongoClient}= require("mongodb");
const {ObjectId} = require("mongodb");

//To test if it works 
console.log(process.env.TESTVAR)

const express = require("express")
const app = express()
const port = process.env.PORT || 3000;//port maken
const path = require("path");
let db = null;
const profiles = [
  {

//Sports profiles 
    "id": 1,
    "name": " John Mayor",
    "age": "22years",
    "url": "profile1.jpg",
    "sports": "archery",
    "gender": "Male",
    "location": "'Amsterdam"

  },{
    "id": 2,
    "name": "Derrick Benson",
    "age": "32years",
    "url": "profile2-golf.jpg",
    "sports": "Golf",
    "gender": "Male",
    "location": "Rotterdam"
  },{
    "id": 2,
    "name": "Gideon Davidson",
    "age": "34years",
    "url": "profile3-archery.jpg",
    "sports": "Archery",
    "gender": "Male",
    "location": "Utrecht"
  },{
    "id": 4,
    "name": " Nina Brent",
    "age": "27",
    "url": "profile3-fitness.jpg",
    "sports": "Skating",
    "gender": "Female",
    "location": "Arnhem"
  },{
    "id": 5,
    "name": " Daniel Peterson",
    "age": "23years",
    "url": "profile3-fitness.jpg",
    "sports": "Football",
    "gender": "Male",
    "location": "Groningen"
  },{
    "id": 6,
    "name": "Mandy Abrah ",
    "age": "20years",
    "url": "profile6-tennis.jpg",
    "sports": "Tennisplayer",
    "gender": "Female",
    "location": "Amsterdam"
  },{
    "id": 7,
    "name": "Keisha Alexander ",
    "age": "25years",
    "url": "profile7-swimmer.jpg",
    "sports": "Swimmer",
    "gender": "Female",
    "location": "Rotterdam"

  },{
    "id": 8,
    "name": "Arthur Prince  ",
    "age": "25years",
    "url": "basketball.jpg",
    "sports": "Basketballplayer",
    "gender": "Male",
    "location": "Arnhem"

  },

]




//Static files 
app.use(express.static('public'))
// app.use ('/css', express.static( __dirname + 'public/css'))
// app.use ('/js', express.static( __dirname + 'public/js'))
// app.use ('/images', express.static( __dirname + 'public/imagesn'))


//set views 
app.set('views', path.join(__dirname, 'views'))
app.set("view engine", 'ejs')

//routes 
app.get('/search', (req, res) => {
  res.render("searchlist")
})

app.get('/profiles', (req,res) => {
  res.render("profilelist",{
    profiles
  })
})



app.get('/', (req, res) => {
  res.render('index')
})
//error
//app.use((req, res, next) => {
 // res.status(404).render("404");
//});

// 404 file aanmaken of stylen anders console.log


 // Connect to datatbase 

async function connectDB() {
  const uri = process.env.DATABASE_URL;
  const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });
  try {
      await client.connect();
      db = client.db(process.env.DB_NAME);
  } catch (error) {
    
     
  }

}

//port listening to 
app.listen(port, () => {
  console.log(`Web app listening on ${port}`)
  connectDB().then(() => console.log("We have a connection to Mongo!"));
})