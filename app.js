const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

const path = require('path')

const app = express();

mongoose.connect('mongodb+srv://user_me:usermetest@cluster0.bxwfaix.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));
module.exports = app;



// const stuff = [
//   {
//     _id: 'oeihfzeoi',
//     title: 'Mon premier objet',
//     description: 'Les infos de mon premier objet',
//     imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//     price: 4900,
//     userId: 'qsomihvqios',
//   },
//   {
//     _id: 'oeihfzeomoihi',
//     title: 'Mon deuxième objet',
//     description: 'Les infos de mon deuxième objet',
//     imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//     price: 2900,
//     userId: 'qsomihvqios',
//   },
// ];
// res.status(200).json(stuff);