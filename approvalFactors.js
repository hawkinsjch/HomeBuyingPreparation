const CREDIT_MINIMUM = 640;


function IsCreditValid(creditRating) {

    return creditRating >= CREDIT_MINIMUM
  
  }
  

function ltv(downPayment , houseAppraisalValue) {

    loanValue  = (1 - (downpayment/houseAppraisalValue)) * 100;

    return loanValue <= 80, loanValue <= 95;

  }
  


export default ltv;
export default IsCreditValid;  
  