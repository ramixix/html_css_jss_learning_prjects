// you can use '//' to make a in-line comment
/* use this for making a multi-line comment */

/* data types: undefined , null, boolean, string, symbol, number, and object. 
    for declaring a variable use 'var' before the name of the variable and 
    the data in that variable can be any of the data types we mention above 
    you can actually declare a variable in three ways:
    1. var : the general and most common and by using 'var' you can use that variable in whole program it is like global but still if you use it to declare variable inside {} it just be reachable inside {}
    2. const: to define a variable that is not going to change after once you determine the value
    3. let : if you want to use a variable within the scope of where you decalre that , let doesn't let you to define a variable twice so it gives you error if you use the same name for another variable */
    // if you don't use 'var' or anything before the name of variable , your variable is going to be global (it gives you error inside IDE but in web it works well)

var number = 5;
var string = "sdf";
string = 7546.5345;  // you can change type any time 
var is_null;
var boolean = true; 



var div = 66/0;
console.log(div); // print out infinity
// the function 'console.log(<your variable or data>)' is using for showing or printing your data in the console



console.log(1.0); // will print '1' absloute number if the decimal after dot be zero it treat it as integer


// to make a string in javascript we put them in "" double quote or '' single quote or we can also use backticks


// you can concatenate the strings with pluse '+' sign
var s = "the first " + "the second";


// for finding the length of a string simply use the 'length' method after the sring variable or sring itself 
var length;
var string = "its find out what is the lenght of this string";
lenght = string.length


// you can just take one of the character in strings but remember that strings are immutable you can't change individual charaters after you declare but the whole string can change
var string_2 = "Hello";
var char_e = string_2[1];
var last_char = string_2[string_2.length - 1];


// defineing a function using 'function' key
function wordBlaks(noun, adjective, verb, adverb){
    var result = "The " + adjective + " " + noun + " " + verb + " to park";
    return result;
}

console.log(wordBlaks("amir", "little", "fuck" , "slowly"));


// array using the [] brackets
var array = ["string", 21, 'A', 98.54];
var second = array[1];
array[2] = 'B';


// you can append data to array use push() method 
// you also use unshift() method to append to first of the array
var array_1 = ["python", "c" , "c++"];
array_1.push("java", "javascript", "php");
array_1.push(["assembly", "haskel"]);
array_1.unshift("css");

// remove the last element of array with pop() method. it returns the last element
// we also can remove the first element of an array using the shift() method , it returns the first element of the array
// these method change the array 
var array_2 = ["python", ["c" , "c++"], ["java", "javascript"], "php" , ["assembly", "haskel"] ];
var lst_el = array_2.pop();   // ["assembly", "haskel"]
var frst_el = array_2.shift(); // python




// if you want print a array as string or concatenate an array with a string use 'JSON.stringify(<array>)' function
console.log("our array: " + JSON.stringify(array_2)); 


// in java script there is 'strict equal sign (===)' we use triple equal sign to compare two value
// the difference between the equality sign (==) and tripel one is that the double equal sign attempts to convert both values 
// to compared to a common type
// 3 == '3' --> is true as it convert them to the same type(character to integer) then compare them
// 3 === '3' --> false they are not the same type so you can't compare them with triple equal sign

// also not equals : ( != ) is also type conversion , strict not equal sign( !== ) is not type conversion 

// logical AND = &&         ,            logical OR = ||



// if , else if , and else
function if_elseif_else(val){
    if(val > 10){
        return "greater than 10";
    }
    else if (val < 5){
        return "less than 5";
    }
    else{
        return "between 5 and 10";
    }
}


// using switch statement as we use it in c or c++
// switch(val){ case 1 : return "1" breake; defaul: return "no num";}






// we can write 'return undefined' for a function to return null value 


/* objects: are similar to arrays except that instead of using indexes to access data you use properties
    for defining a object : use 'var' like you define a variable but after equal sign use curly brackets '{}' and define you properties as you 
    do in dictionry in another languages.
    for accessing object properties you can use to ways : 1. dot operation    2. with racket notation.
    you can also use these ways to access a property inside a object and modifying it.
    you can delete a property from a object using 'delete' keyword before that property. 
    you can have objects inside arrays or objects inside objects.*/

    var ourDog = {
        'name' : 'Camper',
        'legs' : 4,
        'tail' : 1,
        'friends' : ["everything!"]
    };
    ourDog.legs = 3; 
    ourDog["tail"] = 2;

    var property_name = ourDog.name;
    var property_fiends = ourDog["friends"];

    delete ourDog.friends;

    // you can check if a object has a property using '<obj>.hasOwnedProperty(<property>)' method, it returns true if what you specify in paretheses be a property in that object
    if (ourDog.hasOwnProperty("bark")){
        console.log("the dog has bark properties")
    }


    // object in inside object: 
    var myStorage = {
        "car":{"passenger seat": "crumbs", "glove box" : "maps"},
        "house": {"yard":{"batroom":"just to fuck", "pool": "is good for summer"}, "kitchen":"cooking"}
    };
    var h = myStorage.house.yard["batroom"];

    // to make a copy from  a object you can use "var copy = 'JSON.parse(JSON.stringify(<object>));"




    // the while , for , and do while and ternary operator (condition ? true: flase) are defined as other languages like c c++
    // a > 10 ? "positive" : a < 0 ? "negative" : "zero"; 

    // Math.floor(Math.random() * 20 );
    // the random number between 6 17 ===> Math.floor( Math.random() * (17-6 + 1) + 6 );

    // you can convert a string with 'parseInt(<str>, <specify the base>);'  
    var integer = parseInt("543");
    var binary = parseInt("1001110", 2)



    //  as we said if you define a variable with 'let' you can't define it again but you can change the value of your variable
    let first = 1;
    let first = 2; // this is going to give you error because you define a variable twice
    first = 6; // this is right you can change the value of your variable 


    // use 'const' for defining a variable that you going to assign just one time and after that you can not change the value of that variable 
    const V = "hello";
    // V = "adfd"; will give a error
    //  but when it comes to arrays when you use const to define a array you can't reassign the array but you can change the arrays elements
    // using brakets[]
    const s = [1,4,5];
    // s = [5,4,1];  give error
    s[0] = 5;
    s[1] = 4;
    s[2] = 1; 


    // as you saw beside that we define a array of object with as constant with keyword 'const' it still can get modify
    // for preventing the data mutation you can use a "Object.freeze(<enter your array or object>)"
    const scores = { "average" : 2.80 }
    Object.freeze(scores);
    // scores.average = 3;  will generate error





    // arrow funciton in java script known as lambda functions 
    // anonymous funtion doesn't have a name we assign that to a variable
    //we can delete the return and curly brackets if it be just one line code 
    
    var magic = function(){                             var magic = () => {return new Data()};               var magic = () => new Data();
        return new DataCue();           //===>                                                  //===>
    };

    // example an function to concatenat two arrays
    cosnt myConcat = fucntion(arr1, arr2){                                                  const myConcat = (arr1, arr2) => arr1.concat(arr2);
        return arr1.concat(arr2);                                           //==>
    };




        var arr = [45,-54,45.25,444.11,-9978.1515,-456,-13,-4654.04,4566.8,123.5,1645,];
        arr.filter(num => Number.isInger(num) && num > 0 ).map( x => x * x) ; 








    // use destructuring assinment to assign variables from objects 
    var voxel = { x : 3.6 , y : 7.4, z : 6.4};
    var a = voxel.x;                                                                const { x : a , y : b , z : c} = voxel; // go to voxel object and take x value an put it in a ,,,
    var b = voxel.y;                                                //==>
    var c = voxel.z;


    // destructuring assignment in nested objects
    const local_forecast = { 
        today : { min : 21, max : 35},                                              const { tomorrow: { max : max_of_tomorrow}} = local_forecast;
        tomorrow = { min : 23 , max : 55}                          //==> 
        };
    const max_of_tomorrow = local_forecast.tomorrow.max;






    const [x , y , , z] = [2,34,25,344,534]; // x=2 y=34 z=344


    //remove first two elements with rest operation 
    const source  = [1,2,3,4,5,6,7,8,9,10];
    const [ , , ...array3]  = source;  //======> array3 = [3,4,5,6,7,8,9,10]


    //use destructuring assingment to pass an object as a function's parameters

    const stats = {
        max : 30.68,
        mode : 23.56,
        average : 15.23,
        min : 1.15
    };

    const half = (fucntion () {                                                             const half = ( function () {
                                                                                                    return function half({max , min}){
      return function hlaf(statas){                                            //===>                   return (max + min) / 2.0;
          return (statas.max + stats.max) / 2.0;                                                         };
      };                                                                                            })();

    })();                                                                                      console.log(half(stats));

    console.log(half(stats));










    // template literal with multi-line  and string iterpolation
    // by using back ticks you can write multi-line strings and also add variables inside the strings , you can add double or single quote without using scape character
    const person = { name : "zac", age : 18};
    const greeting = `Hello my name is ${person.name}!, I am ${person.age} years old
    it could be multi-line.` ;
    console.log(greeting);






    // making objects using class keyowrd and constructor

    class SpaceShuttle{
        constructor(traget){
            this.target = target;
        }
    }

    let zus = new SpaceShuttle('jupiter');
    console.log(zus.target);





    // set and get function to read and write a private object of the class
    class Temperature{
        constructor(temp){
            this._temp = temp;  // the underscore before the name define that this variable is private to this class
        }

        get tempture(){
            return this._temp;
        }

        set tempture(updatetemp){
            this._temp = updatetemp;
        }
    }





