const express = require('express');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
const uuid = require('uuid');
const {format} = require('timeago.js');

const app = express();
require('./database');

app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, cb, filename) => {
        cb(null, uuid.v4() + path.extname(file.originalname));
    }
});
app.use(multer({storage: storage}).single('image'));
 

app.use((req, res, next)  =>{
    app.locals.format = format;
    next();

});


//rutas
app.use(require('./routes/index'));


// archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// iniciar servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
   
});

