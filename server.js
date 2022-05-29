// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

const Receiver = require("./config");
app.use(express.json());


// define the first route
app.get("/", function (req, res) {
  res.send("")
})
app.get("/receivers", async (req, res) => {
    const receivers = await Receiver.get();
    const list = receivers.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
  });
app.post("/create", async (req, res) => {
    const data = req.body;
    console.log("Data of receivers", data);
    await Receiver.add({ data });
    res.send({ msg: "Receiver Added" });
  });
app.post("/update", async (req, res) => {
const id = req.body.id;
delete req.body.id;
const data = req.body;

await Receiver.doc(id).update(data);
res.send({ msg: "Receiver Updated" });
});
  
app.post("/delete", async (req, res) => {
const id = req.body.id;
await Receiver.doc(id).delete();
res.send({ msg: "Receiver Deleted" });
});
// listen for requests 
app.listen(process.env.PORT || 3000, 
    () => console.log("Server is running..."));