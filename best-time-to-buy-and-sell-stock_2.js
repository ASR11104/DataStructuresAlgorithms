/*
Best Time to Buy and Sell Stock II

You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.
Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
 

Constraints:

1 <= prices.length <= 3 * 104
0 <= prices[i] <= 104
*/





/*
Approach:
1. Initialise a variable(like maxProfit or anything else) which will store the final profit as 0.
2. Under a single loop, check for the price which is greater than its previous price. That would be the time when we should sell the stock to earn maximum profit at that instance.
3. Add up the profit to the initial variable maxProfit.
4. Continue the loop untill it reaches end. Eventually on its way it will keep on checking the profit condition and add up it to your maxProfit.
5. Finally return maxProfit.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let left = 0;
    let right = 1
    while(left < prices.length){
        if(prices[right] > prices[left]){
            maxProfit += prices[right]-prices[left]
        }
        left++
        right=left+1
    }
    return maxProfit
};

console.log(maxProfit([7,1,5,6,3,6,4]));