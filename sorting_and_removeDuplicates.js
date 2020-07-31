


function get_sorted_without_duplicates(input) {
 
    


  //don't use array
    // let array=[];
    // for(let i = 0; i < input.length; i++) {
    //     array.push(input[i]);
    // }



    // let index = 0; 
    // let newArray=[]
    //     // for (let i = 0; i < array.length; i++) 
    //     // { 
    //         let j;
    //         for ( j = 0; j < array.length; j++)  
    //         { 
    //             if (array[index] == array[j]) //array of i change it to array  of index
    //             { 
                    
    //             } 
    //         } 

    //         if (j == index)  
    //         { 
    //             newArray[index++] = array[j]; 
    //         } 
    //     // } 

 let array = Array.from(input);

 
//  for(let i=0;i<input.length-1;i++)
//     {
//         for(let j=0;j<input.length-1-i;j++){
//             if(input[j]>input[j+1])
//             {
//                let temp=array[j];
//                array[j]=array[j+1];
//                array[j+1]= temp;
//             }
        
//         }
//     }
   
    for(let i=0;i<array.length-1;i++)
    {
        for(let j=0;j<array.length-1-i;j++){
            if(array[j]>array[j+1])
            {
               let temp=array[j];
               array[j]=array[j+1];
               array[j+1]= temp;

            }
        
        }
    }

    //console.log(array);
     let s='';
    for(let i=0;i<array.length;i++){
        if(array[i]!==array[i+1]){
            s=s.concat(array[i])
        }
    }
    console.log(s);
//     let sortString=''
//    for(let i=0;i<newArray.length;i++)
//    {
//      sortString=sortString+newArray[i]
//    }
//    console.log(sortString);
//     return sortString;
    
// }
//     for(let i=0;i<input.length-1;i++)
//     {
//         for(let j=0;j<input.length-1-i;j++){
//             if(input[j]>input[j+1])
//             {
//             let temp=input[j];
            
//             //first[j]=first[j+1];
//             // first[first[j+1]]= str;
//             input=changeCharAt(input,j,input[j+1]);
//             input=changeCharAt(input,j+1,temp);

//             }
        
//         }
//     }

    

// console.log(input)

// }

// function changeCharAt(str, pos, char) {
// return (str.substring(0,pos)+char+str.substring(pos+1))
}

console.assert("aelp" ,get_sorted_without_duplicates("apple"));
console.assert("eorz" ,get_sorted_without_duplicates("zeroo"));
//console.log("", get_sorted_without_duplicates(""));
console.assert("abcd",get_sorted_without_duplicates("abcdabcd"));

