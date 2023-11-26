const mongoose = require('mongoose')


let productSchema = new mongoose.Schema({

    title: {type: String, required:false, }, 

    price: {type: String, required: false},

    // image: {type: String, required: true},

    // ratings: {type: String, required: true},

    // finalprice: {type: String, required: true}

}, { collection: 'allproducts', versionKey: false })

let ProductModel = mongoose.model('allproducts', productSchema)

//elect

let electronicsSchema = new mongoose.Schema({

    title: {type: String, required:false, }, 

    price: {type: String, required: false},

    // image: {type: String, required: true},

    // ratings: {type: String, required: true},

    // finalprice: {type: String, required: true}

}, { collection: 'electronics', versionKey: false })

let ElectModel = mongoose.model('electronics', electronicsSchema)

//mobiles

let mobilesSchema = new mongoose.Schema({

    title: {type: String, required:false, }, 

    price: {type: String, required: false},

    // image: {type: String, required: true},

    // ratings: {type: String, required: true},

    // finalprice: {type: String, required: true}

}, { collection: 'mobiles', versionKey: false })

let MobileModel = mongoose.model('mobiles', mobilesSchema)

//laptops


let laptopSchema = new mongoose.Schema({

    title: {type: String, required:false, }, 

    price: {type: String, required: false},

    // image: {type: String, required: true},

    // ratings: {type: String, required: true},

    // finalprice: {type: String, required: true}

}, { collection: 'laptops', versionKey: false })

let LaptopModel = mongoose.model('laptops', laptopSchema)


//toys

let toysSchema = new mongoose.Schema({

    title: {type: String, required:false, }, 

    price: {type: String, required: false},

    // image: {type: String, required: true},

    // ratings: {type: String, required: true},

    // finalprice: {type: String, required: true}

}, { collection: 'toys', versionKey: false })

let ToysModel = mongoose.model('toys', toysSchema)


//games

let gamesSchema = new mongoose.Schema({

    title: {type: String, required:false, }, 

    price: {type: String, required: false},

    // image: {type: String, required: true},

    // ratings: {type: String, required: true},

    // finalprice: {type: String, required: true}

}, { collection: 'games', versionKey: false })

let GamesModel = mongoose.model('games', gamesSchema)


//car

let carsSchema = new mongoose.Schema({

    title: {type: String, required:false, }, 

    price: {type: String, required: false},

    // image: {type: String, required: true},

    // ratings: {type: String, required: true},

    // finalprice: {type: String, required: true}

}, { collection: 'cars', versionKey: false })

let CarsModel = mongoose.model('cars', carsSchema)

//motorbike

let motorSchema = new mongoose.Schema({

    title: {type: String, required:false, }, 

    price: {type: String, required: false},

    // image: {type: String, required: true},

    // ratings: {type: String, required: true},

    // finalprice: {type: String, required: true}

}, { collection: 'motors', versionKey: false })

let MotorbikeModel = mongoose.model('motors', motorSchema)

//books

let bookSchema = new mongoose.Schema({

    title: {type: String, required:false, }, 

    price: {type: String, required: false},

    // image: {type: String, required: true},

    // ratings: {type: String, required: true},

    // finalprice: {type: String, required: true}

}, { collection: 'books', versionKey: false })

let BooksModel = mongoose.model('books', bookSchema)

//watches

let watchSchema = new mongoose.Schema({

    title: {type: String, required:false, }, 

    price: {type: String, required: false},

    // image: {type: String, required: true},

    // ratings: {type: String, required: true},

    // finalprice: {type: String, required: true}

}, { collection: 'watches', versionKey: false })

let WatchModel = mongoose.model('watches', watchSchema)

//baby

let babySchema = new mongoose.Schema({

    title: {type: String, required:false, }, 

    price: {type: String, required: false},

    // image: {type: String, required: true},

    // ratings: {type: String, required: true},

    // finalprice: {type: String, required: true}

}, { collection: 'babys', versionKey: false })

let BabyModel = mongoose.model('babys', babySchema)


module.exports = {ProductModel, ElectModel, MobileModel, BabyModel, CarsModel, MotorbikeModel, WatchModel, LaptopModel, ToysModel, GamesModel, BooksModel}