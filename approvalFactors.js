const CREDIT_MINIMUM = 640;


function IsCreditValid(creditRating) {

    return creditRating >= CREDIT_MINIMUM
  
  }
  

function LTV(downPayment , houseAppraisalValue) {

    loanValue  = (1 - (downPayment/houseAppraisalValue));

    return loanValue <= .80, loanValue <= .95;

  }

function DTI(grossIncome, carPayment , creditCardPayment , mortgage) {

    totalDebtToIncome = (1-((carPayment + creditCardPayment + mortgage)/grossIncome));

}


export default { IsCreditValid, LTV , DTI };  
  