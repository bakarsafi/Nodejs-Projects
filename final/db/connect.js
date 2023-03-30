const mongoose = require('mongoose')


const connectDB =(url) =>{
    mongoose.connect(url,{
        useNewUrlParser: true,
        useCreateIndex:true,
        useFindAndModify: false,
        useUnifiedTopology: true
    
    })
}
module.exports = connectDB
    // .then(() => {console.log('connected successfully')})
    // .catch((err) =>{ console.log(err)})