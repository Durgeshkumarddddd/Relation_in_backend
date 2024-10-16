const mongoose = require('mongoose')
const {Schema} = mongoose
main().then(()=> {console.log("Connection Successfull")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Relation');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const orderSchema = new Schema({
    itemName : String ,
    price : Number,
})
 
const customerSchema = new Schema({
  username : String ,
  orders :[
    {
      type : Schema.Types.ObjectId,
      ref : 'order'
     }
  ] 
         
})
const customer = mongoose.model('customer' , customerSchema );
const order = mongoose.model('order', orderSchema );

const addCustomer = async()=>{
  const cust1 = new customer({
    username : "Durgesh"

  })
  const order1 = await order.findOne({itemName : "jalebi"})
  const order2 = await order.findOne({itemName : "langlati"})
  cust1.orders.push(order1)
  cust1.orders.push(order2)
  const res = await cust1.save()
  console.log(res)
}
addCustomer()
// const addOrder = async() =>{
 
//    const res = await order.insertMany([{itemName : "jalebi", price :29},{ itemName: "langlati", price : 5},{itemName:"chips",price:10}])
//    console.log(res)
// }
// addOrder()
// // const addCustomer = async() => {
//     const customer1 = new customer({
//         username : "Durgesh",
//         orders : [{

//         }]
//     })
   
// }