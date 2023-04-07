import mongoose from "mongoose";


const dataModelSchema = mongoose.Schema({

    examineeName : {
        type : String,
        required : true,
        trim : true
    },

    examineeFathersName : {
        type : String,
        required : true,
        trim : true
    },

    examineeMothersName : {
        type : String,
        required : true,
        trim : true
    },

    examineeRoll : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },

    examineeRegNo : {
        type : String,
        required : true,
        unique : false,
        trim : true
    },

    examineeType : {
        type : String,
        required : true,
        enum : ["REGULAR", "IRREGULAR"],
    },

    examineeBirthDate : {
        type : String,
        required : true,
        trim : true
    },

    examineeBirthMonth : {
        type : String,
        required : true,
        trim : true
    },

    examineeBirthYear : {
        type : String,
        required : true,
        trim : true
    },

    examineeBoard : {
        type : String,
        required : true,
        trim : true
    },

    examineeInstitute : {
        type : String,
        required : true,
        trim : true
    },

    examineePoint : {
        type : Number,
        trim : true
    },

    examineeGrade : {
        type : String,
        trim : true
    },

    examineeGroup : {
        type : String,
        enum : ["Science", "Commerce", "Humanities", null],
        default : null
    },

    examineeExamRole : {
        type : String,
        required : true,
        enum : ["JSC/JDC", "SSC/DAKHIL", "HSC/Alim"]
    },

    examineeExamYear : {
        type : String,
        required : true
    },

    bangla : {
        type : Number,
        trim : true
    },

    english : {
        type : Number,
        trim : true
    },

    math : {
        type : Number,
        trim : true
    },

    religion : {
        type : Number,
        trim : true
    },

    ict : {
        type : Number,
        trim : true
    },

    generalScience : {
        type : Number,
        trim : true
    },

    physics : {
        type : Number,
        trim : true
    },

    chemistry : {
        type : Number,
        trim : true
    },

    biology : {
        type : Number,
        trim : true
    },

    higherMath : {
        type : Number,
        trim : true
    },

    accounting : {
        type : Number,
        trim : true
    },

    finance : {
        type : Number,
        trim : true
    },

    businessEnt : {
        type : Number,
        trim : true
    },

    agriculturalStudies : {
        type : Number,
        trim : true
    },

    bangladeshAndGlobal  : {
        type : Number,
        trim : true
    },

    geography  : {
        type : Number,
        trim : true
    },

    civic  : {
        type : Number,
        trim : true
    },

    economics  : {
        type : Number,
        trim : true
    },

    history  : {
        type : Number,
        trim : true
    },

    optionalSub : {
        type : String,
        required : true,
        enum : ["Biology", "Higher Math", "Economics", "Geography", "Agriculture"]
    }

}, {
    timestamps : true
})


const dataModel = mongoose.model("data", dataModelSchema);
export default dataModel;
