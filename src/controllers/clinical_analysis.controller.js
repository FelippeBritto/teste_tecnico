const analysis_Service = require('../services/clinical_analysis.service');

exports.post = async (req, res, next) => {
    let data = req.body;
    let token =  req.params.token;
    
    const saved = await analysis_Service.sendColectedSample(data, token);

    res.status(201).json({Amostra: saved.RESULTADO});
}

exports.get = async  (req, res, next) => {
    let token =  req.params.token;

    const data = await analysis_Service.getAll(token);

    res.status(200).json(data);
}