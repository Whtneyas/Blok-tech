
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
                  //sakting
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

                  {
                    "id": 11,
                    "Name": " Chun Li ",
                    "Age" : "28years", 
                    "url" : "",
                    "Food": "Love Cooking",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  //Games profiles
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                
                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  
                  //Fashion

                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  //Beauty
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },

                  //Travel profiles
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },

                  //Music profiles
                   {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  //Books profiles
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  //Dance profiles
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                   {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
                    "Gender": "Male"

                  },
                  {
                    "id": 6,
                    "Name": " George Maker",
                    "Age" : "40years", 
                    "url" : "",
                    "Art": "Potery",
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
