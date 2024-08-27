// Type node script.js in the codespaces console to run this file. Make sure to save before running it. CTRL + ` will open the console if you don't see it.
console.log("hi there")

// function isEligibleForFreeShipping(purchaseAmount, isMember) {
//     let freeShipping
//     if (isMember) {
//         freeShipping = true;
//       } else if (purchaseAmount >= 50) {
//           freeShipping = true;
//       } else {
//           freeShipping = false;
//       }
//       if (freeShipping) {
//         console.log("You are eligible for free shipping.");
//       } else {
//         console.log("You are not eligible for free shipping.");
//       }
//   }

  //Compressed
  function isEligibleForFreeShipping(purchaseAmount, isMember) {
    let freeShipping = isMember || purchaseAmount >= 50;
    
    if (freeShipping) {
        console.log("You are eligible for free shipping.");
    } else {
        console.log("You are not eligible for free shipping.");
    }
}

  // Test cases
isEligibleForFreeShipping(30, true);  // You are eligible for free shipping.
isEligibleForFreeShipping(60, false); // You are eligible for free shipping.
isEligibleForFreeShipping(40, false); // You are not eligible for free shipping.
isEligibleForFreeShipping(10, true);  // You are eligible for free shipping.