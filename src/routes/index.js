const { Router } = require('express');
const router = Router ();

const Image = require('../models/Image');
const { accessSync } = require('fs-extra');

router.get('/', async (req, res) => {
   const images = await  Image.find();
  
   res.render('index', { images});
});  
router.get('/upload', (req, res) =>{
    res.render('upload');

});
router.post('/upload',  (req, res) => {
    const image = new Image();
    image.title = req.body.title;
    image.description = req.body.description;
    image.filename = req.file.filename;
    image.path = '/img/uploads/' + req.file.filename;
    image.originalname = req.file.originalname;
    image.mimetype = req.file.minetype;
    image.size = req.file.size;

 image.save();


    res.redirect('/');
    
});

router.get('image/:id', (req, res) =>{
    const { id } = req.params;
    const image =  Image.findById(id);
    res.render('profile', {image});
   
});

router.get('/image/:id/delete', (req, res) => {
res.send('imagen eliminada')
});

module.exports = router;