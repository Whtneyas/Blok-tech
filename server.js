
const express = require ("express")
const app = express()
const port = 3000

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
