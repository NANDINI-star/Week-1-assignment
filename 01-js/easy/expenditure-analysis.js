/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

// function calculateTotalSpentByCategory(transactions) {
//   return [];
// }

// module.exports = calculateTotalSpentByCategory;

function calculateTotalSpentByCategory(transactions) {
  let ans = [];
  for(var i = 0;i <transactions.length; i++){
    if(ans[transactions[i].category] == undefined) {
      ans[transactions[i].category] = 0;
    }
    ans[transactions[i].category] += transactions[i].price;
    
  }
  return ans;
}
var transactionlist = [
  { "name": "a", "category": "cat1", "price": 5000, "timestamp": (new Date()).toString() },
  { "name": "b", "category": "cat2", "price": 5000, "timestamp": (new Date()).toString() },
  { "name": "a", "category": "cat1", "price": 5000, "timestamp": (new Date()).toString() }
]
console.log(calculateTotalSpentByCategory(transactionlist));
