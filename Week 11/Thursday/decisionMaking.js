// Comparison operators

// > Greater Than
// < Less Than
// >= greater than or equal to
// <= less than or equal too
// == Equal too
// != Not equal too
// === Strict Equal too
// !== Strict Not equal too

1 > 3 // False
1 < 3 // True
    - 1 > 20 // False
    - 1 > -1 // False
    - 1 <= -1 // True
    - 1 <= 10 // True

let age = 31;

age >= 18; // True
// the variable age is 31 which is greater than 18 so its going to be True
// if it was set to 17 or less then it would be False and the person wouldnt be able to sighn up


// Comparing String characters

"A" < "a"; // True because in unicode "A" is 0041 but "a" is 0061 which is bigger
// remeber all characters have a unicode value
// Different languages also have their own unicode values

// == checks to see if its equal but does not take type of input into cosideration 

1 == 1; // True

1 == "1"; // True will convert everything to a str and make a comparison based on that

null == undefined; // True 

1 == 2; // False 

"a" == "b"; // False

0 == false; // True 

// it wil convert the given inputs to the same type and then run the comparison using the given information

1 === 1; // True this will not change the inputs based on information provided but it will do a strict comparison

1 === "1"; // False because it will not convert to string and compare it will just compare the unicode to the given Int

0 === false; // False the inputs will be compared as they are so this way it will be false as they are of different types


1 != 2; // True

1 != "2";// True

1 != "1";// False it will change the types to match then do the comparison

1 !== "1"; // True, the first is an Int and the second is a STR

// ============ Wise Word to live by ====================

// allways try to use the "===" strict comparison as it is more accurate

//=======================================================

