const mongsoose = require("mongoose");

const ratingAndReview = new mongsoose.Schema({

    user:{
        type:mongsoose.Schema.Types.ObjectId,
        require:true,
        ref:'User',
    },
    rating:{
        type:Number,
        required:true,

    },
    reviews:{
        types:String,
        required:true,
    }

});

module.exports = mongsoose.model("RatingAndReview",ratingAndReview)