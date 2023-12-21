const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://flexxxx:ecasillero1@cluster0.exifmeo.mongodb.net/REDFLEX',{
    useNewUrlParser: true
})

.then(db => console.log('db conectado'))
.catch(err => console.error(err));