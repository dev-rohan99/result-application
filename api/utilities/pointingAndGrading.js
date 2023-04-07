

export const pointing = (subjectMark) => {

    if(Number(subjectMark) <= 100 && Number(subjectMark) >= 80){
        return 5.00;
    }else if(Number(subjectMark) <= 79 && Number(subjectMark) >= 70){
        return 4.00;
    }else if(Number(subjectMark) <= 69 && Number(subjectMark) >= 60){
        return 3.50;
    }else if(Number(subjectMark) <= 59 && Number(subjectMark) >= 50){
        return 3.00;
    }else if(Number(subjectMark) <= 49 && Number(subjectMark) >= 40){
        return 2.00;
    }else if(Number(subjectMark) <= 39 && Number(subjectMark) >= 33){
        return 1.00;
    }else if(Number(subjectMark) <= 32 && Number(subjectMark) >= 0){
        return 0.00;
    }

}


export const finalGreading = (totalPoint) => {

    if(totalPoint >= 5.00){
        return "A+";
    }else if(totalPoint <= 4.99 && totalPoint >= 4.00){
        return "A";
    }else if(totalPoint <= 3.99 && totalPoint >= 3.50){
        return "A-";
    }else if(totalPoint <= 3.49 && totalPoint >= 3.00){
        return "B";
    }else if(totalPoint <= 2.99 && totalPoint >= 2.00){
        return "C";
    }else if(totalPoint <= 1.99 && totalPoint >= 1.00){
        return "D";
    }else if(totalPoint <= 0.99 && totalPoint >= 0.00){
        return "F";
    }

}

