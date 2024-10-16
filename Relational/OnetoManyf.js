const mongoose = require('mongoose');
//const Schema = {mongoose}
main().then(()=> {console.log("Connection Successfull")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Relation');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const UserSchema = mongoose.Schema({
    username : String,
    addresses : [
        {
            _id : false ,
             location : String ,
             city : String , 
             mobNo : Number
        }
    ]
});
const User = mongoose.model('User', UserSchema);

const AddUsers = async() => {
    const user1 = new User({
        username : "Durgesh",
        addresses : [
            {
                location : "Done Buzurg",
                city : "Siwan" ,
                mobNo : 9608609731
            }
        ]
    })
    user1.addresses.push({location: "Done" , city : "Siwan", mobNo : 7322841661})
    const result = await user1.save()
    console.log(result);
}

AddUsers();

