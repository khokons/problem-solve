//(1) তোমাকে এমন একটা ফাংশন বানাতে হবে যেটা একটি সংখ্যা ইনপুট নিবে। function টির নাম হবেঃ isInteger()। 
// আউটপুট হিসেবে একটি boolean রিটার্ন করবেঃ
// সংখ্যাটি integer হলে true রিটার্ন করবে। 
// অন্যথায় false রিটার্ন করবে।


/* function isInteger(number){
    if(typeof number !== 'number'){
console.log('please enter a number provide');
    } 
    else{
        if(number%1==0){
           return true;
        }
        else{
            return false;
        }
    }

  
}


var number = isInteger('12');
console.log(number);
 */


// (2) ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে 
// একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে 
// আর যদি না হয় তাহলে false রিটার্ন করতে হবে 

/*  function isJavaScriptFile(fileName){
    if(typeof fileName !== "string"){
        console.log('please give me string type value');''
    }

    else{
        if(fileName.toLowerCase().endsWith('.js') == true){
            return true;
        }

        else{
            return false;
        }    
// ek line a likha jabe ukto codti 
// return fileName.toLowerCase().endsWith(".js");
     
    }

}


let file = isJavaScriptFile("script.js");
console.log(file); */



// Same Example------------------------------------


/* function isJavaScriptFile(filename){
    if(typeof filename !== "string"){
        return "please provide me a valid file name (string)."
    }else{
        // hello.world.bd.js
        const arr = filename.split(".");
        const lastElement = arr.pop()

        return lastElement.toLowerCase() === "js";
        // if(lastElement.toLowerCase() === "js"){
        //     return true;
        // }else{
        //     return false;
        // }
    }

}

console.log(isJavaScriptFile(324)) */

/* (3)
তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")
এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, 
তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে
Sample Input & Output
Input: 5
Output: 7.5
*/


/* function mindGame(positiveNumber){
    if(typeof positiveNumber !== "number"){
        console.log("pls Enter a Number")
    }
    else if(positiveNumber<=0){
        console.log("pls give me a positive number")
    }
    else{
        const result = (((positiveNumber*3)+10)/2)-5
        return result;
    }

}
const number = mindGame(5);
console.log(number); */



/* (4)
তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  
এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, 
তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। 
মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।
Input : 6
Output: -1
Input: -15
Output: -22
Input: 15
Output: 30
*/


/* function isLGSeven(x){
    if(typeof x !== "number"){
        console.log("pls give me number");
    }
else{
   const differ = x-7;
   if(differ<7){
    return differ;
   }
   else{
    return x*2;
   }
}

}

const inputNumber = isLGSeven(15);
console.log(inputNumber) */


// (5) তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে।
// array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, 
// আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় 
// সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 
// এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
// Sample Input & Output:-
// Input: [ 1,2,5 ]
// Output: 0
// Input: [ 2, -5, -7, -13 ]
// Output: 3

/* function findingBadData(arry){
    if(!Array.isArray(arry)){
        return "Please give me a arry";
    }

    else{
        let badData = 0;
        for(let i =0; i<arry.length; i++)
        if(typeof arry[i] !== "number"){
            return "Please give me a arry"; 
        }
        else{
            if(arry[i]<0){
                badData++;
            }
        }
       return badData;

    //    jodi for of loop diya kortam

    //    for(let item of arr){
    //     if(typeof item !== "number"){
    //         return "please provide me an array of number"
    //     }else{
    //         if(item < 0){
    //             badData++; // badData = badData + 1;
    //         }
    //     }
    // }
    // return badData

    }

}

const x = [12,234,45,-658,-3,45];
console.log(findingBadData(x)); */



/*
Problem 6: Convert your gems into diamond
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number (তোমাদের ৩ বন্ধুর gems এর সংখ্যা)
নিবে। 
১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। 
total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে 
যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
Sample Input & Output:-
Input: 1, 1, 1
Output: 96
Input: 20, 200, 50
Output: 6970
Input: 100, 5, 1
Output: 303
*/

/*  function gemsToDiamond(x,y,z){
if(typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number'){
    return "pls provide all vvalid number";
}

else if(x<0 || y<0 || z<0){
    return "pls provide all vvalid number";  
}

else{
    const frnd1 = 21;
    const frnd2 = 32;
    const frnd3 = 43;

    const totalDiamond =((frnd1*x) + (frnd2*y) + (frnd3*z));
    if(totalDiamond>2000){
       const total = totalDiamond-2000;
       return total;
    }

    else{
        return totalDiamond;
    }
}

}

const x = 1;
const y = 1;
const z = 1;

const number = gemsToDiamond(x,y,z);
console.log(number); */


//(8) function name printDetails(). you will be provided an object. you have to use the properties 
// of the object and make a meaning full sentence. if there are any property missing you have to print there (nai);

/*
const obj = {
    name: "mehedy",
    age:26,
    email:"abc@gmail.com"
}
Amar nam mehedy, amar boyos 26, amar email abc@gmail.com, amar bou nai. 
*/

/* function printDetails(person){
    if(typeof person !== "object"){
        return "please give me object";
    }

    else{
        const name = person.name || "nai";
        const age = person.age || "nai";
        const email = person.email || "nai";
        const bou = person.bou || "nai";

        const fullSentence ="Amar nam "+name+". amar boyos "+age+". amar email "+email+". amar bou "+bou;
        return fullSentence;
    }

}



const obj = {
    name: "mehedy",
    age:26,
    email:"abc@gmail.com"
}

console.log(printDetails(obj)); */

/*
Problem 1:
আপনার কাছে একটি জাভাস্ক্রিপ্ট ফাংশন রয়েছে যার নাম হলো isValidPhotoName(photoName, imageExtensions)।
এই ফাংশনটি দুটি প্যারামিটার গ্রহণ করে: photoName, যা একটি ছবির নাম প্রদর্শন করে, এবং imageExtensions Array, 
যা .jpg, .png, ইত্যাদি ছবির এক্সটেনশন গুলি ধারণ করে।
আপনার কাজ হলো isValidPhotoName ফাংশনটি সম্পূর্ণ করা যাতে এই ফাংশনের মাধ্যমে পরীক্ষা করা যায় 
আপনি দেওয়া প্যারামিটার photoName সঠিক ছবির নাম কিনা তা। এই ফাংশনের কাজ হলো true রিটার্ন করা 
যদি photoName একটি বৈধ ছবির নামের শেষে বিদ্যমান ছবির এক্সটেনশন গুলির মধ্যে যেকোনটি শেষ হয়; 
অন্যথায়, ফাংশনটি false রিটার্ন করবে।
*/

/* function isValidPhotoName(photoName, imageExtensions){
    if(typeof photoName !== "string" || !Array.isArray(imageExtensions)){
        return 'please give me a valid input';
    }

    else{
        
    }

}

const photo = "image.jpg";
const extention = ['jpg', 'png', 'jpeg', 'gif', 'ico'];

const fullValid = isValidPhotoName(photo,extention);
 */
