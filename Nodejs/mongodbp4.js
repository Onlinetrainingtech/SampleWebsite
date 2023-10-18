const {MongoClient}=require('mongodb')
const uri="mongodb+srv://admin:admin@cluster0.njdvekg.mongodb.net/?retryWrites=true&w=majority"
const client=new MongoClient(uri)

async function run()
{
    try{
        await client.connect();
        const db=client.db('employee')
        const collection=db.collection('mycollection')

        //delete

        const cursorUpdate=await collection.deleteOne(
            {"name":"xyz"}
        );
        console.log(cursorUpdate.deletedCount);

        //Display the data

        const cursorFind=collection.find()
        const data=await cursorFind.toArray()
        console.table(data)
    }finally
    {
        await client.close()
    }
}
run().catch(console.error);