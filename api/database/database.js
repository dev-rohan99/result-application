import mongoose from "mongoose";


const mongoDbConnection = async () => {

    try{

        await mongoose.connect(process.env.MONGO_STR, {
            useNewUrlParser: true,
            useUnifiedTopology: true})
        .then(() => console.log('Connected!'.bgGreen.white))
        .catch(err => {
            console.log(err);
            console.log('Disconnected!'.bgRed.white);
        });

    }catch(err){
        console.log(err);
    }

}

export default mongoDbConnection;
