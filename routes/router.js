const express = require('express')
const router = express.Router()
const cheerio = require('cheerio')
const axios = require('axios')
const { UserModel } = require('../model/UserModel')
const { ProductModel, ElectModel, MobileModel, ToysModel, GamesModel, BooksModel, WatchModel, BabyModel, CarsModel, MotorbikeModel, LaptopModel } = require('../model/URLModel')

router.post('/register', async (req, res) => {
    try {
        let user = await UserModel.findOne({ email: req.body.email })
        if (user) {
            res.status(400).send({ message: `User of ${req.body.email} already exist` })
        }
        else {
            let newUser = await UserModel.create(req.body)
            res.status(200).send({ message: 'Registered Successfully' })
        }
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error', error: error?.message })
    }
})


let productdata = ["laptops", "mobiles", "toys", "books", "baby", "electronics", "watches", "games", "car", "motorbike"]

async function scrapeAmazonProducts() {
    try {
        const url = `https://www.amazon.in/s?k=${productdata}`;

        const response = await axios.get(url);

        const $ = cheerio.load(response.data);

        const products = [];
        $('.s-result-item').each((i, element) => {
            const title = $(element).find('h2 span').text().trim();
            const price = $(element).find('.a-price .a-offscreen').text().trim();
            const image = $(element).find('img').attr('src');
            const ratings = $(element).find('.a-icon span').text().trim();

            const product = {
                title,
                price,
                image,
                ratings

            };
            products.push(product);
        });
        await ProductModel.insertMany(products)

        // console.log(products);
    } catch (error) {
        console.error(error);
    }
}
// scrapeAmazonProducts();

//electronics

async function scrapeElectronics() {
    try {
        const url1 = "https://www.amazon.in/s?k=electronics";

        const response = await axios.get(url1);

        const $ = cheerio.load(response.data);

        const products = [];
        $('.s-result-item').each((i, element) => {
            const title = $(element).find('h2 span').text().trim();
            const price = $(element).find('.a-price .a-offscreen').text().trim();
            const image = $(element).find('img').attr('src');
            const ratings = $(element).find('.a-icon span').text().trim();



            const product = {
                title,
                price,
                image,
                ratings

            };
            products.push(product);
        });
        await ElectModel.insertMany(products)

        // console.log(products);
    } catch (error) {
        console.error(error);
    }
}
// scrapeElectronics();

//mobiles

async function scrapeMobiles() {
    try {
        const url2 = "https://www.amazon.in/s?k=mobiles";

        const response = await axios.get(url2);

        const $ = cheerio.load(response.data);

        const products = [];
        $('.s-result-item').each((i, element) => {
            const title = $(element).find('h2 span').text().trim();
            const price = $(element).find('.a-price .a-offscreen').text().trim();
            const image = $(element).find('img').attr('src');
            const ratings = $(element).find('.a-icon span').text().trim();



            const product = {
                title,
                price,
                image,
                ratings

            };
            products.push(product);
        });
        await MobileModel.insertMany(products)
        // console.log(products);
    } catch (error) {
        console.error(error);
    }
}
// scrapeMobiles()

// //laptops

async function scrapeLaptops() {
    try {
        const url3 = "https://www.amazon.in/s?k=laptops";

        const response = await axios.get(url3);

        const $ = cheerio.load(response.data);

        const products = [];
        $('.s-result-item').each((i, element) => {
            const title = $(element).find('h2 span').text().trim();
            const price = $(element).find('.a-price .a-offscreen').text().trim();
            const image = $(element).find('img').attr('src');
            const ratings = $(element).find('.a-icon span').text().trim();


            const product = {
                title,
                price,
                image,
                ratings

            };
            products.push(product);
        });
        await LaptopModel.insertMany(products)
        // console.log(products);
    } catch (error) {
        console.error(error);
    }
}
// scrapeLaptops()

//toys
async function scrapeToys() {
    try {
        const url4 = "https://www.amazon.in/s?k=toys";

        const response = await axios.get(url4);

        const $ = cheerio.load(response.data);

        const products = [];
        $('.s-result-item').each((i, element) => {
            const title = $(element).find('h2 span').text().trim();
            const price = $(element).find('.a-price .a-offscreen').text().trim();
            const image = $(element).find('img').attr('src');
            const ratings = $(element).find('.a-icon span').text().trim();


            const product = {
                title,
                price,
                image,
                ratings

            };
            products.push(product);
        });
        await ToysModel.insertMany(products)
        // console.log( products);
    } catch (error) {
        console.error(error);
    }
}
// scrapeToys()

//games

async function scrapeGames() {
    try {
        const url5 = "https://www.amazon.in/s?k=games";

        const response = await axios.get(url5);

        const $ = cheerio.load(response.data);

        const products = [];
        $('.s-result-item').each((i, element) => {
            const title = $(element).find('h2 span').text().trim();
            const price = $(element).find('.a-price .a-offscreen').text().trim();
            const image = $(element).find('img').attr('src');
            const ratings = $(element).find('.a-icon span').text().trim();


            const product = {
                title,
                price,
                image,
                ratings

            };
            products.push(product);
        });
        await GamesModel.insertMany(products)
        // console.log(products);
    } catch (error) {
        console.error(error);
    }
}
// scrapeGames()


//car

async function scrapeCars() {
    try {
        const url6 = "https://www.amazon.in/s?k=car";

        const response = await axios.get(url6);

        const $ = cheerio.load(response.data);

        const products = [];
        $('.s-result-item').each((i, element) => {
            const title = $(element).find('h2 span').text().trim();
            const price = $(element).find('.a-price .a-offscreen').text().trim();
            const image = $(element).find('img').attr('src');
            const ratings = $(element).find('.a-icon span').text().trim();

            const product = {
                title,
                price,
                image,
                ratings

            };
            products.push(product);
        });
        await CarsModel.insertMany(products)
        // console.log(products);
    } catch (error) {
        console.error(error);
    }
}
// scrapeCars()

//motorbike

async function scrapeMotorbikes() {
    try {
        const url7 = "https://www.amazon.in/s?k=motorbike";

        const response = await axios.get(url7);

        const $ = cheerio.load(response.data);

        const products = [];
        $('.s-result-item').each((i, element) => {
            const title = $(element).find('h2 span').text().trim();
            const price = $(element).find('.a-price .a-offscreen').text().trim();
            const image = $(element).find('img').attr('src');
            const ratings = $(element).find('.a-icon span').text().trim();



            const product = {
                title,
                price,
                image,
                ratings

            };
            products.push(product);
        });
        await MotorbikeModel.insertMany(products)
        // console.log(products);
    } catch (error) {
        console.error(error);
    }
}
// scrapeMotorbikes()


//books

async function scrapeBooks() {
    try {
        const url8 = "https://www.amazon.in/s?k=books";

        const response = await axios.get(url8);

        const $ = cheerio.load(response.data);

        const products = [];
        $('.s-result-item').each((i, element) => {
            const title = $(element).find('h2 span').text().trim();
            const price = $(element).find('.a-price .a-offscreen').text().trim();
            const image = $(element).find('img').attr('src');
            const ratings = $(element).find('.a-icon span').text().trim();

            const product = {
                title,
                price,
                image,
                ratings
            };
            products.push(product);
        });
        await BooksModel.insertMany(products)
        // console.log(products);
    } catch (error) {
        console.error(error);
    }
}
// scrapeBooks()

//watches

async function scrapeWatches() {
    try {
        const url9 = "https://www.amazon.in/s?k=watches";

        const response = await axios.get(url9);

        const $ = cheerio.load(response.data);

        const products = [];
        $('.s-result-item').each((i, element) => {
            const title = $(element).find('h2 span').text().trim();
            const price = $(element).find('.a-price .a-offscreen').text().trim();
            const image = $(element).find('img').attr('src');
            const ratings = $(element).find('.a-icon span').text().trim();



            const product = {
                title,
                price,
                image,
                ratings

            };
            products.push(product);
        });
        await WatchModel.insertMany(products)
        // console.log(products);
    } catch (error) {
        console.error(error);
    }
}
// scrapeWatches()

//baby

async function scrapeBaby() {
    try {
        const url0 = "https://www.amazon.in/s?k=baby";
        
        const response = await axios.get(url0);

        const $ = cheerio.load(response.data);

        const products = [];
        $('.s-result-item').each((i, element) => {
            const title = $(element).find('h2 span').text().trim();
            const price = $(element).find('.a-price .a-offscreen').text().trim();
            const image = $(element).find('img').attr('src');
            const ratings = $(element).find('.a-icon span').text().trim();


            const product = {
                title,
                price,
                image,
                ratings

            };
            products.push(product);
        });
        await BabyModel.insertMany(products)
        // console.log(products);
    } catch (error) {
        console.error(error);
    }
}
// scrapeBaby()

module.exports = router