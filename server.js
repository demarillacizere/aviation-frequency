// create an express app
const express = require("express")
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')
const app = express()

// use the express-static middleware
app.use(express.static("public"))

const Receiver = require("./config");
app.use(express.json());

app.set('view engine', 'ejs');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
// define the first route
app.get("/", function (req, res) {
  res.send("");
})

app.get("/receivers", async (req, res) => {
    const receivers = await Receiver.get();
    const list = receivers.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
    
  });
app.get("/api", async (req, res) => {
  const receivers = await Receiver.get();
  const list = receivers.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.render('index',{list:list});
  
});
app.get("/add", async (req, res) => {
  res.render('add');
});

app.post('/add', urlencodedParser, [
  check('coverage', 'Please enter a valid coverage')
      .exists()
      .isNumeric(),
  check('latitude', 'Please enter a valid latitude value')
      .exists()
      .isNumeric(),
  check('longitude', 'Please enter a valid longitude value')
  .exists()
  .isNumeric(),
], async (req, res)=> {
  const errors = validationResult(req)
  
  if(!errors.isEmpty()) {
      const alert = errors.array()
      res.render('add', {
          alert
      })
  }
  else{
    const data = req.body;
    data.latitude = Number(data.latitude);
    data.longitude = Number(data.longitude);
    data.coverage = Number(data.coverage);
    console.log("Data of receivers", data);
    Receiver.add({ data });
    const receivers = await Receiver.get();
    const list = receivers.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.render('index',{list:list});
  }
})
  
app.post("/delete/", urlencodedParser, async (req, res) => {
const id = req.body.id;
await Receiver.doc(id).delete();
const receivers = await Receiver.get();
const list = receivers.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
res.render('index',{list:list});
});
// listen for requests 
app.listen(process.env.PORT || 3000, 
    () => console.log("Server is running..."));