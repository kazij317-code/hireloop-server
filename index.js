// // -----------------------------Start: 57_7---------------------------------------
// // (1)st according to documentation
// const express = require('express')

// // (13)
// const cors = require('cors');

// const app = express()
// // const port = 3000
// // (2) then install: npm i nodemon
// const port = 5000
// // (8)
// require('dotenv').config()

// // (12)st
// app.use(cors());
// app.use(express.json());
// // (12)en

// // (4)then create .env
// const { MongoClient, ServerApiVersion } = require('mongodb');

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// // (3)st import from mongodb
// // const { MongoClient, ServerApiVersion } = require('mongodb');
// // const uri = "mongodb+srv://<db_username>:<db_password>@cluster0.wenolut.mongodb.net/?appName=Cluster0";
// // (6)
// const uri = process.env.MONGO_DB_URI;


// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();

//     // // (9)st (from https://www.mongodb.com/docs/drivers/node/current/crud/insert/#std-label-node-insert/)
//     // const database = client.db("sample_mflix");
//     // const movies = database.collection("movies");
//     // // (9)en
//     // (10)st commit (9)
//     const database = client.db("hireloop_db");
//     const jobCollection = database.collection("jobs");
//     // (10)en

//     // (11)st
//     app.post('/jobs', async (req, res) => {
//       const job = req.body;
//       // (14)st
//       const result = await jobCollection.insertOne(job);
//       res.send(result);
//     // (14)en then (start: 57_8)
//     })
//     // (11)en
    


//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // (7)commit it
//     // await client.close();
//   }
// }
// run().catch(console.dir);


// // (3)en


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// // (1)en 
// // ---------------------End:57_7-(1) to () --------------------------------
// // -----------------------------Start: 57_8---------------------------------------
// const express = require('express')

// const cors = require('cors');

// const app = express()

// const port = 5000

// require('dotenv').config()

// app.use(cors());
// app.use(express.json());

// const { MongoClient, ServerApiVersion } = require('mongodb');

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// const uri = process.env.MONGO_DB_URI;


// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
    
//     await client.connect();
    
//     const database = client.db("hireloop_db");
//     const jobCollection = database.collection("jobs");
    
//     // app.post('/jobs', async (req, res) => {
//       // (1) then create go to client and lib/actions/jobs.js
//     app.post('/api/jobs', async (req, res) => {
//       const job = req.body;      
//       const result = await jobCollection.insertOne(job);
//       res.send(result);
    
//     })
    
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
    
//   }
// }
// run().catch(console.dir);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// }) 
// // ---------------------End:57_8-(1) to () --------------------------------
// // -----------------------------Start: 57_9---------------------------------------
// const express = require('express')

// const cors = require('cors');

// const app = express()

// const port = 5000

// require('dotenv').config()

// app.use(cors());
// app.use(express.json());

// const { MongoClient, ServerApiVersion } = require('mongodb');

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// const uri = process.env.MONGO_DB_URI;


// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
    
//     await client.connect();
    
//     const database = client.db("hireloop_db");
//     const jobCollection = database.collection("jobs");

//     // (5)st
//     app.get('/api/jobs', async(req, res) =>{
//       const query = {};
//       if(req.query.companyId){
//         query.companyId = req.query.companyId;
//       }
//       if(req.query.status){
//         query.status = req.query.status;
//       }
//       const cursor = jobCollection.find(query);
//       const result = await cursor.toArray();
//       res.send(result);
//     })
//     // (5)en then check in browser: localhost:5000/api/jobs?companyId=company_123&status=active and go to client jobs/page.jsx
    
//     app.post('/api/jobs', async (req, res) => {
//       const job = req.body;      
//       const result = await jobCollection.insertOne(job);
//       res.send(result);
    
//     })
    
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
    
//   }
// }
// run().catch(console.dir);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// }) 
// // ---------------------End:57_9-(1) to () --------------------------------
// // -----------------------------Start: 57_10---------------------------------------
// const express = require('express')

// const cors = require('cors');

// const app = express()

// const port = 5000

// require('dotenv').config()

// app.use(cors());
// app.use(express.json());

// const { MongoClient, ServerApiVersion } = require('mongodb');

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// const uri = process.env.MONGO_DB_URI;


// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
    
//     await client.connect();
    
//     const database = client.db("hireloop_db");
//     const jobCollection = database.collection("jobs");
//     // (12) then (start: 58_1) go to client: dashboard/recruiter/company/page.jsx 
//     const companyCollection = database.collection("companies");

    
//     app.get('/api/jobs', async(req, res) =>{
//       const query = {};
//       if(req.query.companyId){
//         query.companyId = req.query.companyId;
//       }
//       if(req.query.status){
//         query.status = req.query.status;
//       }
//       const cursor = jobCollection.find(query);
//       const result = await cursor.toArray();
//       res.send(result);
//     })
    
    
//     app.post('/api/jobs', async (req, res) => {
//       const job = req.body;      
//       const result = await jobCollection.insertOne(job);
//       res.send(result);
    
//     })
    
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
    
//   }
// }
// run().catch(console.dir);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// }) 
// // ---------------------End:57_10-(1) to () --------------------------------
// // -----------------------------Start: 58_3---------------------------------------
// const express = require('express')

// const cors = require('cors');

// const app = express()

// const port = 5000

// require('dotenv').config()

// app.use(cors());
// app.use(express.json());

// const { MongoClient, ServerApiVersion } = require('mongodb');

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// const uri = process.env.MONGO_DB_URI;


// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
    
//     await client.connect();
    
//     const database = client.db("hireloop_db");
//     const jobCollection = database.collection("jobs");
     
//     const companyCollection = database.collection("companies");

    
//     app.get('/api/jobs', async(req, res) =>{
//       const query = {};
//       if(req.query.companyId){
//         query.companyId = req.query.companyId;
//       }
//       if(req.query.status){
//         query.status = req.query.status;
//       }
//       const cursor = jobCollection.find(query);
//       const result = await cursor.toArray();
//       res.send(result);
//     })
    
    
//     app.post('/api/jobs', async (req, res) => {
//       const job = req.body;      
//       const result = await jobCollection.insertOne(job);
//       res.send(result);
    
//     })

//     // company related apis
//     // (1)st
//     app.post('/api/companies', async(req, res) =>{
//       const company = req.body;
//       const result = await companyCollection.insertOne(company);
//       res.send(result);
//     })
//     // (1)en then in client: create lib/actions/companies.js
    
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
    
//   }
// }
// run().catch(console.dir);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// }) 
// // ---------------------End:58_3-(1) to () --------------------------------
// // -----------------------------Start: 58_4---------------------------------------
// const express = require('express')

// const cors = require('cors');

// const app = express()

// const port = 5000

// require('dotenv').config()

// app.use(cors());
// app.use(express.json());

// const { MongoClient, ServerApiVersion } = require('mongodb');

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// const uri = process.env.MONGO_DB_URI;


// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
    
//     await client.connect();
    
//     const database = client.db("hireloop_db");
//     const jobCollection = database.collection("jobs");
     
//     const companyCollection = database.collection("companies");

    
//     app.get('/api/jobs', async(req, res) =>{
//       const query = {};
//       if(req.query.companyId){
//         query.companyId = req.query.companyId;
//       }
//       if(req.query.status){
//         query.status = req.query.status;
//       }
//       const cursor = jobCollection.find(query);
//       const result = await cursor.toArray();
//       res.send(result);
//     })
    
    
//     app.post('/api/jobs', async (req, res) => {
//       const job = req.body;      
//       const result = await jobCollection.insertOne(job);
//       res.send(result);
    
//     })

//     // company related apis

//     // (14)st
//     app.get('/api/my/companies', async(req, res) =>{
//       const query = {};
//       if(req.query.recruiterId){
//         query.recruiterId = req.query.recruiterId;
//       }
//       const result = await companyCollection.findOne(query);
//       res.send(result);
//     })
//     // (14)en then (start: 58_5) then go to client and create api/companies.js
    
//     app.post('/api/companies', async(req, res) =>{
//       const company = req.body;
//       const result = await companyCollection.insertOne(company);
//       res.send(result);
//     })
    
    
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
    
//   }
// }
// run().catch(console.dir);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// }) 
// // ---------------------End:58_4-(1) to () --------------------------------
// // -----------------------------Start: 58_6---------------------------------------
// const express = require('express')

// const cors = require('cors');

// const app = express()

// const port = 5000

// require('dotenv').config()

// app.use(cors());
// app.use(express.json());

// const { MongoClient, ServerApiVersion } = require('mongodb');

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// const uri = process.env.MONGO_DB_URI;


// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
    
//     await client.connect();
    
//     const database = client.db("hireloop_db");
//     const jobCollection = database.collection("jobs");
     
//     const companyCollection = database.collection("companies");

    
//     app.get('/api/jobs', async(req, res) =>{
//       const query = {};
//       if(req.query.companyId){
//         query.companyId = req.query.companyId;
//       }
//       if(req.query.status){
//         query.status = req.query.status;
//       }
//       const cursor = jobCollection.find(query);
//       const result = await cursor.toArray();
//       res.send(result);
//     })
    
    
//     app.post('/api/jobs', async (req, res) => {
//       const job = req.body;
//       // (10)st
//       const newJob ={
//         ...job,
//         createdAt: new Date()
//       }
//       // (10)en
//       // const result = await jobCollection.insertOne(job);
//       // (11)
//       const result = await jobCollection.insertOne(newJob);
//       res.send(result);
    
//     })

//     // company related apis

    
//     app.get('/api/my/companies', async(req, res) =>{
//       const query = {};
//       if(req.query.recruiterId){
//         query.recruiterId = req.query.recruiterId;
//       }
//       const result = await companyCollection.findOne(query);
//       res.send(result);
//     })
    
    
//     app.post('/api/companies', async(req, res) =>{
//       const company = req.body;
//       // (12)st
//       const newCompany ={
//         ...company,
//         createdAt: new Date()
//       }
//       // (12)en
//       // const result = await companyCollection.insertOne(company);
//       // (13) then check to Post a Job then (start: 58_6.5)
//       const result = await companyCollection.insertOne(newCompany);
//       res.send(result);
//     })
    
    
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
    
//   }
// }
// run().catch(console.dir);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// }) 
// // ---------------------End:58_6-(1) to () --------------------------------
// // -----------------------------Start: 58_6.5---------------------------------------
// const express = require('express')

// const cors = require('cors');

// const app = express()

// const port = 5000

// require('dotenv').config()

// app.use(cors());
// app.use(express.json());

// const { MongoClient, ServerApiVersion } = require('mongodb');

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// const uri = process.env.MONGO_DB_URI;


// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
    
//     await client.connect();
    
//     const database = client.db("hireloop_db");
//     const jobCollection = database.collection("jobs");     
//     const companyCollection = database.collection("companies");
//     // (1)
//     // const userCollection = database.collection("user");

//     // (2)st
//     // app.get('/api/user', async (req, res) => {

//     //   // const cursor = usersCollection.find().skip(6);
//     //   const cursor = usersCollection.find().skip(4);
//     //   const result = await cursor.toArray();
//     //   res.send(result);
//     // })
//     // (2)en

    
//     app.get('/api/jobs', async(req, res) =>{
//       const query = {};
//       if(req.query.companyId){
//         query.companyId = req.query.companyId;
//       }
//       if(req.query.status){
//         query.status = req.query.status;
//       }
//       const cursor = jobCollection.find(query);   
//       // const cursor = jobCollection.find(query).skip(7);   
//       const result = await cursor.toArray();
//       res.send(result);
//     })
    
    
//     app.post('/api/jobs', async (req, res) => {
//       const job = req.body;

//       const newJob ={
//         ...job,
//         createdAt: new Date()
//       }

//       const result = await jobCollection.insertOne(newJob);
//       res.send(result);
    
//     })

//     // company related apis
//     // (6)st
//     app.get('/api/companies', async (req, res) => {
//       // const cursor = companyCollection.find()
//       // (7) then copy from: http://localhost:5000/api/companies and create jobs using AI and then (start: 58_7) go to client and create components/jobs/JobCard.jsx
//       const cursor = companyCollection.find();
//       const result = await cursor.toArray();
//       res.send(result);
//     })
//     // (6)en then check in browser: http://localhost:5000/api/companies

//     app.get('/api/my/companies', async(req, res) =>{
//       const query = {};
//       if(req.query.recruiterId){
//         query.recruiterId = req.query.recruiterId;
//       }
//       const result = await companyCollection.findOne(query);
//       // (3)
//       console.log('my companies:', result);
//       // res.send(result);
//       // (4) then go to company/CompanyProfile.jsx
//       res.send(result || {});
//     })
    
    
//     app.post('/api/companies', async(req, res) =>{
//       const company = req.body;

//       const newCompany ={
//         ...company,
//         createdAt: new Date()
//       }

//       const result = await companyCollection.insertOne(newCompany);
//       res.send(result);
//     })
    
    
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
    
//   }
// }
// run().catch(console.dir);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// }) 
// // ---------------------End:58_6.5-(1) to () --------------------------------
// // -----------------------------Start: 58_9---------------------------------------
// const express = require('express')

// const cors = require('cors');

// const app = express()

// const port = 5000

// require('dotenv').config()

// app.use(cors());
// app.use(express.json());

// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// const uri = process.env.MONGO_DB_URI;


// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
    
//     await client.connect();
    
//     const database = client.db("hireloop_db");
//     const jobCollection = database.collection("jobs");     
//     const companyCollection = database.collection("companies");
    
//     const userCollection = database.collection("user");

    
//     app.get('/api/user', async (req, res) => {

//       // const cursor = usersCollection.find().skip(6);
//       const cursor = usersCollection.find().skip(4);
//       const result = await cursor.toArray();
//       res.send(result);
//     })
    

    
//     app.get('/api/jobs', async(req, res) =>{
//       const query = {};
//       if(req.query.companyId){
//         query.companyId = req.query.companyId;
//       }
//       if(req.query.status){
//         query.status = req.query.status;
//       }
//       const cursor = jobCollection.find(query);   
//       // const cursor = jobCollection.find(query).skip(7);   
//       const result = await cursor.toArray();
//       res.send(result);
//     })
    
//     // (10)st
//     app.get('/api/jobs/:id', async (req, res) =>{
//       const id = req.params.id;
//       const query = {
//         _id: new ObjectId(id)
//       }
//       const result = await jobCollection.findOne(query);
//       res.send(result);
//     })
//     // (10)en then check job details and console.log and go to client's jobs/[id]/page.jsx
    
//     app.post('/api/jobs', async (req, res) => {
//       const job = req.body;

//       const newJob ={
//         ...job,
//         createdAt: new Date()
//       }

//       const result = await jobCollection.insertOne(newJob);
//       res.send(result);
    
//     })

//     // company related apis
    
//     app.get('/api/companies', async (req, res) => {
    
//       const cursor = companyCollection.find();
//       const result = await cursor.toArray();
//       res.send(result);
//     })
    

//     app.get('/api/my/companies', async(req, res) =>{
//       const query = {};
//       if(req.query.recruiterId){
//         query.recruiterId = req.query.recruiterId;
//       }
//       const result = await companyCollection.findOne(query);
      
//       console.log('my companies:', result);
      
//       res.send(result || {});
//     })
    
    
//     app.post('/api/companies', async(req, res) =>{
//       const company = req.body;

//       const newCompany ={
//         ...company,
//         createdAt: new Date()
//       }

//       const result = await companyCollection.insertOne(newCompany);
//       res.send(result);
//     })
    
    
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
    
//   }
// }
// run().catch(console.dir);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// }) 
// // ---------------------End:58_9-(1) to () --------------------------------
// -----------------------------Start: 59_3---------------------------------------
const express = require('express')

const cors = require('cors');

const app = express()

const port = 5000

require('dotenv').config()

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const uri = process.env.MONGO_DB_URI;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    
    await client.connect();
    
    const database = client.db("hireloop_db");
    const jobCollection = database.collection("jobs");     
    const companyCollection = database.collection("companies");
    const userCollection = database.collection("user");
    // (5)
    const applicationsCollection = database.collection("applications");

    
    app.get('/api/user', async (req, res) => {

      // const cursor = usersCollection.find().skip(6);
      const cursor = usersCollection.find().skip(4);
      const result = await cursor.toArray();
      res.send(result);
    })
    

    
    app.get('/api/jobs', async(req, res) =>{
      const query = {};
      if(req.query.companyId){
        query.companyId = req.query.companyId;
      }
      if(req.query.status){
        query.status = req.query.status;
      }
      const cursor = jobCollection.find(query);   
      // const cursor = jobCollection.find(query).skip(7);   
      const result = await cursor.toArray();
      res.send(result);
    })
    
    
    app.get('/api/jobs/:id', async (req, res) =>{
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id)
      }
      const result = await jobCollection.findOne(query);
      res.send(result);
    })
    
    
    app.post('/api/jobs', async (req, res) => {
      const job = req.body;

      const newJob ={
        ...job,
        createdAt: new Date()
      }

      const result = await jobCollection.insertOne(newJob);
      res.send(result);
    
    })

    // application related apis
    // (6)st
    app.post('/api/applications', async (req, res) => {
      const application = req.body;
      const newApplication = {
        ...application,
        createdAt: new Date()
      }
      const result = await applicationsCollection.insertOne(newApplication);
      res.send(result);
    })
    // (6)en then go to client and create lib/actions/applications.js

    // company related apis
    
    app.get('/api/companies', async (req, res) => {
    
      const cursor = companyCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })
    

    app.get('/api/my/companies', async(req, res) =>{
      const query = {};
      if(req.query.recruiterId){
        query.recruiterId = req.query.recruiterId;
      }
      const result = await companyCollection.findOne(query);
      
      console.log('my companies:', result);
      
      res.send(result || {});
    })
    
    
    app.post('/api/companies', async(req, res) =>{
      const company = req.body;

      const newCompany ={
        ...company,
        createdAt: new Date()
      }

      const result = await companyCollection.insertOne(newCompany);
      res.send(result);
    })
    
    
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
// ---------------------End:59_3-(1) to () --------------------------------
