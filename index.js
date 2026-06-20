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
// // -----------------------------Start: 59_3---------------------------------------
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
//     // (5)
//     const applicationsCollection = database.collection("applications");

    
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
    
    
//     app.get('/api/jobs/:id', async (req, res) =>{
//       const id = req.params.id;
//       const query = {
//         _id: new ObjectId(id)
//       }
//       const result = await jobCollection.findOne(query);
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

//     // application related apis
//     // (6)st
//     app.post('/api/applications', async (req, res) => {
//       const application = req.body;
//       const newApplication = {
//         ...application,
//         createdAt: new Date()
//       }
//       const result = await applicationsCollection.insertOne(newApplication);
//       res.send(result);
//     })
//     // (6)en then go to client and create lib/actions/applications.js

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
// // ---------------------End:59_3-(1) to () --------------------------------
// // -----------------------------Start: 59_4---------------------------------------
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
    
//     const applicationsCollection = database.collection("applications");

    
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
    
    
//     app.get('/api/jobs/:id', async (req, res) =>{
//       const id = req.params.id;
//       const query = {
//         _id: new ObjectId(id)
//       }
//       const result = await jobCollection.findOne(query);
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

//     // application related apis
//     // (1)st
//     app.get('/api/applications', async (req, res) => {
//       const query = {};
//       if(req. query. applicantId){
//         query.applicantId = req.query.applicantId;
//       }
//       if(req.query.jobId){
//         query.jobId = req.query.jobId;
//       }
//       const cursor = applicationsCollection.find(query);
//       const result = await cursor.toArray();
//       res.send(result)
//     }) 
//     // (1)en then go to client and create lib/api/applications.js
    
//     app.post('/api/applications', async (req, res) => {
//       const application = req.body;
//       const newApplication = {
//         ...application,
//         createdAt: new Date()
//       }
//       const result = await applicationsCollection.insertOne(newApplication);
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
// // ---------------------End:59_4-(1) to () --------------------------------
// -----------------------------Start: 59_9---------------------------------------
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
//     const applicationsCollection = database.collection("applications");
//     // (4)
//     const planCollection = database.collection('plans')

    
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
    
    
//     app.get('/api/jobs/:id', async (req, res) =>{
//       const id = req.params.id;
//       const query = {
//         _id: new ObjectId(id)
//       }
//       const result = await jobCollection.findOne(query);
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

//     // application related apis
   
//     app.get('/api/applications', async (req, res) => {
//       const query = {};
//       if(req. query. applicantId){
//         query.applicantId = req.query.applicantId;
//       }
//       if(req.query.jobId){
//         query.jobId = req.query.jobId;
//       }
//       const cursor = applicationsCollection.find(query);
//       const result = await cursor.toArray();
//       res.send(result)
//     }) 
   
    
//     app.post('/api/applications', async (req, res) => {
//       const application = req.body;
//       const newApplication = {
//         ...application,
//         createdAt: new Date()
//       }
//       const result = await applicationsCollection.insertOne(newApplication);
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
    
//     // plans
//     // (5)st
//     app.get('/api/plans', async (req, res) => {
//       const query = {}
//       if(req.query.plan_id){
//         query.id = req.query.plan_id
//       }
//       const plan = await planCollection.findOne(query);
//       res.send(plan);
//     })
//     // (5)en then go to client and create lib/api/plans.js
    
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
    
//   }
// }
// run().catch(console.dir);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// }) 
// ---------------------End:59_9-(1) to () --------------------------------

// -----------------------------Start: 59_10---------------------------------------
// const express = require('express')
// const cors = require('cors');
// const app = express()
// const port = 5000
// require('dotenv').config();

// app.use(cors());
// app.use(express.json());

// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })




// const uri = process.env.MONGO_DB_URI;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();


//         const database = client.db("hireloop_db");
//         const jobCollection = database.collection("jobs");
//         const companyCollection = database.collection("companies");
//         const usersCollection = database.collection("user");
//         const applicationsCollection = database.collection("applications");
//         const planCollection = database.collection('plans');
//         // (3)
//         const subscriptionCollection = database.collection('subscriptions');

//         app.get('/api/users', async (req, res) => {

//             const cursor = usersCollection.find().skip(6);
//             const result = await cursor.toArray();
//             res.send(result);
//         })

//         app.get('/api/jobs', async (req, res) => {
//             const query = {};
//             if (req.query.companyId) {
//                 query.companyId = req.query.companyId;
//             }
//             if (req.query.status) {
//                 query.status = req.query.status;
//             }
//             const cursor = jobCollection.find(query);
//             const result = await cursor.toArray();
//             res.send(result);
//         })

//         app.get('/api/jobs/:id', async (req, res) => {
//             const id = req.params.id;
//             const query = {
//                 _id: new ObjectId(id)
//             }
//             const result = await jobCollection.findOne(query);
//             res.send(result);
//         })

//         app.post('/api/jobs', async (req, res) => {
//             const job = req.body;
//             const newJob = {
//                 ...job,
//                 createdAt: new Date()
//             }
//             const result = await jobCollection.insertOne(newJob);
//             res.send(result);
//         })

//         // application related apis
//         app.get('/api/applications', async (req, res) => {
//             const query = {};
//             if (req.query.applicantId) {
//                 query.applicantId = req.query.applicantId;
//             }
//             if (req.query.jobId) {
//                 query.jobId = req.query.jobId;
//             }
//             const cursor = applicationsCollection.find(query);
//             const result = await cursor.toArray();
//             res.send(result);
//         })

//         app.post('/api/applications', async (req, res) => {
//             const application = req.body;
//             const newApplication = {
//                 ...application,
//                 createdAt: new Date()
//             }
//             const result = await applicationsCollection.insertOne(newApplication);
//             res.send(result);
//         })

//         // company related apis
//         app.get('/api/companies', async (req, res) => {
//             const cursor = companyCollection.find().skip(4);
//             const result = await cursor.toArray();
//             res.send(result);
//         })


//         app.get('/api/my/companies', async (req, res) => {
//             const query = {};
//             if (req.query.recruiterId) {
//                 query.recruiterId = req.query.recruiterId;
//             }
//             const result = await companyCollection.findOne(query);

//             res.send(result || {});
//         })

//         app.post('/api/companies', async (req, res) => {
//             const company = req.body;
//             const newCompany = {
//                 ...company,
//                 createdAt: new Date()
//             }
//             const result = await companyCollection.insertOne(newCompany);
//             res.send(result);
//         })

//         // plans 
//         app.get('/api/plans', async (req, res) => {
//             const query = {}
//             if (req.query.plan_id) {
//                 query.id = req.query.plan_id
//             }
//             const plan = await planCollection.findOne(query);
//             res.send(plan)
//         })

//         // subscription 
//         // (4)st
//         app.post('/api/subscriptions', async (req, res) => {
//             const data = req.body;
//             const subsInfo = {
//                 ...data,
//                 createdAt: new Date()
//             }

//             const result = await subscriptionCollection.insertOne(subsInfo);

//             // update the user plan information
//             // (7)st
//             const filter = { email: data.email };
//             // update the value of the 'quantity' field to 5
//             const updateDocument = {
//                 $set: {
//                     plan: data.planId,
//                 },
//             };

//             const updateResult = await usersCollection.updateOne(filter, updateDocument);
//             res.send(updateResult)
//             // (7)en then check to checkout then go to [id]/apply/page.jsx
//         })
//         // (4)en then create lib/actions/subscription.js 

//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         // await client.close();
//     }
// }
// run().catch(console.dir);





// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })
// ---------------------End:59_10-(1) to () --------------------------------

// const express = require('express')
// const cors = require('cors');
// const app = express()
// const port = 5000
// require('dotenv').config();

// app.use(cors());
// app.use(express.json());

// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })




// const uri = process.env.MONGO_DB_URI;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();


//         const database = client.db("hireloop_db");
//         const jobCollection = database.collection("jobs");
//         const companyCollection = database.collection("companies");
//         const usersCollection = database.collection("user");
//         const applicationsCollection = database.collection("applications");
//         const planCollection = database.collection('plans');
//         const subscriptionCollection = database.collection('subscriptions');

//         app.get('/api/users', async (req, res) => {

//             const cursor = usersCollection.find().skip(6);
//             const result = await cursor.toArray();
//             res.send(result);
//         })

//         app.get('/api/jobs', async (req, res) => {
//             const query = {};
//             if (req.query.companyId) {
//                 query.companyId = req.query.companyId;
//             }
//             if (req.query.status) {
//                 query.status = req.query.status;
//             }
//             const cursor = jobCollection.find(query);
//             const result = await cursor.toArray();
//             res.send(result);
//         })

//         app.get('/api/jobs/:id', async (req, res) => {
//             const id = req.params.id;
//             const query = {
//                 _id: new ObjectId(id)
//             }
//             const result = await jobCollection.findOne(query);
//             res.send(result);
//         })

//         app.post('/api/jobs', async (req, res) => {
//             const job = req.body;
//             const newJob = {
//                 ...job,
//                 createdAt: new Date()
//             }
//             const result = await jobCollection.insertOne(newJob);
//             res.send(result);
//         })

//         // application related apis
//         app.get('/api/applications', async (req, res) => {
//             const query = {};
//             if (req.query.applicantId) {
//                 query.applicantId = req.query.applicantId;
//             }
//             if (req.query.jobId) {
//                 query.jobId = req.query.jobId;
//             }
//             const cursor = applicationsCollection.find(query);
//             const result = await cursor.toArray();
//             res.send(result);
//         })

//         app.post('/api/applications', async (req, res) => {
//             const application = req.body;
//             const newApplication = {
//                 ...application,
//                 createdAt: new Date()
//             }
//             const result = await applicationsCollection.insertOne(newApplication);
//             res.send(result);
//         })

//         // company related apis
//         // app.get('/api/companies', async (req, res) => {
//         //     const cursor = companyCollection.find().skip(4);
//         //     const result = await cursor.toArray();
//         //     res.send(result);
//         // })

//         // inefficient way to join/aggregate collection
//         app.get('/api/companies', async (req, res) => {
//             const cursor = companyCollection.find();
//             const companies = await cursor.toArray();

//             for (const company of companies) {
//                 const filter = {
//                     companyId: company._id.toString()
//                 }
//                 const jobCount = await jobCollection.countDocuments(filter)
//                 company.jobCount = jobCount
//             }

//             res.send(companies);
//         })
//         // inefficient way to join/aggregate collection
//         app.get('/api/companies2', async (req, res) => {
//             const pipeline = [
//                 {
//                     $skip: 5
//                 },
//                 {
//                     $limit: 2
//                 }
//             ];

//             const cursor = companyCollection.aggregate(pipeline);
//             const result = await cursor.toArray();
//             res.send(result)
//         })

//         app.get('/api/stats', async (req, res) => {
//             const pipeline = [
//                 {
//                     $group: {
//                         _id: '$jobType',
//                         count: {
//                             $sum: 1
//                         }
//                     }
//                 },
//                 {
//                     $project: {
//                         jobType: '$_id',
//                         _id: 0,
//                         count: 1
//                     }
//                 },
//                 {
//                     $sort: { count: 1 }
//                 }
//             ]

//             const cursor = jobCollection.aggregate(pipeline);
//             const result = await cursor.toArray();
//             res.send(result);
//         })


//         app.get('/api/my/companies', async (req, res) => {
//             const query = {};
//             if (req.query.recruiterId) {
//                 query.recruiterId = req.query.recruiterId;
//             }
//             const result = await companyCollection.findOne(query);

//             res.send(result || {});
//         })

//         app.post('/api/companies', async (req, res) => {
//             const company = req.body;
//             const newCompany = {
//                 ...company,
//                 createdAt: new Date()
//             }
//             const result = await companyCollection.insertOne(newCompany);
//             res.send(result);
//         })

//         app.patch('/api/companies/:id', async (req, res) => {
//             const id = req.params.id;
//             const updatedCompany = req.body;
//             const filter = { _id: new ObjectId(id) }
//             const updatedDoc = {
//                 $set: {
//                     status: updatedCompany.status
//                 }
//             }
//             const result = await companyCollection.updateOne(filter, updatedDoc);
//             res.send(result);
//         })

//         // plans 
//         app.get('/api/plans', async (req, res) => {
//             const query = {}
//             if (req.query.plan_id) {
//                 query.id = req.query.plan_id
//             }
//             const plan = await planCollection.findOne(query);
//             res.send(plan)
//         })

//         // subscription 
//         app.post('/api/subscriptions', async (req, res) => {
//             const data = req.body;
//             const subsInfo = {
//                 ...data,
//                 createdAt: new Date()
//             }

//             const result = await subscriptionCollection.insertOne(subsInfo);

//             // update the user plan information
//             const filter = { email: data.email };
//             // update the value of the 'quantity' field to 5
//             const updateDocument = {
//                 $set: {
//                     plan: data.planId,
//                 },
//             };

//             const updateResult = await usersCollection.updateOne(filter, updateDocument);
//             res.send(updateResult)
//         })

//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         // await client.close();
//     }
// }
// run().catch(console.dir);





// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

// -----------------------------Start: 61-4,5---------------------------------------

const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000
require('dotenv').config();

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const logger = (req, res, next) => {
    console.log('logger middleware logged', req.params);
    next();
}




const uri = process.env.MONGO_DB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();


        const database = client.db("hireloop_db");
        const jobCollection = database.collection("jobs");
        const companyCollection = database.collection("companies");
        const usersCollection = database.collection("user");
        const applicationsCollection = database.collection("applications");
        const planCollection = database.collection('plans');
        const subscriptionCollection = database.collection('subscriptions');
        const sessionCollection = database.collection('session');


        // verification related
        const verifyToken = async (req, res, next) => {

            const authHeader = req.headers?.authorization;
            if (!authHeader) {
                return res.status(401).send({ message: 'unauthorized access' })
            }

            const token = authHeader.split(' ')[1]

            if (!token) {
                return res.status(401).send({ message: 'unauthorized access' })
            }

            const query = { token: token }
            const session = await sessionCollection.findOne(query);

              if (!session) {
                return res.status(401).send({ message: 'unauthorized access' })
            }

            const userId = session.userId;


            const userQuery = {
                _id: userId
            }

            const user = await usersCollection.findOne(userQuery);
              if (!user) {
                return res.status(401).send({ message: 'unauthorized access' })
            }
            // set data in the req object
            req.user = user;
            next();
        }

        // must be used after verifyToken middleware
        const verifySeeker = async (req, res, next) => {
            if (req.user?.role !== 'seeker') {
                return res.status(403).send({ message: 'forbidden access' })
            }
            next();
        }

        // must be used after verifyToken middleware
        const verifyRecruiter = async (req, res, next) => {
            if (req.user?.role !== 'recruiter') {
                return res.status(403).send({ message: 'forbidden access' })
            }
            next();
        }

        // must be used after verifyToken middleware
        const verifyAdmin = async (req, res, next) => {
            if (req.user.role !== 'admin') {
                return res.status(403).send({ message: 'forbidden access' })
            }
            next();
        }

        // jobs related apis
        app.get('/api/jobs', async (req, res) => {
            const query = {};
            if (req.query.companyId) {
                query.companyId = req.query.companyId;
            }
            if (req.query.status) {
                query.status = req.query.status;
            }
            const cursor = jobCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get('/api/jobs/:id', async (req, res) => {
            const id = req.params.id;
            const query = {
                _id: new ObjectId(id)
            }
            const result = await jobCollection.findOne(query);
            res.send(result);
        })

        app.post('/api/jobs', async (req, res) => {
            const job = req.body;
            const newJob = {
                ...job,
                createdAt: new Date()
            }
            const result = await jobCollection.insertOne(newJob);
            res.send(result);
        })

        // application related apis
        app.get('/api/applications', verifyToken, verifySeeker, async (req, res) => {
            const query = {};
            if (req.query.applicantId) {
                query.applicantId = req.query.applicantId;

                // check whether asking for user information or someone else
                console.log(req.user, req.query.applicantId)
                if (req.user._id.toString() !== req.query.applicantId) {
                    return res.status(403).send({ message: 'forbidden access' })
                }

            }
            if (req.query.jobId) {
                query.jobId = req.query.jobId;
            }
            const cursor = applicationsCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
        })

        app.post('/api/applications', async (req, res) => {
            const application = req.body;
            const newApplication = {
                ...application,
                createdAt: new Date()
            }
            const result = await applicationsCollection.insertOne(newApplication);
            res.send(result);
        })

        // company related apis
        // app.get('/api/companies', async (req, res) => {
        //     const cursor = companyCollection.find().skip(4);
        //     const result = await cursor.toArray();
        //     res.send(result);
        // })

        // inefficient way to join/aggregate collection
        app.get('/api/companies', verifyToken, verifyAdmin, async (req, res) => {
            const cursor = companyCollection.find();
            const companies = await cursor.toArray();

            for (const company of companies) {
                const filter = {
                    companyId: company._id.toString()
                }
                const jobCount = await jobCollection.countDocuments(filter)
                company.jobCount = jobCount
            }

            res.send(companies);
        })
        // inefficient way to join/aggregate collection
        app.get('/api/companies2', async (req, res) => {
            const pipeline = [
                {
                    $skip: 5
                },
                {
                    $limit: 2
                }
            ];

            const cursor = companyCollection.aggregate(pipeline);
            const result = await cursor.toArray();
            res.send(result)
        })

        app.get('/api/stats', async (req, res) => {
            const pipeline = [
                {
                    $group: {
                        _id: '$jobType',
                        count: {
                            $sum: 1
                        }
                    }
                },
                {
                    $project: {
                        jobType: '$_id',
                        _id: 0,
                        count: 1
                    }
                },
                {
                    $sort: { count: 1 }
                }
            ]

            const cursor = jobCollection.aggregate(pipeline);
            const result = await cursor.toArray();
            res.send(result);
        })


        app.get('/api/my/companies', async (req, res) => {
            const query = {};
            if (req.query.recruiterId) {
                query.recruiterId = req.query.recruiterId;
            }
            const result = await companyCollection.findOne(query);

            res.send(result || {});
        })

        app.post('/api/companies', async (req, res) => {
            const company = req.body;
            const newCompany = {
                ...company,
                createdAt: new Date()
            }
            const result = await companyCollection.insertOne(newCompany);
            res.send(result);
        })

        app.patch('/api/companies/:id', logger, verifyToken, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const updatedCompany = req.body;
            const filter = { _id: new ObjectId(id) }
            const updatedDoc = {
                $set: {
                    status: updatedCompany.status
                }
            }
            const result = await companyCollection.updateOne(filter, updatedDoc);
            res.send(result);
        })

        // plans 
        app.get('/api/plans', async (req, res) => {
            const query = {}
            if (req.query.plan_id) {
                query.id = req.query.plan_id
            }
            const plan = await planCollection.findOne(query);
            res.send(plan)
        })

        // subscription 
        app.post('/api/subscriptions', async (req, res) => {
            const data = req.body;
            const subsInfo = {
                ...data,
                createdAt: new Date()
            }

            const result = await subscriptionCollection.insertOne(subsInfo);

            // update the user plan information
            const filter = { email: data.email };
            // update the value of the 'quantity' field to 5
            const updateDocument = {
                $set: {
                    plan: data.planId,
                },
            };

            const updateResult = await usersCollection.updateOne(filter, updateDocument);
            res.send(updateResult)
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// ---------------------End:61-61-4,5() to () --------------------------------

