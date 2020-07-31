function get_sorted_diff_string(first, second) {
    first=sortFun(first);
    second=sortFun(second);

    let  input1= removeDup(first);
    let input2= removeDup(second);
    //console.log(first);
    // console.log(second);

    // console.log(input1);
    // console.log(input2);
    let s=''
    for(let i=0;i<input1.length;i++)
    {
        let flag=true;
        for(let j=0;j<input2.length;j++){
            if(input1[i]!==input2[j])
            {
                flag;
            }
            else {
                flag=false;
                break;
            }

        }
        if(flag){
            s=s.concat(input1[i]);
        }
    }
    console.log(s)
    
}
function sortFun(input){
    let array=Array.from(input)
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
    return array
}


function removeDup(input)
{
    let s=[];
    for(let i=0;i<input.length;i++){
        if(input[i]!==input[i+1]){
            s.push(input[i])
        }
    }
    // console.log(s);
    return s;
}

 get_sorted_diff_string("apple", "apple")
 get_sorted_diff_string("apple", "")
 get_sorted_diff_string("dog", "pig")
 get_sorted_diff_string("pineapple", "apple")

//  console.assert("" , get_sorted_diff_string("apple", "apple"))
//  console.assert("aelp", get_sorted_diff_string("apple", ""))
//  console.assert("do", get_sorted_diff_string("dog", "pig"))
//  console.assert("in", get_sorted_diff_string("pineapple", "apple"))
