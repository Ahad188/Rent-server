const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

 
 app.use(cors())
 
 
 



const uri = `mongodb+srv://${process.env.USER}:${process.env.user_pass}@cluster0.ejfmzqt.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
 

async function run() {
  try {
//     Connect the client to the server	(optional starting in v4.7)
//     await client.connect();


    const userNav = client.db('RentBD').collection('navlist')
    const feature = client.db('RentBD').collection('feature')
    const rentList = client.db('RentBD').collection('list')
    const Awards = client.db('RentBD').collection('awards')
    const Location = client.db('RentBD').collection('location')
    const Team = client.db('RentBD').collection('team')
    const Price = client.db('RentBD').collection('price')



    app.get('/navs', async (req,res)=>{
     const result = await userNav.find().toArray()
     res.send(result)
    })
    app.get('/features', async (req,res)=>{
     const result = await feature.find().toArray()
     res.send(result)
    })
    app.get('/lists', async (req,res)=>{
     const result = await rentList.find().toArray()
     res.send(result)
    })
    app.get('/awards', async (req,res)=>{
     const result = await Awards.find().toArray()
     res.send(result)
    })
    app.get('/locations', async (req,res)=>{
     const result = await Location.find().toArray()
     res.send(result)
    })
    app.get('/teams', async (req,res)=>{
     const result = await Team.find().toArray()
     res.send(result)
    })
    app.get('/prices', async (req,res)=>{
     const result = await Price.find().toArray()
     res.send(result)
    })





















    // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
//     await client.close();
  }
}
run().catch(console.dir);


// UaBeCSV5rL9jv4tW






app.get('/',(req,res)=>{
     res.send("Home Rent")
})
app.listen(port,()=>{
     console.log(`rent is port Number ${port}`);
})