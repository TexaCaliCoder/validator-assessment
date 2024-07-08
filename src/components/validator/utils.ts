
// This is a Luhn algorithim used for validating credit card numbers. To learn more about it, please visit https://en.wikipedia.org/wiki/Luhn_algorithm
export const isValidLuhn = (number:string):boolean => {
	  // here we convert the number to an array of numbers for enumeration
	  const digits: number[] = number.split('').map((num)=> parseInt(num, 10))

	  // set variables outside the scope of the loop to persist 
	  let sum = 0;
	  let shouldDoubleDigit = false;

	  // we start are loop at the end "check digit" and work backwards.
	  for (let i = digits.length - 1; i>=0; i --) {
		let digit = digits[i];

		//  if we should double the digit we do so. 
		if(shouldDoubleDigit) {
		  digit *= 2
		  // based on Luhn's alg, if the digit is greater than 9 we need to subtract 9 
		  if(digit >  9){
			digit -= 9;
		  }
		}
		// add the our current working digit or difference to our sum. 
		sum += digit;
		// if we doubled the last digit we don't want to double the next. 
		shouldDoubleDigit = !shouldDoubleDigit
	  }
	  // based on Luhn the sum should be divisible by 10 to be considered valid. 
	   sum % 10 === 0; 
	}