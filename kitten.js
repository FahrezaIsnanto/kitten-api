const mongoose = require('mongoose');

const kittenSchema = mongoose.Schema({
    nama:{
        type:String,
        required:[true,"Nama dibutuhkan"]
    },
    tipe:{
        type:String,
        required:[true,"Tipe dibutuhkan"]
    }
});

const Kitten = mongoose.model('Kitten',kittenSchema);

module.exports = Kitten;