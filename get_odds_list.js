function get_odds_list(count) {
  
    /*
  This method returns a list of the first 'count' odd numbers in descending
  order. e.g count = 3 should return [5,3,1]
  */
 let array=[];
 let j=0;
 for(let i=1;i<(2*count);i+=2)
 {
    array[count-j-1]=i;
    j++;
 }
console.log(array);
}

console.assert([1],get_odds_list(1))
console.assert([], get_odds_list(0))
console.assert([5,3,1],get_odds_list(3))
console.assert([9,7,5,3,1], get_odds_list(5))

