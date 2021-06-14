const jwt = require('jsonwebtoken');
const ClinicalAnalysisModel = require('../schema/clinical_analysis.schema');

 exports.sendColectedSample = (data, token) => {
    const created = jwt.verify(token, 'supersecret', async (err, granted)=>{
        if(!err){
            data.RESULTADO = 'Negativa';

            if(data.THC >= 0.05){
                data.RESULTADO = 'Positiva';
            }
            if(data.COCAINA >= 0.5 && data.BENZOILECGONINA >= 0.5 || data.COCAETILENO >= 0.5 || data.NORCOCAINA >= 0.5){
                data.RESULTADO = 'Positiva';
            }
            if(data.MORFINA >= 0.2 || data.CODEINA >= 0.2 || data.HEROINA >= 0.2 ||
               data.MDMA >= 0.2 || data.MDA >= 0.2 || data.ANFETAMINA >= 0.2 || data.METANFETAMINA >= 0.2)
               {
                    data.RESULTADO = 'Positiva';
               };
            
            return await ClinicalAnalysisModel.create(data);
            
        } else {
            return err
          };
        });
    return created;
 }

 exports.getAll = (token) => {
    const listAll = jwt.verify(token, 'supersecret', async (err, granted)=>{
        if(!err){
            return await ClinicalAnalysisModel.find({});
        } else {
            return err
          };
        });
    return listAll;
 }