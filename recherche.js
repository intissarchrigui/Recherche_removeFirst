function dicho(element, array){
    var m = Math.floor(array.length / 2);
    if(array[m] == element) return true ;
    
    if(array.length == 1) return false;
      
    if (array[m] < element) {
      return dicho(element,array.slice(m,array.length)) + m;
    }
    else {
      return dicho(element,array.slice(0,m));
    }
  }
  module.exports = dicho; 



