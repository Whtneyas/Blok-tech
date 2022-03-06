
const express = require ("express")
const app = express()
const port = 3000;
const profiles = [
                    {
                  //Art profiles 
                  "id": 1,
                  "Name": "Jennifer Anderson",
                  "Age" : "22years",
                  "url" : "",
                  "Art": "Painting",
                  "Gender": "Female"
                  },
                    {
                  //art 2 
                  "id": 2,
                  "Name": " Stephany Sophie",
                  "Age" : "25years",
                  "url" : "",
                  "Art": "Street apinting",
                  "Gender": "Female"
                  },

                    {
                  //art 3
                  "id": 3,
                  "Name": " Allison Drew",
                  "Age" : "30years",
                  "url" : "",
                  "Art": "Street apinting",
                  "Gender": "Female"
                  },
                    {
                  //art 4
                  "id": 4,
                  "Name": " George Mayor",
                  "Age" : "33years",
                  "url" : "",
                  "Art": "Museum",
                  "Gender": "Male"
                  },
                    {
                    //art 5
                    "id": 5,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"
                  },

                  //Sports profiles 
                  //archery
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "27years", 
                    "url" : "",
                    "Sports": "Archery",
                    "Gender": "Male"

                  },
                    //basketball
                  {
                    "id": 7,
                    "Name": "Jordan Woods",
                    "Age" : "19years", 
                    "url" : "",
                    "Sports": "Basketball",
                    "Gender": "Male"

                  },
                  //running
                  {
                    "id": 8,
                    "Name": " David Bowie",
                    "Age" : "24years", 
                    "url" : "",
                    "Sports": "Running",
                    "Gender": "Male"

                  },
                  //skating
                  {
                    "id": 9,
                    "Name": " Arthur Prince",
                    "Age" : "31", 
                    "url" : "",
                    "Sports": "Skating",
                    "Gender": "Male"

                  },
                  {
                    "id": 10,
                    "Name": " Daniel Peterson",
                    "Age" : "21years", 
                    "url" : "",
                    "Sports": "Football",
                    "Gender": "Male"

                  },
                  //Food profiles 
                  //food 1 

                  {
                    "id": 11,
                    "Name": " Chun Li ",
                    "Age" : "28years", 
                    "url" : "",
                    "Food": "Love Cooking",
                    "Gender": "Male"

                  },   //food 2
                  {
                    "id": 12,
                    "Name": " Elena hilfiger",
                    "Age" : "22years", 
                    "url" : "",
                    "Food": "Love trying new dishes",
                    "Gender": "Female"

                  },   //food 3
                  {
                    "id": 13,
                    "Name": " Brittany spears",
                    "Age" : "25", 
                    "url" : "",
                    "Food": "salad lover",
                    "Gender": "Female"

                  },    //food 4
                  {
                    "id": 14,
                    "Name": " Jeffery Jefferson",
                    "Age" : "31", 
                    "url" : "",
                    "Food": "Call me the burker king ",
                    "Gender": "Male"

                  },   //food 5
                  {
                    "id": 15,
                    "Name": " David Clark",
                    "Age" : "37years", 
                    "url" : "",
                    "Food": "Food lover",
                    "Gender": "Male"

                  },
                  //Games profiles
                  //Game1 
                  {
                    "id": 16,
                    "Name": "Richmond diamond",
                    "Age" : "28yrs", 
                    "url" : "",
                    "Game": "Gamer",
                    "Gender": "Male"

                
                  },  //Game2
                  {
                    "id": 17,
                    "Name": "James Brown",
                    "Age" : "18years", 
                    "url" : "",
                    "Game": "Gamer",
                    "Gender": "Male"

                  },  //Game3
                  {
                    "id": 18,
                    "Name": " Mandy Silverson",
                    "Age" : "27years", 
                    "url" : "",
                    "Game": "Gamer",
                    "Gender": "Male"

                  },  //Game4
                  {
                    "id": 19,
                    "Name": " Brittany spears",
                    "Age" : "19years", 
                    "url" : "",
                    "Game": "Gamer",
                    "Gender": "Female"

                  }, 
                  
                  //Fashion
                  //Fashion1
                  {
                    "id": 20,
                    "Name": " Whitney Houston",
                    "Age" : "21", 
                    "url" : "",
                    "Fashion": "Fahionista",
                    "Gender": "Female"

                  },//Fashion2
                  {
                    "id": 21,
                    "Name": " Yusra Moh",
                    "Age" : "26years", 
                    "url" : "",
                    "Fashion": "Fahionista",
                    "Gender": "Female"

                  },//Fashion3
                  {
                    "id": 22,
                    "Name": " Tingting Li",
                    "Age" : "18years", 
                    "url" : "",
                    "Fashion": "Fahionista",
                    "Gender": "Female"

                  },//Fashion4
                  {
                    "id": 23,
                    "Name": " Philip Danso",
                    "Age" : "31years", 
                    "url" : "",
                    "Fashion": "Model",
                    "Gender": "Female"

                  },//Fashion5
                  {
                    "id": 24,
                    "Name": " Sonnie Sans",
                    "Age" : "24", 
                    "url" : "",
                    "Fashion": "Shopperhollic",
                    "Gender": "Female"

                  },
                  //Beauty
                  //beauty1
                  {
                    "id": 25,
                    "Name": "Emelia Thorston",
                    "Age" : "23years", 
                    "url" : "",
                    "Beauty": "Beautician",
                    "Gender": "Female"

                  },  //beauty2
                  {
                    "id": 26,
                    "Name": "Cyrilla lander",
                    "Age" : "25years", 
                    "url" : "",
                    "Beauty": "Makeup Artist",
                    "Gender": "Female"

                  },  //beauty3
                  {
                    "id": 27,
                    "Name": " Kit hernandez",
                    "Age" : "17years", 
                    "url" : "",
                    "Art": "Model",
                    "Gender": "Female"

                  },  //beauty4
                  {
                    "id": 28,
                    "Name": " Gloria Pavers",
                    "Age" : "22years", 
                    "url" : "",
                    "Beauty": "Model",
                    "Gender": "Male"

                  },  //beauty5
                  {
                    "id": 29,
                    "Name": " Daniella Fergurson",
                    "Age" : "26", 
                    "url" : "",
                    "Beauty": "Model",
                    "Gender": "Male"

                  },

                  //Travel profiles
                  {//travel
                    "id": 30,
                    "Name": " ",
                    "Age" : "Katrina Herds", 
                    "url" : "",
                    "Travel": "Traveller",
                    "Gender": "Female"

                  },
                  {//travel2
                    "id": 31,
                    "Name": " Lord Krishna ",
                    "Age" : "36", 
                    "url" : "",
                    "Travel": "Traveller",
                    "Gender": "Male"

                  },//travel3
                  {
                    "id": 32,
                    "Name": " Michael Willem",
                    "Age" : "31years", 
                    "url" : "",
                    "Travel": "Traveller",
                    "Gender": "Male"

                  },//travel4
                  {
                    "id": 33,
                    "Name": " Martin James",
                    "Age" : "25years", 
                    "url" : "",
                    "Travel": "Traveller",
                    "Gender": "Male"

                  },//travel5
                  {
                    "id": 34,
                    "Name": " Zinedin Pavers",
                    "Age" : "32years", 
                    "url" : "",
                    "Art": "Traveller",
                    "Gender": "Male"

                  },

                  //Music profiles
                  //music1
                   {
                    "id": 35,
                    "Name": " Cybthia Boo",
                    "Age" : "19years", 
                    "url" : "",
                    "Music": "Singer",
                    "Gender": "Feale"

                  },//music2
                  {
                    "id": 36,
                    "Name": " Lil Klein",
                    "Age" : "40years", 
                    "url" : "",
                    "Music": "Rapper",
                    "Gender": "Male"

                  },//music3
                  {
                    "id": 37,
                    "Name": " James Brown ",
                    "Age" : "41years", 
                    "url" : "",
                    "Music": "Singer Instrumentalist",
                    "Gender": "Male",

                  },//music24
                  {
                    "id": 38,
                    "Name": " Lad Pryer",
                    "Age" : "27years", 
                    "url" : "",
                    "Music": "Singer Instrumentalist",
                    "Gender": "Male"

                  },//music5
                  {
                    "id": 39,
                    "Name": " Gisella Lindson",
                    "Age" : "23years", 
                    "url" : "",
                    "Muisc": "Singer, Dj",
                    "Gender": "Female"

                  },
                  //Books profiles
                  {
                    "id": 40,
                    "Name": " Lindsy Katrdashian",
                    "Age" : "23years", 
                    "url" : "",
                    "Books": "Literature",
                    "Gender": "Male"

                  },
                  {
                    "id": 41,
                    "Name": " Emmanuel James",
                    "Age" : "35years", 
                    "url" : "",
                    "Books": "Comedy",
                    "Gender": "Male"

                  },
                  {
                    "id": 42,
                    "Name": " Taylor Grande",
                    "Age" : "19years", 
                    "url" : "",
                    "Art": "History, Literature",
                    "Gender": "Female"

                  },
                  {
                    "id": 43,
                    "Name": " Jennifer Spier",
                    "Age" : "21years", 
                    "url" : "",
                    "Book": "Writer",
                    "Gender": "Female"

                  },
                  {
                    "id": 44,
                    "Name": " John West",
                    "Age" : "50years", 
                    "url" : "",
                    "Book": "Writer, literature lecturer",
                    "Gender": "Male"

                  },
                  //Dance profiles
                  //dance1
                  {
                    "id": 45,
                    "Name": " Jennifer lopez",
                    "Age" : "25years", 
                    "url" : "",
                    "Dance": "Bale",
                    "Gender": "Female"

                  }, //dance2
                   {
                    "id": 46,
                    "Name": " Hayford Selasi",
                    "Age" : "18years", 
                    "url" : "",
                    "Dance": "Afro dancer",
                    "Gender": "Male"

                  }, //dance3
                  {
                    "id": 47,
                    "Name": " Tiffany Cairo",
                    "Age" : "23years", 
                    "url" : "",
                    "Dance": "Afro dancer",
                    "Gender": "Female"

                  }, //dance4
                  {
                    "id": 48,
                    "Name": " Peter Peterson ",
                    "Age" : "30years", 
                    "url" : "",
                    "Dance": "Dancer",
                    "Gender": "Male"

                  }, //dance5
                  {
                    "id": 49,
                    "Name": " George Steef",
                    "Age" : "27years", 
                    "url" : "",
                    "Art": "Street dance",
                    "Gender": "Male"

                  },

                  ]


//Static files 
app.use(express.static('public'))
// app.use ('/css', express.static( __dirname + 'public/css'))
// app.use ('/js', express.static( __dirname + 'public/js'))
// app.use ('/images', express.static( __dirname + 'public/imagesn'))


//set views 
//app.set('views', '/views ')
app.set("view engine" ,'ejs')

//routes 
app.get ('/search', (req, res) => {
  res.render("searchlist")
})


app.get('', (req, res) => {
  res.sendfile('index')
})

//port listening to 
app.listen(port, () => {
  console.log(`Web app listening on ${port}`)
})
