function mode(a){
    a.sort();
     var empty = [];
     i=0;
     while(i<a.length){
       if( a[i] == a[i+1]) {
         empty = a[i];
         i+= 1;
       } else {
         i += 1;
       }
       return empty = a[i];
  }

}
  console.log('data:',mode([1,2,4,3,2,5]));