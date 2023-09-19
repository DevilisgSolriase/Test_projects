const express = require( 'express' );
const route = express.Router();

route.get('/',(req, res) => {
    res.render("profile.ejs", {title: "profile"})
});

module.exports = route;