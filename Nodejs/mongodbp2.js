const {MongoClient}=require('mongodb')
const uri="mongodb+srv://admin:admin@cluster0.njdvekg.mongodb.net/?retryWrites=true&w=majority"
const client=new MongoClient(uri)

async function run()
{
    try{
        await client.connect();
        const db=client.db('employee');
        const collection=db.collection('mycollection')
        var myobj=[{name:"azar3",age:33,email:"azar3@gmail.com",salary:1500},{name:"azar2",age:34,email:"azar2@gmail.com",salary:2000}];
        const f1=await collection.insertMany(myobj)
        console.log(f1)
    }
    finally
    {
        await client.close()
    }
}
run().catch(console.error)