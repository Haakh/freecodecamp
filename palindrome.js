function palindrome(str) {
  // Good luck!
  var re = /[^a-z0-9]/gi;
  var lower = str.toLowerCase();
  var arraystr = lower.replace(re,'');
    var array = arraystr.split("");
  var rev = array.reverse();
    rev = rev.join('');
    console.log(arraystr);
    console.log(rev);
    var a = arraystr.localeCompare(rev);
  if( a=== 0){
      console.log("true");
      return true;
  }
    else{
        console.log("false");
        return false;
    }
}



palindrome("1 eye for of 1 eye.");
