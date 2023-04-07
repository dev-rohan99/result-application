import dataModel from "../models/dataModel.js";
import { finalGreading, pointing } from "../utilities/pointingAndGrading.js";


/**
 * post student data
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

export const postFormController = async (req, res, next) => {

    try{

        let { examineeRoll, examineeRegNo, examineePoint, examineeGrade, banglaFirst, banglaSecond, englishFirst, englishSecond, math, religion, ict, generalScience, physics, chemistry, biology, higherMath, accounting, finance, businessEnt, agriculturalStudies, bangladeshAndGlobal, geography, civic, economics, history, examineeGroup, optionalSub, examineeExamRole } = req.body;

        let banglaResult = ((Number(banglaFirst) + Number(banglaSecond)) / 2);
        let englishResult = ((Number(englishFirst) + Number(englishSecond)) / 2);

        const banglaPoint = pointing(banglaResult);
        const englishPoint = pointing(englishResult);
        const mathPoint = pointing(math);
        const religionPoint = pointing(religion);
        const ictPoint = pointing(ict);

        const physicsPoint = pointing(physics);
        const chemistryPoint = pointing(chemistry);
        const biologyPoint = pointing(biology);
        const higherMathPoint = pointing(higherMath);
        const bangladeshAndGlobalPoint = pointing(bangladeshAndGlobal);

        const agriculturalStudiesPoint = pointing(agriculturalStudies);
        
        const generalSciencePoint = pointing(generalScience);
        const accountingPoint = pointing(accounting);
        const financePoint = pointing(finance);
        const businessEntPoint = pointing(businessEnt);

        const geographyPoint = pointing(geography);
        const civicPoint = pointing(civic);
        const economicsPoint = pointing(economics);
        const historyPoint = pointing(history);

        const calculateMainSubResult = (banglaPoint + englishPoint + mathPoint + religionPoint + ictPoint);

        let resultInPoint;
        let resultInGrade;
        let data;

        if(examineeExamRole === "JSC/JDC"){
            if(optionalSub === "Agriculture"){
                let scienceResult = (calculateMainSubResult + generalSciencePoint + bangladeshAndGlobalPoint);
                if(banglaPoint === 0.00 || englishPoint === 0.00 || mathPoint === 0.00 || religionPoint === 0.00 || ictPoint === 0.00 || bangladeshAndGlobalPoint === 0.00 || generalSciencePoint === 0.00){

                    resultInPoint = 0.00;
                    resultInGrade = "F";

                }else{
                    if(agriculturalStudiesPoint >= 3.00){
                        const optionalSubject = (agriculturalStudiesPoint - 3.00);
                        const finalResult = ((scienceResult + optionalSubject) / 7);
                        resultInPoint = finalResult.toFixed(2);
                        resultInGrade = finalGreading(finalResult.toFixed(2));
                    }else{
                        const optionalSubject = (agriculturalStudiesPoint - agriculturalStudiesPoint);
                        const finalResult = ((scienceResult + optionalSubject) / 7);
                        resultInPoint = finalResult.toFixed(2);
                        resultInGrade = finalGreading(finalResult.toFixed(2));
                    }
                }

                if(resultInPoint > 5.00){
                    resultInPoint = 5.00;
                }
    
                data = await dataModel.create({
                    ...req.body,
                    bangla : banglaPoint,
                    english : englishPoint,
                    math : mathPoint,
                    religion : religionPoint,
                    ict : ictPoint,
                    generalScience : generalSciencePoint,
                    bangladeshAndGlobal : bangladeshAndGlobalPoint,
                    agriculturalStudies : agriculturalStudiesPoint,
                    examineePoint : resultInPoint,
                    examineeGrade : resultInGrade
                });
            }
        }else if(examineeExamRole === "SSC/DAKHIL"){
            if(examineeGroup === "Science"){
    
                if(optionalSub === "Biology"){
                    let scienceResult = (calculateMainSubResult + physicsPoint + chemistryPoint + higherMathPoint + bangladeshAndGlobalPoint);
                    if(banglaPoint === 0.00 || englishPoint === 0.00 || mathPoint === 0.00 || religionPoint === 0.00 || ictPoint === 0.00 || physicsPoint === 0.00 || chemistryPoint === 0.00 || higherMathPoint === 0.00){
    
                        resultInPoint = 0.00;
                        resultInGrade = "F";
    
                    }else{
                        if(biologyPoint >= 3.00){
                            const optionalSubject = (biologyPoint - 3.00);
                            const finalResult = ((scienceResult + optionalSubject) / 9);
                            resultInPoint = finalResult.toFixed(2);
                            resultInGrade = finalGreading(finalResult.toFixed(2));
                        }else{
                            const optionalSubject = (biologyPoint - biologyPoint);
                            const finalResult = ((scienceResult + optionalSubject) / 9);
                            resultInPoint = finalResult.toFixed(2);
                            resultInGrade = finalGreading(finalResult.toFixed(2));
                        }
                    }
                }else if(optionalSub === "Higher Math"){
                    let scienceResult = (calculateMainSubResult + physicsPoint + chemistryPoint + biologyPoint + bangladeshAndGlobalPoint);
                    if(banglaPoint === 0.00 || englishPoint === 0.00 || mathPoint === 0.00 || religionPoint === 0.00 || ictPoint === 0.00 || physicsPoint === 0.00 || chemistryPoint === 0.00 || biologyPoint === 0.00){
    
                        resultInPoint = 0.00;
                        resultInGrade = "F";
    
                    }else{
                        if(higherMathPoint >= 3.00){
                            const optionalSubject = (higherMathPoint - 3.00);
                            const finalResult = ((scienceResult + optionalSubject) / 9);
                            resultInPoint = finalResult.toFixed(2);
                            resultInGrade = finalGreading(finalResult.toFixed(2));
                        }else{
                            const optionalSubject = (higherMathPoint - higherMathPoint);
                            const finalResult = ((scienceResult + optionalSubject) / 9);
                            resultInPoint = finalResult.toFixed(2);
                            resultInGrade = finalGreading(finalResult.toFixed(2));
                        }
                    }
                }else if(optionalSub === "Agriculture"){
                    if(higherMathPoint){
                        let scienceResult = (calculateMainSubResult + physicsPoint + chemistryPoint + higherMathPoint + bangladeshAndGlobalPoint);
                        if(banglaPoint === 0.00 || englishPoint === 0.00 || mathPoint === 0.00 || religionPoint === 0.00 || ictPoint === 0.00 || physicsPoint === 0.00 || chemistryPoint === 0.00 || higherMathPoint === 0.00){
    
                            resultInPoint = 0.00;
                            resultInGrade = "F";
        
                        }else{
                            if(agriculturalStudiesPoint >= 3.00){
                                const optionalSubject = (agriculturalStudiesPoint - 3.00);
                                const finalResult = ((scienceResult + optionalSubject) / 9);
                                resultInPoint = finalResult.toFixed(2);
                                resultInGrade = finalGreading(finalResult.toFixed(2));
                            }else{
                                const optionalSubject = (agriculturalStudiesPoint - agriculturalStudiesPoint);
                                const finalResult = ((scienceResult + optionalSubject) / 9);
                                resultInPoint = finalResult.toFixed(2);
                                resultInGrade = finalGreading(finalResult.toFixed(2));
                            }
                        }
                    }else if(biologyPoint){
                        let scienceResult = (calculateMainSubResult + physicsPoint + chemistryPoint + biologyPoint + bangladeshAndGlobalPoint);
                        if(banglaPoint === 0.00 || englishPoint === 0.00 || mathPoint === 0.00 || religionPoint === 0.00 || ictPoint === 0.00 || physicsPoint === 0.00 || chemistryPoint === 0.00 || biologyPoint === 0.00){
    
                            resultInPoint = 0.00;
                            resultInGrade = "F";
        
                        }else{
                            if(agriculturalStudiesPoint >= 3.00){
                                const optionalSubject = (agriculturalStudiesPoint - 3.00);
                                const finalResult = ((scienceResult + optionalSubject) / 9);
                                resultInPoint = finalResult.toFixed(2);
                                resultInGrade = finalGreading(finalResult.toFixed(2));
                            }else{
                                const optionalSubject = (agriculturalStudiesPoint - agriculturalStudiesPoint);
                                const finalResult = ((scienceResult + optionalSubject) / 9);
                                resultInPoint = finalResult.toFixed(2);
                                resultInGrade = finalGreading(finalResult.toFixed(2));
                            }
                        }
                    }
                }
    
                if(resultInPoint > 5.00){
                    resultInPoint = 5.00;
                }
    
                data = await dataModel.create({
                    ...req.body,
                    bangla : banglaPoint,
                    english : englishPoint,
                    math : mathPoint,
                    religion : religionPoint,
                    ict : ictPoint,
                    physics : physicsPoint,
                    chemistry : chemistryPoint,
                    higherMath : higherMathPoint,
                    biology : biologyPoint,
                    bangladeshAndGlobal : bangladeshAndGlobalPoint,
                    agriculturalStudies : agriculturalStudiesPoint,
                    examineePoint : resultInPoint,
                    examineeGrade : resultInGrade
                });
    
            }else if(examineeGroup === "Commerce"){
    
                if(optionalSub === "Agriculture"){
                    let scienceResult = (calculateMainSubResult + generalSciencePoint + accountingPoint + financePoint + businessEntPoint);
                    if(agriculturalStudiesPoint >= 3.00){
                        const optionalSubject = (agriculturalStudiesPoint - 3.00);
                        const finalResult = ((scienceResult + optionalSubject) / 9);
                        resultInPoint = finalResult.toFixed(2);
                        resultInGrade = finalGreading(finalResult.toFixed(2));
                    }else{
                        const optionalSubject = (agriculturalStudiesPoint - agriculturalStudiesPoint);
                        const finalResult = ((scienceResult + optionalSubject) / 9);
                        resultInPoint = finalResult.toFixed(2);
                        resultInGrade = finalGreading(finalResult.toFixed(2));
                    }
                }
    
                if(resultInPoint > 5.00){
                    resultInPoint = 5.00;
                }
    
                data = await dataModel.create({
                    ...req.body,
                    bangla : banglaPoint,
                    english : englishPoint,
                    math : mathPoint,
                    religion : religionPoint,
                    ict : ictPoint,
                    generalScience : generalSciencePoint,
                    accounting : accountingPoint,
                    finance : financePoint,
                    businessEnt : businessEntPoint,
                    agriculturalStudies : agriculturalStudiesPoint,
                    examineePoint : resultInPoint,
                    examineeGrade : resultInGrade
                });
    
            }else if(examineeGroup === "Humanities"){
    
                if(optionalSub === "Economics"){
                    let scienceResult = (calculateMainSubResult + generalSciencePoint + geographyPoint + civicPoint + historyPoint);
                    if(economicsPoint >= 3.00){
                        const optionalSubject = (economicsPoint - 3.00);
                        const finalResult = ((scienceResult + optionalSubject) / 9);
                        resultInPoint = finalResult.toFixed(2);
                        resultInGrade = finalGreading(finalResult.toFixed(2));
                    }else{
                        const optionalSubject = (economicsPoint - economicsPoint);
                        const finalResult = ((scienceResult + optionalSubject) / 9);
                        resultInPoint = finalResult.toFixed(2);
                        resultInGrade = finalGreading(finalResult.toFixed(2));
                    }
                }else if(optionalSub === "Geography"){
                    let scienceResult = (calculateMainSubResult + generalSciencePoint + economicsPoint + civicPoint + historyPoint);
                    if(geographyPoint >= 3.00){
                        const optionalSubject = (geographyPoint - 3.00);
                        const finalResult = ((scienceResult + optionalSubject) / 9);
                        resultInPoint = finalResult.toFixed(2);
                        resultInGrade = finalGreading(finalResult.toFixed(2));
                    }else{
                        const optionalSubject = (geographyPoint - geographyPoint);
                        const finalResult = ((scienceResult + optionalSubject) / 9);
                        resultInPoint = finalResult.toFixed(2);
                        resultInGrade = finalGreading(finalResult.toFixed(2));
                    }
                }else if(optionalSub === "Agriculture"){
                    if(geographyPoint){
                        let scienceResult = (calculateMainSubResult + generalSciencePoint + geographyPoint + civicPoint + historyPoint);
                        if(agriculturalStudiesPoint >= 3.00){
                            const optionalSubject = (agriculturalStudiesPoint - 3.00);
                            const finalResult = ((scienceResult + optionalSubject) / 9);
                            resultInPoint = finalResult.toFixed(2);
                            resultInGrade = finalGreading(finalResult.toFixed(2));
                        }else{
                            const optionalSubject = (agriculturalStudiesPoint - agriculturalStudiesPoint);
                            const finalResult = ((scienceResult + optionalSubject) / 9);
                            resultInPoint = finalResult.toFixed(2);
                            resultInGrade = finalGreading(finalResult.toFixed(2));
                        }
                    }else if(economicsPoint){
                        let scienceResult = (calculateMainSubResult + generalSciencePoint + economicsPoint + civicPoint + historyPoint);
                        if(agriculturalStudiesPoint >= 3.00){
                            const optionalSubject = (agriculturalStudiesPoint - 3.00);
                            const finalResult = ((scienceResult + optionalSubject) / 9);
                            resultInPoint = finalResult.toFixed(2);
                            resultInGrade = finalGreading(finalResult.toFixed(2));
                        }else{
                            const optionalSubject = (agriculturalStudiesPoint - agriculturalStudiesPoint);
                            const finalResult = ((scienceResult + optionalSubject) / 9);
                            resultInPoint = finalResult.toFixed(2);
                            resultInGrade = finalGreading(finalResult.toFixed(2));
                        }
                    }
                }
    
                if(resultInPoint > 5.00){
                    resultInPoint = 5.00;
                }
    
                data = await dataModel.create({
                    ...req.body,
                    bangla : banglaPoint,
                    english : englishPoint,
                    math : mathPoint,
                    religion : religionPoint,
                    ict : ictPoint,
                    generalScience : generalSciencePoint,
                    accounting : accountingPoint,
                    finance : financePoint,
                    businessEnt : businessEntPoint,
                    agriculturalStudies : agriculturalStudiesPoint,
                    examineePoint : resultInPoint,
                    examineeGrade : resultInGrade
                });
    
            }
        }else if(examineeExamRole === "HSC/Alim"){
            if(examineeGroup === "Science"){
    
                if(optionalSub === "Biology"){
                    let scienceResult = (calculateMainSubResult + physicsPoint + chemistryPoint + higherMathPoint + bangladeshAndGlobalPoint);
                    if(banglaPoint === 0.00 || englishPoint === 0.00 || mathPoint === 0.00 || religionPoint === 0.00 || ictPoint === 0.00 || physicsPoint === 0.00 || chemistryPoint === 0.00 || higherMathPoint === 0.00){
    
                        resultInPoint = 0.00;
                        resultInGrade = "F";
    
                    }else{
                        if(biologyPoint >= 3.00){
                            const optionalSubject = (biologyPoint - 3.00);
                            const finalResult = ((scienceResult + optionalSubject) / 9);
                            resultInPoint = finalResult.toFixed(2);
                            resultInGrade = finalGreading(finalResult.toFixed(2));
                        }else{
                            const optionalSubject = (biologyPoint - biologyPoint);
                            const finalResult = ((scienceResult + optionalSubject) / 9);
                            resultInPoint = finalResult.toFixed(2);
                            resultInGrade = finalGreading(finalResult.toFixed(2));
                        }
                    }
                }else if(optionalSub === "Higher Math"){
                    let scienceResult = (calculateMainSubResult + physicsPoint + chemistryPoint + biologyPoint + bangladeshAndGlobalPoint);
                    if(banglaPoint === 0.00 || englishPoint === 0.00 || mathPoint === 0.00 || religionPoint === 0.00 || ictPoint === 0.00 || physicsPoint === 0.00 || chemistryPoint === 0.00 || biologyPoint === 0.00){
    
                        resultInPoint = 0.00;
                        resultInGrade = "F";
    
                    }else{
                        if(higherMathPoint >= 3.00){
                            const optionalSubject = (higherMathPoint - 3.00);
                            const finalResult = ((scienceResult + optionalSubject) / 9);
                            resultInPoint = finalResult.toFixed(2);
                            resultInGrade = finalGreading(finalResult.toFixed(2));
                        }else{
                            const optionalSubject = (higherMathPoint - higherMathPoint);
                            const finalResult = ((scienceResult + optionalSubject) / 9);
                            resultInPoint = finalResult.toFixed(2);
                            resultInGrade = finalGreading(finalResult.toFixed(2));
                        }
                    }
                }else if(optionalSub === "Agriculture"){
                    if(higherMathPoint){
                        let scienceResult = (calculateMainSubResult + physicsPoint + chemistryPoint + higherMathPoint + bangladeshAndGlobalPoint);
                        if(banglaPoint === 0.00 || englishPoint === 0.00 || mathPoint === 0.00 || religionPoint === 0.00 || ictPoint === 0.00 || physicsPoint === 0.00 || chemistryPoint === 0.00 || higherMathPoint === 0.00){
    
                            resultInPoint = 0.00;
                            resultInGrade = "F";
        
                        }else{
                            if(agriculturalStudiesPoint >= 3.00){
                                const optionalSubject = (agriculturalStudiesPoint - 3.00);
                                const finalResult = ((scienceResult + optionalSubject) / 9);
                                resultInPoint = finalResult.toFixed(2);
                                resultInGrade = finalGreading(finalResult.toFixed(2));
                            }else{
                                const optionalSubject = (agriculturalStudiesPoint - agriculturalStudiesPoint);
                                const finalResult = ((scienceResult + optionalSubject) / 9);
                                resultInPoint = finalResult.toFixed(2);
                                resultInGrade = finalGreading(finalResult.toFixed(2));
                            }
                        }
                    }else if(biologyPoint){
                        let scienceResult = (calculateMainSubResult + physicsPoint + chemistryPoint + biologyPoint + bangladeshAndGlobalPoint);
                        if(banglaPoint === 0.00 || englishPoint === 0.00 || mathPoint === 0.00 || religionPoint === 0.00 || ictPoint === 0.00 || physicsPoint === 0.00 || chemistryPoint === 0.00 || biologyPoint === 0.00){
    
                            resultInPoint = 0.00;
                            resultInGrade = "F";
        
                        }else{
                            if(agriculturalStudiesPoint >= 3.00){
                                const optionalSubject = (agriculturalStudiesPoint - 3.00);
                                const finalResult = ((scienceResult + optionalSubject) / 9);
                                resultInPoint = finalResult.toFixed(2);
                                resultInGrade = finalGreading(finalResult.toFixed(2));
                            }else{
                                const optionalSubject = (agriculturalStudiesPoint - agriculturalStudiesPoint);
                                const finalResult = ((scienceResult + optionalSubject) / 9);
                                resultInPoint = finalResult.toFixed(2);
                                resultInGrade = finalGreading(finalResult.toFixed(2));
                            }
                        }
                    }
                }
    
                if(resultInPoint > 5.00){
                    resultInPoint = 5.00;
                }
    
                data = await dataModel.create({
                    ...req.body,
                    bangla : banglaPoint,
                    english : englishPoint,
                    math : mathPoint,
                    religion : religionPoint,
                    ict : ictPoint,
                    physics : physicsPoint,
                    chemistry : chemistryPoint,
                    higherMath : higherMathPoint,
                    biology : biologyPoint,
                    bangladeshAndGlobal : bangladeshAndGlobalPoint,
                    agriculturalStudies : agriculturalStudiesPoint,
                    examineePoint : resultInPoint,
                    examineeGrade : resultInGrade
                });
    
            }
        }


        res.status(200).json({
            message : "Student data posted successfull!",
            data : data
        });

    }catch(err){
        console.log(err);
    }

}



export const findStudentResultController = async (req, res, next) => {
    try{

        const { examineeExamRole, examineeExamYear, examineeBoard, examineeRoll, examineeRegNo } = req.body;

        const getResult = await dataModel.findOne({examineeExamRole : examineeExamRole, examineeExamYear : examineeExamYear, examineeBoard : examineeBoard, examineeRoll : examineeRoll, examineeRegNo : examineeRegNo});

        res.status(200).json({
            data : getResult
        });

    }catch(err){
        console.log(err);
    }
}

