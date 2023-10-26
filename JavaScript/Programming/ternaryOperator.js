/* to check if a number is positive, negative or zero. The function should return positive, negative or zero. */

function checkSign(num) {
    return (num === 0) ? "Zero"
      : (num > 0) ? "Positive"
      : "Negative";
  }
  
  console.log(checkSign(-1));