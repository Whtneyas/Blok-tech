//init app
const express = require("express")
const dotenv = require("dotenv").config();
const {
  MongoClient
} = require("mongodb");
const {
  ObjectId
} = require("mongodb");
const bodyParser = require('body-parser');

/**Variables */
const app = express();
const port = process.env.PORT || 3000; //port maken
const path = require("path");
let db = null;
const profiles = [{
    "id": 1,
    "name": " John Mayor",
    "age": "22years",
    "url": "profile1.jpg",
    "hobby": "archery",
    "gender": "Male",
    "location": "Amsterdam"
  }, {
    "id": 2,
    "name": "Derrick Benson",
    "age": "32years",
    "url": "profile2-golf.jpg",
    "hobby": "Golf",
    "gender": "Male",
    "location": "Rotterdam"
  }, {
    "id": 3,
    "name": "Gideon Davidson",
    "age": "34years",
    "url": "artprofile1.jpg",
    "hobby": "painting",
    "gender": "Male",
    "location": "Utrecht"
  }, {
    "id": 4,
    "name": " Nina Brent",
    "age": "27",
    "url": "artprofile2.jpg",
    "hobby": "painting",
    "gender": "Female",
    "location": "Arnhem"
  }, {
    "id": 5,
    "name": "Bridjet Peterson",
    "age": "23years",
    "url": "foodprofile1.jpg",
    "hobby": "Chef",
    "gender": "Female",
    "location": "Groningen"
  }, {
    "id": 6,
    "name": "James Brown ",
    "age": "20years",
    "url": "foodprofile2.jpg",
    "hobby ": "Food lover",
    "gender": "Male",
    "location": "Amsterdam"
  }, {
    "id": 17,
    "name": "Bridjet Peterson",
    "age": "23years",
    "url": "gameprofile2.jpg",
    "hobby": "Chef",
    "gender": "Female",
    "location": "Groningen"
  }, {
    "id": 18,
    "name": "James Brown ",
    "age": "20years",
    "url": "gameprofile1.jpg",
    "hobby ": "Food lover",
    "gender": "Male",
    "location": "Amsterdam"
  },


  {
    "id": 7,
    "name": "Keisha Alexander ",
    "age": "25years",
    "url": "fashionprofile1.jpg",
    "hobby": "Model",
    "gender": "Female",
    "location": "Rotterdam"

  }, {
    "id": 8,
    "name": "Mandy Abrah ",
    "age": "22years",
    "url": "fashionprofile2.jpg",
    "hobby": "Shopperholic",
    "gender": "Female",
    "location": "Arnhem"

  }, {
    "id": 9,
    "name": "Justine peet",
    "age": "26years",
    "url": "beautyprofile1.jpg",
    "beauty": "Love beauty",
    "gender": "Female",
    "location": "Utrecht"

  }, {
    "id": 9,
    "name": "Justine peet",
    "age": "30years",
    "url": "beautyprofile2.jpg",
    "hobby": "Love beauty",
    "gender": "Female",
    "location": "Arnhem"

  }, {
    "id": 10,
    "name": "Jalama Deen",
    "age": "31years",
    "url": "travelprofile1.jpg",
    "travel": "traveller",
    "gender": "Female",
    "location": "Rotterdam"

  }, {
    "id": 11,
    "name": "Justin Tijm",
    "age": "23years",
    "url": "travelprofile2.jpg",
    "hobby": "traveller",
    "gender": "Male",
    "location": "Groningen"

  }, {
    "id": 12,
    "name": "David davidson",
    "age": "34years",
    "url": "musicprofile2.jpg",
    "hobby": "music",
    "gender": "Male",
    "location": "Amsterdam"
  }, {
    "id": 13,
    "name": "Britney Bright",
    "age": "22years",
    "url": "musicprofile2.jpg",
    "hobby": "DJ",
    "gender": "Female",
    "location": "Arnhem"
  }, {
    "id": 14,
    "name": "Laiba Ander",
    "age": "29years",
    "url": "profilebook1.jpg",
    "hobby": "Literature teacher",
    "gender": "Female",
    "location": "Utrecht"
  }, {
    "id": 15,
    "name": "Ben White",
    "age": "24years",
    "url": "profilebook2.jpg",
    "hobby": "DJ",
    "gender": "Male",
    "location": "Rotterdam"
  }, {
    "id": 16,
    "name": "Sharron White",
    "age": "29years",
    "url": "danceprofile1",
    "hobby": "Bale dancer ",
    "gender": "Female",
    "location": "Amsterdam"
  }, {
    "id": 16,
    "name": "Bram ban ",
    "age": "18years",
    "url": "danceprofile2.jpg",
    "hobby": "Street dancer ",
    "gender": "Male",
    "location": "Groningen"
  }

]

//Middleware and Static files
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//set views en template engines 
app.set('views', path.join(__dirname, 'views'))
app.set("view engine", 'ejs')



//ROUTES

//Route for the searchpage 
app.get('/search', (req, res) => {
  res.render("searchlist")
});

//Route for the the following page (Niet afgemaakt )
app.get('/followers', async (req, res) => {
  const followers = await db.collection("followers").find({}).toArray();

  res.render("followers", followers)
});


app.post('/follow', async (req, res) => {
  console.log("test", req.body)

  let test = {
    user: req.body.follow
  }
  await db.collection("followers").insertOne(test);

  res.render("followers",)

});

//route for the profile pages 
//gaat de profiles in de database tonen als  de gebruiker de een hobby uit de formulier kies.
app.get('/profiles', async (req, res) => {
  console.log(req.query.hobby)

  const profiles = await db.collection("profiles").find({}).toArray();
  console.log(profiles)
  res.render("profilelist", {
    profiles
  })
});

app.post('/profiles', async (req, res) => {
  console.log(req.body.hobby)
  const query = {
    "hobby": req.body.hobby
  }
  const filteredProfiles = await db.collection("profiles").find(query).toArray();
   console.log(filteredProfiles)

  res.render("profilelist", {
    profiles: filteredProfiles
  })
})
//route for the inlogpagina.
app.get('/', (req, res) => {
  res.render('index')
})
//404 Error als de route niet bestaat 
app.use((req, res, next) => {
  res.status(404).render("404");
  console.log("page cannot be found")
});

/*********************************************
 Connection to datatbase
**********************************************/

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

//De server starts listening to port 3000
app.listen(port, () => {
  console.log(`Web app listening on ${port}`)
  connectDB().then(() => console.log("We have a connection to Mongo!"));
})