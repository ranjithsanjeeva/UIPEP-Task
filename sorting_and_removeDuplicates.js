


function get_sorted_without_duplicates(input) {
     

    let array=[];
    for(let i = 0; i < input.length; i++) {
        array.push(input[i]);
    }



    let index = 0; 
    let newArray=[]
        for (let i = 0; i < array.length; i++) 
        { 
            let j; 
            for (j = 0; j < i; j++)  
            { 
                if (array[i] == array[j]) 
                { 
                    break; 
                } 
            } 

            if (j == i)  
            { 
                newArray[index++] = array[i]; 
            } 
        } 


 for(let i=0;i<array.length-1;i++)
    {
        for(let j=0;j<newArray.length-1-i;j++){
            if(newArray[j]>newArray[j+1])
            {
               let temp=newArray[j];
               newArray[j]=newArray[j+1];
               newArray[j+1]= temp;

            }
        
        }
    }
    
    let sortString=''
   for(let i=0;i<newArray.length;i++)
   {
     sortString=sortString+newArray[i]
   }
   console.log(sortString);
    return sortString;
    
}

console.assert("aelp" ,get_sorted_without_duplicates("apple"));
console.assert("eorz" ,get_sorted_without_duplicates("zeroo"));
console.assert("," ,get_sorted_without_duplicates(","));
console.assert("abcd",get_sorted_without_duplicates("abcdabcd"));

