//сумма с которой может даваться скидка
const STARTDISCOUNTSUM = 100;
// макс дистанция бесплатной доставки
const MAXFREEDISTANCE = 30;
// переменная наличка
var isCash;
//скидка после введенной суммі
var discountPercentage = 0;
// переменная дистанция
var distance = 0;

var shipmentSum = 0;
var discount;

var sum = +prompt ("Enter your sum"); /* +  integer convertor*/
var isDiscount = sum > STARTDISCOUNTSUM;


if (isDiscount) {
	discountPercentage = randomDiscount();
	alert('You have a discount of ' + discountPercentage + ' %');
	discount = (sum / 100) * discountPercentage; 
	sum = sum - discount

} else {

	alert('no discount');
}

isCash = confirm ("Do you pay with Cash?");

if (isCash) {
	distance = +prompt ("How many km far do you live?");

	if (distance > MAXFREEDISTANCE){
		shipmentSum = (distance - MAXFREEDISTANCE) * 5;

	} else {

		alert ("You have free shiping");
	}

} else {
 alert ('Take your bags. Bye bye');

}

alert ("Your sum is " + (sum + shipmentSum));
//возвращиет чило от 0 до 15
function randomDiscount() {
  var rand = 0 + Math.random() * (15 - 0) // вібирает число ремдомно 
  rand = Math.round(rand);
  return rand;
}