new Vue({
    // el means element which it going to control
    // now after giving it the id of the dom  vue make a connection between the this insrtance and  that given name..
    //this instance goinfg to dcontrol  every thing  to do with the dom element  every thing inside it 
    el:'#vue-app',
    data:{
        //key value pair 
        number:'',
    }
    ,
    methods:{
        // can acess the yhe values of the data 
      // this means the instance it self
       add:function(){
           age++;
       },
       minus:function(){
           age--;
       },
       link:function()
       {

       }
       
    }
    //dosent control anything outside the el 


});