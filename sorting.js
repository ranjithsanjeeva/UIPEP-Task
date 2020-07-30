function get_sorted_without_duplicates(input) {
    /*
    returns a string in which characters are sorted and duplicates removed
    e.g apple returns aelp, engine returns egin
   */
    // write your code here
    let array=Array.from(input)
    for(let i=0;i<input.length-1;i++)
    {
        for(let j=0;j<input.length-1-i;j++){
            if(input[j]>input[j+1])
            {
               let temp=input[j];
               
               //first[j]=first[j+1];
              // first[first[j+1]]= str;
              input=changeCharAt(input,j,input[j+1]);
              input=changeCharAt(input,j+1,temp);

            }
        
        }
    }

    return input;
}
function changeCharAt(str, pos, char) {
    return (str.substring(0,pos)+char+str.substring(pos+1))
}
console.log(get_sorted_without_duplicates("fapple"));
// console.assert("aelp" ,get_sorted_without_duplicates("apple"))
// console.assert("eorz",get_sorted_without_duplicates("zeroo"))
// console.assert("" ,get_sorted_without_duplicates(""))
// console.assert("abcd",get_sorted_without_duplicates("abcdabcd")