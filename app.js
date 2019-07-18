module.exports = {
  sayHello: function(){
    return 'hello';
  },
  addNumbers: function(value1, value2){
    return value1 + value2;
  },
  add: function(num1,num2){
    if(Array.isArray(num1)){
      let sum=0;
      for(let i=0;i<num1.length;i++){
        sum+=num1[i];
      }
      return sum;
    }
    return num1+num2;

  },
  isValidUserIdAsync: function(userlist,user,callback){
    setTimeout(function(){                    //settimeout is used to simulate the async behaviour
      callback(userlist.indexOf(user)>=0)

    },1900);

  }

}

// export default sayHello=()=>{
//   return 'hello';
// }
// export default addNumbers=(value1,value2)=>{
//   return value1+value2;
  
// }



