import express from 'express'
import mongoose from 'mongoose';

const app=express();

mongoose.connect("mongodb+srv://mehulkumarsingh6:iLdX5S32g2y6ZvoS@cluster0.wk8zhsg.mongodb.net/",{
  dbName:"MERN_E_COMMERCE"
}
).then(()=>console.log("MongoDB Connected Successfully...!")).catch((err)=>console.log(err));

const port=3003;

app.listen(port,()=>console.log(`Server is running on port ${port}`))