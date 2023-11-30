const mongoose = require('mongoose')


let productSchema = new mongoose.Schema({

    title: { type: String },

    price: { type: String },

    image: { type: String },

    ratings: { type: String }

}, { collection: 'allproducts', versionKey: false })

let ProductModel = mongoose.model('allproducts', productSchema)

//elect

let electronicsSchema = new mongoose.Schema({

    title: { type: String },

    price: { type: String },

    image: { type: String },

    ratings: { type: String }


}, { collection: 'electronics', versionKey: false })

let ElectModel = mongoose.model('electronics', electronicsSchema)

//mobiles

let mobilesSchema = new mongoose.Schema({

    title: { type: String },

    price: { type: String },

    image: { type: String },

    ratings: { type: String }

}, { collection: 'mobiles', versionKey: false })

let MobileModel = mongoose.model('mobiles', mobilesSchema)

//laptops


let laptopSchema = new mongoose.Schema({

    title: { type: String },

    price: { type: String },

    image: { type: String },

    ratings: { type: String }

}, { collection: 'laptops', versionKey: false })

let LaptopModel = mongoose.model('laptops', laptopSchema)


//toys

let toysSchema = new mongoose.Schema({

    title: { type: String },

    price: { type: String },

    image: { type: String },

    ratings: { type: String }

}, { collection: 'toys', versionKey: false })

let ToysModel = mongoose.model('toys', toysSchema)


//games

let gamesSchema = new mongoose.Schema({

    title: { type: String },

    price: { type: String },

    image: { type: String },

    ratings: { type: String }

}, { collection: 'games', versionKey: false })

let GamesModel = mongoose.model('games', gamesSchema)


//car

let carsSchema = new mongoose.Schema({

    title: { type: String },

    price: { type: String },

    image: { type: String },

    ratings: { type: String }

}, { collection: 'cars', versionKey: false })

let CarsModel = mongoose.model('cars', carsSchema)

//motorbike

let motorSchema = new mongoose.Schema({

    title: { type: String },

    price: { type: String },

    image: { type: String },

    ratings: { type: String }

}, { collection: 'motors', versionKey: false })

let MotorbikeModel = mongoose.model('motors', motorSchema)

//books

let bookSchema = new mongoose.Schema({

    title: { type: String },

    price: { type: String },

    image: { type: String },

    ratings: { type: String }

}, { collection: 'books', versionKey: false })

let BooksModel = mongoose.model('books', bookSchema)

//watches

let watchSchema = new mongoose.Schema({

    title: { type: String },

    price: { type: String },

    image: { type: String },

    ratings: { type: String }
}, { collection: 'watches', versionKey: false })

let WatchModel = mongoose.model('watches', watchSchema)

//baby

let babySchema = new mongoose.Schema({

    title: { type: String },

    price: { type: String },

    image: { type: String },

    ratings: { type: String }

}, { collection: 'babys', versionKey: false })

let BabyModel = mongoose.model('babys', babySchema)


module.exports = { ProductModel, ElectModel, MobileModel, BabyModel, CarsModel, MotorbikeModel, WatchModel, LaptopModel, ToysModel, GamesModel, BooksModel }