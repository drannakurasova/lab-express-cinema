const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie.model.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

// LIST THE MOVIES
router.get ("/movies", (req, res, next) =>{
 Movie.find()
 .select({title:1, image:1})
 .then ((allthemovies)=> { 
    // console.log (allthemovies)
  res.render("movies.hbs", {
    title: allthemovies,
    image: allthemovies,
  })
}) 
.catch ( (error) => {
    next (error)
})

})

//ONE MOVIE DESCRIPTION

router.get ("/movies/:movieID", (req, res, next) => {
//  let movieID = req.params;
//  console.log (movieID)

 let movieID= req.params.movieID;
  console.log (movieID)

 Movie.findById (movieID)
 .then ( (oneMovieID)=>{
    console.log (oneMovieID)
    res.render ("movie-id.hbs", {
        title: oneMovieID,
        director: oneMovieID,
        stars: [oneMovieID],
        description: oneMovieID,
        showtimes: [oneMovieID]
    })

 })
 .catch ( (error)=>{
    next (error)
 })

} )

module.exports = router;
