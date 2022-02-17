//getting id for all different Type of field including(totalIncome,rentCost,foodCost,cloths) 
    function getInputType(inputType){
    const inputField = document.getElementById(inputType).value;
    const input = parseFloat(inputField); 
    return input;
}

    //Getting Error message and stored a variable 

    const totalIncomeErr = document.getElementById('totalIncomeErr');
    const foodErr = document.getElementById('foodErr');
    const rentErr = document.getElementById('rentErr');
    const clothErr = document.getElementById('clothErr');
    const expenseErr = document.getElementById('expenseErr');


    //function for calculating 
    function calculate(){
    const totalIncome = getInputType('totalIncome');
    const foodCost = getInputType('foodCost');
    const rentCost = getInputType('rentCost');
    const clothsCost = getInputType('clothesCost');

//Total Cost handling
    const totalCost = foodCost + rentCost + clothsCost;
    // Total balance after the Total Cost 
    const balance = totalIncome - totalCost;


    //Validation Check
    if(totalIncome < 0 || isNaN(totalIncome)){
       totalIncomeErr.style.display = 'block';
       foodErr.style.display = 'none';
       rentErr.style.display = 'none';
       clothErr.style.display = 'none';
    }else if(totalIncome < totalCost){
        expenseErr.style.display = 'block';
        totalIncomeErr.style.display = 'none';
        foodErr.style.display = 'none';
        rentErr.style.display = 'none';
        clothErr.style.display = 'none';
    }else if(foodCost < 0 || isNaN(foodCost)){
        foodErr.style.display = 'block';
        totalIncomeErr.style.display = 'none';
        rentErr.style.display = 'none';
       clothErr.style.display = 'none';
       expenseErr.style.display = 'none';
    }else if(rentCost < 0 || isNaN(rentCost)){
        rentErr.style.display = 'block';
        foodErr.style.display = 'none';
        totalIncomeErr.style.display = 'none';
        clothErr.style.display = 'none';
        expenseErr.style.display = 'none';
    }else if(clothsCost < 0 || isNaN(clothsCost)){
        clothErr.style.display = 'block';
        rentErr.style.display = 'none';
        foodErr.style.display = 'none';
        totalIncomeErr.style.display = 'none';
        expenseErr.style.display = 'none';
    }
    else{
        document.getElementById('total-expense').innerText = totalCost;
        document.getElementById('balance').innerText = balance;
        clothErr.style.display = 'none';
        rentErr.style.display = 'none';
        foodErr.style.display = 'none';
        totalIncomeErr.style.display = 'none';
        expenseErr.style.display = 'none';
    }
}

//Save Error or Error Handling
const saveErr = document.getElementById('saveErr');
const saveAmountErr = document.getElementById('saveAmountErr');
//Saving Amount
function savingsAmount(){
    const balanceField = document.getElementById('balance').innerText;
    const balance = parseFloat(balanceField);
    const totalIncome = getInputType('totalIncome');
    const savePercent =  getInputType('savings');

    const savingsAmount = totalIncome / 100 * savePercent;
    const remainingBalance = balance - savingsAmount;


    //Percentage Save

    if(savePercent < 0 || isNaN(savePercent)){
        saveAmountErr.style.display = 'block';
        saveErr.style.display = 'none';
    }else if(balance < savingsAmount || balance <= 0){
        saveErr.style.display = 'block';
        saveAmountErr.style.display = 'none';
    }
    else{
        document.getElementById('savings-amount').innerText = savingsAmount;
        document.getElementById('remaining-balance').innerText = remainingBalance;
        saveAmountErr.style.display = 'none';
        saveErr.style.display = 'none';
    }
}

//Calculate function 
document.getElementById('calculate-button').addEventListener('click', function(){
    calculate();
    //console.log(calculate());
})

//Save Button
document.getElementById('save').addEventListener('click', function(){
    savingsAmount();
})