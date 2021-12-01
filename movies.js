const router = require('express').Router()
const fetch = require('cross-fetch')



router.get('/:id', async (req,res)=>{
    try {
    const movieData = await fetch(`https://www.omdbapi.com/?s=${req.params.id}&apikey=d27040d0`)
    const ans = await movieData.json()
    res.send(ans)
   
    } catch (err) {
        console.log({some:"Cant find a movie!"});
        
    }

})




module.exports = router