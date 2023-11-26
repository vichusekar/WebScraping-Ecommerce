const express = require('express')
const { GamesModel, ElectModel, MobileModel, MotorbikeModel, CarsModel, LaptopModel, ToysModel, BooksModel, BabyModel, WatchModel, ProductModel } = require('../model/URLModel')
const router = express.Router()

router.get('/all', async (req,res) => {
    try {
        let data = await ProductModel.find({})
        if(data)
        {
            res.status(200).send({message: 'DataFetched Successflly', data})
        }
        else
        {
            res.status(404).send({message: 'Something went wrong'})
        }
    } catch (error) {
        console.log(error)
    }
})

router.get('/electronics', async (req,res) => {
    try {
        let products = await ElectModel.find({})
        if(products)
        {
            res.status(200).send({message: 'fetch success', products})
        }
        else{
            res.status(404).send({message: 'err'})
        }
    } catch (error) {
        res.status(500).send({message: 'internal err', error: error?.message})
    }
})

router.get('/mobiles', async (req,res) => {
    try {
        let products = await MobileModel.find({})
        if(products)
        {
            res.status(200).send({message: 'success', products})
        }
        else
        {
            res.status(404).send({message: 'not found'})
        }
    } catch (error) {
        res.status(500).send({message: 'Internal Server Error', error: error?.message})
    }
})

router.get('/laptops', async (req,res) => {
    try {
        let products = await LaptopModel.find({})
        if(products)
        {
            res.status(200).send({message: 'success', products})
        }
        else
        {
            res.status(404).send({message: 'not found'})
        }
    } catch (error) {
        res.status(500).send({message: 'Internal Server Error', error: error?.message})
    }
})


router.get('/cars', async (req,res) => {
    try {
        let products = await CarsModel.find({})
        if(products)
        {
            res.status(200).send({message: 'success', products})
        }
        else
        {
            res.status(404).send({message: 'not found'})
        }
    } catch (error) {
        res.status(500).send({message: 'Internal Server Error', error: error?.message})
    }
})

router.get('/motorbike', async (req,res) => {
    try {
        let products = await MotorbikeModel.find({})
        if(products)
        {
            res.status(200).send({message: 'success', products})
        }
        else
        {
            res.status(404).send({message: 'not found'})
        }
    } catch (error) {
        res.status(500).send({message: 'Internal Server Error', error: error?.message})
    }
})

router.get('/watches', async (req,res) => {
    try {
        let products = await WatchModel.find({})
        if(products)
        {
            res.status(200).send({message: 'success', products})
        }
        else
        {
            res.status(404).send({message: 'not found'})
        }
    } catch (error) {
        res.status(500).send({message: 'Internal Server Error', error: error?.message})
    }
})

router.get('/toys', async (req,res) => {
    try {
        let products = await ToysModel.find({})
        if(products)
        {
            res.status(200).send({message: 'success', products})
        }
        else
        {
            res.status(404).send({message: 'not found'})
        }
    } catch (error) {
        res.status(500).send({message: 'Internal Server Error', error: error?.message})
    }
})

router.get('/baby', async (req,res) => {
    try {
        let products = await BabyModel.find({})
        if(products)
        {
            res.status(200).send({message: 'success', products})
        }
        else
        {
            res.status(404).send({message: 'not found'})
        }
    } catch (error) {
        res.status(500).send({message: 'Internal Server Error', error: error?.message})
    }
})

router.get('/books', async (req,res) => {
    try {
        let products = await BooksModel.find({})
        if(products)
        {
            res.status(200).send({message: 'success', products})
        }
        else
        {
            res.status(404).send({message: 'not found'})
        }
    } catch (error) {
        res.status(500).send({message: 'Internal Server Error', error: error?.message})
    }
})

router.get('/games', async (req,res) => {
    try {
        let products = await GamesModel.find({})
        if(products)
        {
            res.status(200).send({message: 'success', products})
        }
        else
        {
            res.status(404).send({message: 'not found'})
        }
    } catch (error) {
        res.status(500).send({message: 'Internal Server Error', error: error?.message})
    }
})

module.exports = router