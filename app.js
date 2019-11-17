// loan form
const form = document.querySelector('#form');

//submit event and calculating
form.addEventListener('submit', function(e){

	document.getElementById('frame2').style.display = 'none';

	document.getElementById('loader').style.display = 'block';

  	setTimeout(calculateResults, 2600);

  	e.preventDefault();
});

function calculateResults(){
//Input vars
const amount = document.querySelector('#loan-amount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years-to-repay');
//Result vars
const monthlyPayment = document.querySelector('#monthly-payment');
const totalPayment = document.querySelector('#total-payment');
const totalInterest = document.querySelector('#total-interest');

//Calculating formulas
const principal = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value) / 100 / 12;
const calculatedPayments = parseFloat(years.value) * 12;

// Compute monthly payment
const x = Math.pow(1 + calculatedInterest, calculatedPayments);
const monthly = (principal*x*calculatedInterest)/(x-1);

//The isFinite() function determines whether a number is a finite, legal number.
if(isFinite(monthly)) {
  monthlyPayment.textContent = monthly.toFixed(2);
  totalPayment.textContent = (monthly * calculatedPayments).toFixed(2);
  totalInterest.textContent = ((monthly * calculatedPayments)-principal).toFixed(2);

// Show results
document.getElementById('frame2').style.display = 'block';

// Adjusting the border radius
document.getElementById('frame2').style.borderTopLeftRadius = '0px';
document.getElementById('frame2').style.borderTopRightRadius = '0px';
document.getElementById('frame1').style.borderBottomRightRadius = '0px';
document.getElementById('frame1').style.borderBottomLeftRadius = '0px';


// Hide loader
document.getElementById('loader').style.display = 'none';

} else {
    showError();
 }

};

let error = document.getElementById('error');

function showError(){
	console.log('error');
	//hide result and loader
	document.getElementById('loader').style.display = 'none';
	document.getElementById('frame2').style.display = 'none';

	//show message
	error.style.display = 'block';

	//clear error
	setTimeout(clearError, 2600);

}

function clearError(){
	error.remove();
}