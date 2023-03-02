let nums = [4, 2, 9, 1, 8];

function divideArray(nums) {
    let evenNums = [];
    let oddNums = [];
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0) {
        evenNums.push(nums[i]);
      } else {
        oddNums.push(nums[i]);
      }
    }
  
    if (evenNums.length === 0) {
      console.log("Even numbers:\nNone");
    } else {
      evenNums.sort(function(a, b) {
        return a - b;
      });
      console.log("Even numbers:");
      for (let i = 0; i < evenNums.length; i++) {
        console.log(evenNums[i]);
      }
    }
  
    if (oddNums.length === 0) {
      console.log("Odd numbers:\nNone");
    } else {
      oddNums.sort(function(a, b) {
        return a - b;
      });
      console.log("Odd numbers:");
      for (let i = 0; i < oddNums.length; i++) {
        console.log(oddNums[i]);
      }
    }
  }

divideArray(nums);
