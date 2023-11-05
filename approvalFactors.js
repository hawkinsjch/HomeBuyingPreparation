const CREDIT_MINIMUM = 640;

const GOOD = 0
const BAD = 1
const MEDIUM = 2


function IsCreditValid(creditRating) {


    creditArray = [];

    if(creditRating >= CREDIT_MINIMUM){
        return GOOD;
    }
    else{
        return BAD;
    }
  
  }
  

function LTV(downPayment , houseAppraisalValue) {

    loanValue  = (1 - (downPayment/houseAppraisalValue));


    if(loanValue <= .80) {
        return GOOD;
    }
    else if(loanValue <= .95){
        return MEDIUM;
    }
    else {
        return BAD;
    }


  }

function DTI(grossIncome, carPayment , creditCardPayment , mortgage, studentLoans) {

    totalDebtToIncome = ((carPayment + creditCardPayment + mortgage + studentLoans)/grossIncome);

    totalMortgageDebt = mortgage / grossIncome;

    if(totalMortgageDebt >= .28) {
        return BAD;
    }
    else if(totalDebtToIncome <= .36){
        return GOOD;
    }
    else if (totalDebtToIncome <= .43){
        return MEDIUM;
    }
    else{
        return BAD;
    }

}


export default { IsCreditValid, LTV , DTI };  
  