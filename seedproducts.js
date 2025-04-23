// const mongoose = require('mongoose');

// const { faker } = require('@faker-js/faker');
// // const connectDB = require('./Config/db');
// require('./Config/db');
// const Product = require('./Models/Data');

// const categories = ['mobiles & tablets', 'tvs', 'fashion','beauty','furniture','grocery','home & kitchen'];

// const seedProducts = async () => {
//   try {
//     // await connectDB(); 

   
//     await Product.deleteMany({});

 
//     for (const category of categories) {
//       for (let i = 0; i < 10; i++) {
//         const product = new Product({
//           name: faker.commerce.productName(),
//           description: faker.commerce.productDescription(),
//           price: parseFloat(faker.commerce.price()),
//           category: category,
//           imageUrl: faker.image.imageUrl(400, 300, 'tech', true),
//         });
//         await product.save();
//       }
//     }

//     console.log('Products seeded successfully');
//     mongoose.connection.close(); 
//   } catch (err) {
//     console.error('Error seeding products:', err);
//     mongoose.connection.close(); 
//   }
// };

// seedProducts();



const mongoose = require('mongoose');

require('dotenv').config();            // 1. load MONGO_URI
const connectDB = require('./Config/db');
const Product   = require('./Models/testdata');
const devices   = require('./data/productlist');

const seedDevices = async () => {
  try {
    // 2. connect to Mongo
   // await connectDB();

    // 3. clear out old entries
    await Product.deleteMany();
    console.log('Old data cleared');

    // 4. insert all your static devices
    await Product.insertMany(devices);
    console.log('Data Seeded ✅');

    // 5. exit process
    process.exit(0);
  } catch (err) {
    console.error('Seeding Error ❌', err);
    process.exit(1);
  }
};

seedDevices();
