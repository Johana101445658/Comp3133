const Restaurant = require('../models/restaurant');


exports.getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getRestaurantsByCuisine = async (req, res) => {
    try {
        const cuisine = req.params.cuisine;
        const restaurants = await Restaurant.find({ cuisine: cuisine });
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getRestaurantsSorted = async (req, res) => {
    try {
        const sortOrder = req.query.sortBy === 'DESC' ? -1 : 1;
        const restaurants = await Restaurant.find()
            .select('id cuisine name city restaurant_id')
            .sort({ restaurant_id: sortOrder });
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getDelicatessenNotInBrooklyn = async (req, res) => {
    try {
        const restaurants = await Restaurant.find({
            cuisine: 'Delicatessen',
            city: { $ne: 'Brooklyn' },
        })
            .select('cuisine name city -_id')
            .sort({ name: 1 });
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
