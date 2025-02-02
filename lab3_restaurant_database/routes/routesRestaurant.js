const express = require('express');
const router = express.Router();
const restaurantController = require('../controller/controllerRestaurant');


router.get('/restaurants', restaurantController.getAllRestaurants);


router.get('/restaurants/cuisine/:cuisine', restaurantController.getRestaurantsByCuisine);


router.get('/restaurants', restaurantController.getRestaurantsSorted);

router.get('/restaurants/Delicatessen', restaurantController.getDelicatessenNotInBrooklyn);

module.exports = router;