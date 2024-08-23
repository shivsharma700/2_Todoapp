function homePingController(req, res){
    console.log('inside home');

    return res.json({msg : 'Ok'})
}

module.exports = homePingController;