const express = require("express")
const app = express()
const port = 3000;
const path = require("path");
const profiles = [{

//Sports profiles 
    "id": 1,
    "Name": " John Mayor",
    "Age": "22years",
    "url": "profile1.jpg",
    "Sports": "Archery",
    "Gender": "Male",
    "Location": "'Amsterdam"

  },{
    "id": 2,
    "Name": "Derrick Benson",
    "Age": "32years",
    "url": "profile2-golf.jpg",
    "Sports": "Golf",
    "Gender": "Male",
    "Location": "Rotterdam"
  },{
    "Name": "Gideon Davidson",
    "Age": "34years",
    "url": "profile3-archery.jpg",
    "Sports": "Archery",
    "Gender": "Male",
    "Location": "Utrecht"
  },{
    "id": 4,
    "Name": " Nina Brent",
    "Age": "27",
    "url": "profile3-fitness.jpg",
    "Sports": "Skating",
    "Gender": "Female",
    "Location": "Arnhem"
  },{
    "id": 5,
    "Name": " Daniel Peterson",
    "Age": "23years",
    "url": "profile3-fitness.jpg",
    "Sports": "Football",
    "Gender": "Male",
    "Location": "Groningen"
  },{
    "id": 6,
    "Name": "Mandy Abrah ",
    "Age": "20years",
    "url": "profile6-tennis.jpg",
    "Sports": "Tennisplayer",
    "Gender": "Female",
    "Location": "Amsterdam"
  },{
    "id": 7,
    "Name": "Keisha Alexander ",
    "Age": "25years",
    "url": "profile7-swimmer.jpg",
    "Sport": "Swimmer",
    "Gender": "Female",
    "Location": "Rotterdam"

  },{
    "id": 8,
    "Name": "Arthur Prince  ",
    "Age": "25years",
    "url": "basketball.jpg",
    "Sport": "Basketball player",
    "Gender": "Male",
    "Location": "Arnhem"

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
  res.render("profilelist")
})



app.get('/', (req, res) => {
  res.render('index')
})

app.use((req, res, next) => {
  res.status(404).render("404");
});

// 404 file aanmaken of stylen anders console.log

//port listening to 
app.listen(port, () => {
  console.log(`Web app listening on ${port}`)
})