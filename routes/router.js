const express = require('express')
const router = express.Router()
const cheerio = require('cheerio')
const axios = require('axios')
const { ProductModel, ElectModel, MobileModel, ToysModel, GamesModel, BooksModel, WatchModel, BabyModel, CarsModel, MotorbikeModel, LaptopModel } = require('../model/URLModel')

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
            // const image = $(element).find('.s-image');
            // const ratings = $(element).find('.a-section').text().trim();
            // const finalprice = $(element).find('.a-offscreen').text().trim();


            // Create a new Product object and push it to the products array
            const product = {
                title,
                price,
                //   image,
                //   ratings,
                //   finalprice

            };
            products.push(product);
        });
        await ProductModel.insertMany(products)

        // console.log('Products scraped and saved to the database:', products, products.length);
    } catch (error) {
        console.error('Error occurred while scraping Amazon:', error);
    }
}
scrapeAmazonProducts();

//electronics

// router.post('/electronics', async (req, res) => {
//     try {
//         scrapeElectronics
//         if (scrapeElectronics) {
//             let data = await ProductModel.create(req.body)
//             res.status(200).send({ message: 'success', data })
//         }
//         else {
//             res.status(400).send({ message: 'error' })
//         }
//     } catch (error) {
//         console.log(error)
//     }
// })

async function scrapeElectronics() {
    try {
        const url = "https://www.amazon.in/s?k=electronics";
        const response = await axios.get(url);

        const $ = cheerio.load(response.data);

        const products = [];
        $('.s-result-item').each((i, element) => {
            const title = $(element).find('h2 span').text().trim();
            const price = $(element).find('.a-price .a-offscreen').text().trim();
            // const image = $(element).find('.s-image').text().trim();
            // const ratings = $(element).find('.a-section').text().trim();
            // const finalprice = $(element).find('.a-offscreen').text().trim();


            const product = {
                title,
                price,
                //   image,
                //   ratings,
                //   finalprice

            };
            products.push(product);
        });
        // if (products) { 
            await ElectModel.insertMany(products)
        //  }
        // else { 
        //     throw error
        //  }
        // console.log('Products scraped and saved to the database:', products, products.length);
    } catch (error) {
        console.error('Error occurred while scraping Amazon:', error);
    }
}
scrapeElectronics();

//mobiles

async function scrapeMobiles() {
    try {
        const url = "https://www.amazon.in/s?k=mobiles";
        const response = await axios.get(url);

        const $ = cheerio.load(response.data);

        const products = [];
        $('.s-result-item').each((i, element) => {
            const title = $(element).find('h2 span').text().trim();
            const price = $(element).find('.a-price .a-offscreen').text().trim();
            // const image = $(element).find('.s-image');
            // const ratings = $(element).find('.a-section').text().trim();
            // const finalprice = $(element).find('.a-offscreen').text().trim();


            const product = {
                title,
                price,
                //   image,
                //   ratings,
                //   finalprice

            };
            products.push(product);
        });
            await MobileModel.insertMany(products)
        // console.log('Products scraped and saved to the database:', products, products.length);
    } catch (error) {
        console.error('Error occurred while scraping Amazon:', error);
    }
}
scrapeMobiles()

// //laptops

async function scrapeLaptops() {
    try {
        const url = "https://www.amazon.in/s?k=laptops";
        const response = await axios.get(url);

        const $ = cheerio.load(response.data);

        const products = [];
        $('.s-result-item').each((i, element) => {
            const title = $(element).find('h2 span').text().trim();
            const price = $(element).find('.a-price .a-offscreen').text().trim();
            // const image = $(element).find('.s-image');
            // const ratings = $(element).find('.a-section').text().trim();
            // const finalprice = $(element).find('.a-offscreen').text().trim();


            const product = {
                title,
                price,
                //   image,
                //   ratings,
                //   finalprice

            };
            products.push(product);
        });
            await LaptopModel.insertMany(products)
        // console.log('Products scraped and saved to the database:', products, products.length);
    } catch (error) {
        console.error('Error occurred while scraping Amazon:', error);
    }
}
scrapeLaptops()

//toys
async function scrapeToys() {
    try {
        const url = "https://www.amazon.in/s?k=toys";
        const response = await axios.get(url);

        const $ = cheerio.load(response.data);

        const products = [];
        $('.s-result-item').each((i, element) => {
            const title = $(element).find('h2 span').text().trim();
            const price = $(element).find('.a-price .a-offscreen').text().trim();
            // const image = $(element).find('.s-image');
            // const ratings = $(element).find('.a-section').text().trim();
            // const finalprice = $(element).find('.a-offscreen').text().trim();


            const product = {
                title,
                price,
                //   image,
                //   ratings,
                //   finalprice

            };
            products.push(product);
        });
            await ToysModel.insertMany(products)
        // console.log('Products scraped and saved to the database:', products, products.length);
    } catch (error) {
        console.error('Error occurred while scraping Amazon:', error);
    }
}
scrapeToys()

//games

async function scrapeGames() {
    try {
        const url = "https://www.amazon.in/s?k=games";
        const response = await axios.get(url);

        const $ = cheerio.load(response.data);

        const products = [];
        $('.s-result-item').each((i, element) => {
            const title = $(element).find('h2 span').text().trim();
            const price = $(element).find('.a-price .a-offscreen').text().trim();
            // const image = $(element).find('.s-image');
            // const ratings = $(element).find('.a-section').text().trim();
            // const finalprice = $(element).find('.a-offscreen').text().trim();


            const product = {
                title,
                price,
                //   image,
                //   ratings,
                //   finalprice

            };
            products.push(product);
        });
            await GamesModel.insertMany(products)
        // console.log('Products scraped and saved to the database:', products, products.length);
    } catch (error) {
        console.error('Error occurred while scraping Amazon:', error);
    }
}
scrapeGames()


//car

async function scrapeCars() {
    try {
        const url = "https://www.amazon.in/s?k=car";
        const response = await axios.get(url);

        const $ = cheerio.load(response.data);

        const products = [];
        $('.s-result-item').each((i, element) => {
            const title = $(element).find('h2 span').text().trim();
            const price = $(element).find('.a-price .a-offscreen').text().trim();
            // const image = $(element).find('.s-image');
            // const ratings = $(element).find('.a-section').text().trim();
            // const finalprice = $(element).find('.a-offscreen').text().trim();


            const product = {
                title,
                price,
                //   image,
                //   ratings,
                //   finalprice

            };
            products.push(product);
        });
            await CarsModel.insertMany(products)
        // console.log('Products scraped and saved to the database:', products, products.length);
    } catch (error) {
        console.error('Error occurred while scraping Amazon:', error);
    }
}
scrapeCars()

//motorbike

async function scrapeMotorbikes() {
    try {
        const url = "https://www.amazon.in/s?k=motorbike";
        const response = await axios.get(url);

        const $ = cheerio.load(response.data);

        const products = [];
        $('.s-result-item').each((i, element) => {
            const title = $(element).find('h2 span').text().trim();
            const price = $(element).find('.a-price .a-offscreen').text().trim();
            // const image = $(element).find('.s-image');
            // const ratings = $(element).find('.a-section').text().trim();
            // const finalprice = $(element).find('.a-offscreen').text().trim();


            const product = {
                title,
                price,
                //   image,
                //   ratings,
                //   finalprice

            };
            products.push(product);
        });
            await MotorbikeModel.insertMany(products)
        // console.log('Products scraped and saved to the database:', products, products.length);
    } catch (error) {
        console.error('Error occurred while scraping Amazon:', error);
    }
}
scrapeMotorbikes()


//books

async function scrapeBooks() {
    try {
        const url = "https://www.amazon.in/s?k=books";
        const response = await axios.get(url);

        const $ = cheerio.load(response.data);

        const products = [];
        $('.s-result-item').each((i, element) => {
            const title = $(element).find('h2 span').text().trim();
            const price = $(element).find('.a-price .a-offscreen').text().trim();
            const image = $(element).find('.s-image').text().trim();
            const ratings = $(element).find('.a-section').text().trim();
            const finalprice = $(element).find('.a-offscreen').text().trim();


            const product = {
                title,
                price,
                image,
                ratings,
                finalprice

            };
            products.push(product);
        });
            await BooksModel.insertMany(products)
        // console.log('Products scraped and saved to the database:', products, products.length);
    } catch (error) {
        console.error('Error occurred while scraping Amazon:', error);
    }
}
scrapeBooks()

//watches

async function scrapeWatches() {
    try {
        const url = "https://www.amazon.in/s?k=watches";
        const response = await axios.get(url);

        const $ = cheerio.load(response.data);

        const products = [];
        $('.s-result-item').each((i, element) => {
            const title = $(element).find('h2 span').text().trim();
            const price = $(element).find('.a-price .a-offscreen').text().trim();
            // const image = $(element).find('.s-image');
            // const ratings = $(element).find('.a-section').text().trim();
            // const finalprice = $(element).find('.a-offscreen').text().trim();


            const product = {
                title,
                price,
                //   image,
                //   ratings,
                //   finalprice

            };
            products.push(product);
        });
            await WatchModel.insertMany(products)
        // console.log('Products scraped and saved to the database:', products, products.length);
    } catch (error) {
        console.error('Error occurred while scraping Amazon:', error);
    }
}
scrapeWatches()

//baby

async function scrapeBaby() {
    try {
        const url = "https://www.amazon.in/s?k=baby";
        const response = await axios.get(url);

        const $ = cheerio.load(response.data);

        const products = [];
        $('.s-result-item').each((i, element) => {
            const title = $(element).find('h2 span').text().trim();
            const price = $(element).find('.a-price .a-offscreen').text().trim();
            // const image = $(element).find('.s-image');
            // const ratings = $(element).find('.a-section').text().trim();
            // const finalprice = $(element).find('.a-offscreen').text().trim();


            const product = {
                title,
                price,
                //   image,
                //   ratings,
                //   finalprice

            };
            products.push(product);
        });
            await BabyModel.insertMany(products)
        // console.log('Products scraped and saved to the database:', products, products.length);
    } catch (error) {
        console.error('Error occurred while scraping Amazon:', error);
    }
}
scrapeBaby()

module.exports = router