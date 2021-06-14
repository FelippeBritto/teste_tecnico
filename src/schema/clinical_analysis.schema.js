const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clinicalAnalysis_Schema = new Schema({
    codigo_amostra: {
        type: String,
        required: true,
        maxlength: 8
    },
    RESULTADO: {
        type: String,
    },
    COCAINA: {
        type: Number,
        required: true
    },
    ANFETAMINA: {
        type: Number,
        required: true
    },
    METANFETAMINA: {
        type: Number,
        required: true
    },
    MDA: {
        type: Number,
        required: true
    },
    MDMA: {
        type: Number,
        required: true
    },
    THC: {
        type: Number,
        required: true
    },
    MORFINA: {
        type: Number,
        required: true
    },
    CODEINA: {
        type: Number,
        required: true
    },
    HEROINA: {
        type: Number,
        required: true
    },
    BENZOILECGONINA: {
        type: Number,
        required: true
    },
    COCAETILENO: {
        type: Number,
        required: true
    },
    NORCOCAINA: {
        type: Number,
        required: true
    }
})

const ClinicalAnalysisModel = mongoose.model('ClinicalAnalysisModel', clinicalAnalysis_Schema);

module.exports = ClinicalAnalysisModel;