
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
  },{//art profiles
    "id": 3,
    "name": "Gideon Davidson",
    "age": "34years",
    "url": "artprofile1.jpg",
    "art": "painting",
    "gender": "Male",
    "location": "Utrecht"
  },{
    "id": 4,
    "name": " Nina Brent",
    "age": "27",
    "url": "artprofile2.jpg",
    "art": "painting",
    "gender": "Female",
    "location": "Arnhem"
  },{//food profiles
    "id": 5,
    "name": "Bridjet Peterson",
    "age": "23years",
    "url": "foodprofile1.jpg",
    "food": "Chef",
    "gender": "Female",
    "location": "Groningen"
  },{
    "id": 6,
    "name": "James Brown ",
    "age": "20years",
    "url": "foodprofile2.jpg",
    "food ": "Food lover",
    "gender": "Male",
    "location": "Amsterdam"
  },{//Games profiles
    "id": 17,
    "name": "Bridjet Peterson",
    "age": "23years",
    "url": "gameprofile2.jpg",
    "food": "Chef",
    "gender": "Female",
    "location": "Groningen"
  },{
    "id": 18,
    "name": "James Brown ",
    "age": "20years",
    "url": "gameprofile1.jpg",
    "food ": "Food lover",
    "gender": "Male",
    "location": "Amsterdam"
  },
  
  
  {//fashion
    "id": 7,
    "name": "Keisha Alexander ",
    "age": "25years",
    "url": "fashionprofile1.jpg",
    "fashion": "Model",
    "gender": "Female",
    "location": "Rotterdam"

  },{
    "id": 8,
    "name": "Mandy Abrah ",
    "age": "22years",
    "url": "fashionprofile2.jpg",
    "fashion": "Shopperholic",
    "gender": "Female",
    "location": "Arnhem"

  },{//Beauty
    "id": 9,
    "name": "Justine peet",
    "age": "26years",
    "url": "beautyprofile1.jpg",
    "beauty": "Love beauty",
    "gender": "Female",
    "location": "Utrecht"

  },{
    "id": 9,
    "name": "Justine peet",
    "age": "30years",
    "url": "beautyprofile2.jpg",
    "beauty": "Love beauty",
    "gender": "Female",
    "location": "Arnhem"

  },{//Travel
    "id": 10,
    "name": "Jalama Deen",
    "age": "31years",
    "url": "travelprofile1.jpg",
    "travel": "traveller",
    "gender": "Female",
    "location": "Rotterdam"

  },{
    "id": 11,
    "name": "Justin Tijm",
    "age": "23years",
    "url": "travelprofile1.jpg",
    "travel": "traveller",
    "gender": "Male",
    "location": "Groningen"

  },{//Music
    "id": 12,
    "name": "David davidson",
    "age": "34years",
    "url": "musicprofile1.jpg",
    "Music": "DJ",
    "gender": "Male",
    "location": "Amsterdam"
  },{
    "id": 13,
    "name": "Britney Bright",
    "age": "22years",
    "url": "musicprofile2.jpg",
    "Music": "DJ",
    "gender": "Female",
    "location": "Arnhem"
  },{//books profiles
    "id": 14,
    "name": "Laiba Ander",
    "age": "29years",
    "url": "profilebook1.jpg",
    "Book": "Literature teacher",
    "gender": "Female",
    "location": "Utrecht"
  },{
    "id": 15,
    "name": "Ben White",
    "age": "24years",
    "url": "profilebook2.jpg",
    "Music": "DJ",
    "gender": "Male",
    "location": "Rotterdam"
  },{//Dance profiles 
    "id": 16,
    "name": "Sharron White",
    "age": "29years",
    "url": "danceprofile1",
    "Dance": "Bale dancer ",
    "gender": "Female",
    "location": "Amsterdam"
  },{
    "id": 16,
    "name": "Bram ban ",
    "age": "18years",
    "url": "danceprofile2.jpg",
    "Dance": "Street dancer ",
    "gender": "Male",
    "location": "Groningen"
  }
  
]




//Static files 
app.use(express.static('public'))
// app.use ('/css', express.static( __dirname + 'public/css'))
// app.use ('/js', express.static( __dirname + 'public/js'))
// app.use ('/images', express.static( __dirname + 'public/imagesn'))



//set views 
app.set('views', path.join(__dirname, 'views'))
app.set("view engine", 'ejs')

//show profiles with database 

//routes 
app.get('/search', (req, res) => {
  res.render("searchlist") 
});

app.get('/profiles', async (req,res) => {
  console.log(req.query.hobby)
  const query =  {}
  const profiles = await db.collection("profiles").find({}).toArray()
  console.log(profiles)
  res.render("profilelist",{
    profiles
  })
});



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