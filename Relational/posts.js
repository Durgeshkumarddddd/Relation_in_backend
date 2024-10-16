const mongoose = require('mongoose')
const {Schema} = mongoose
main().then(()=> {console.log("Connection Successfull")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Relation');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema = new Schema({
    name : String,
    email : String
})

const postSchema = new Schema({
    title : String ,
    likes : Number,
    user : {
        type : Schema.Types.ObjectId,
        ref : 'user'
    }
})
const user = mongoose.model('user', userSchema)
const post = mongoose.model('post', postSchema)

const addpost = async()=>{
//   const res = await post.find({})
//   console.log(res)

// await post.findByIdAndDelete('66bf97b1164d9d8fb9c51d91')
// await user.findByIdAndDelete('66bf97b1164d9d8fb9c51d90')
// await user.findByIdAndDelete('66bf98331447b5aad3bd5a4b')

    const user1 = await user.findOne({name : "Durgesh"})
    const post1 = new post({
       title : "Equility of society is important !",
        likes : 2432
    })
     post1.user = user1

   const res = await post1.save()
   console.log(res);
   console.log(user1);
   
     
}    
addpost()