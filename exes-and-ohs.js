function XO(str) {
  //code here
  var match = str.toLowerCase();
  var x = 0;
  var o = 0;
  
  for (i=0; i< match.length; i++){
   if(match[i]==="o"){
     x ++;
   } else if (match[i]==="x"){
     o ++;
   }
  }
return x === o;
}