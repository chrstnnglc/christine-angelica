const router = new Router();
router.get('/about', function(req){
    console.log(req.path); // outputs /about-me to the console
});
router.init();