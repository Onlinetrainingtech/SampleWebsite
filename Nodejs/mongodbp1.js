const {MongoClient}=require('mongodb')
//const uri="mongodb+srv://admin:admin@cluster0.njdvekg.mongodb.net/?retryWrites=true&w=majority"
const uri="mongodb+srv://admin:admin@cluster0.njdvekg.mongodb.net/"
const client=new MongoClient(uri)

async function run()
{
    try{
        await client.connect();
        const db=client.db('employee');
        const collection=db.collection('mycollection')
        var myobj={name:"azar1",age:33,email:"azar1@gmail.com",salary:1000}
        const f1=await collection.insertOne(myobj)
        console.log(f1)
    }
    finally
    {
        await client.close()
    }
}
run().catch(console.error)