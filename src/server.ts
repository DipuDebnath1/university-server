// getting-started.js
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

async function main() {
    try{
        // await mongoose.connect('mongodb://127.0.0.1:27017/test');
        await mongoose.connect(`${config.database_url}`);
        app.listen(config.port, () => {
            console.log(` app listening on port ${config.port}`)
          })
    }catch(err){
        console.log(err);
        
    }
}

main()