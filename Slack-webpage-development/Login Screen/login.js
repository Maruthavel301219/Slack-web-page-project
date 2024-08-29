
     // user enterd value of email and password add to one object
var email=document.getElementById('user_email');
var password=document.getElementById('user_password');
var login_obj={};
function loginchanger(event,type){
   if(type=='email'){
      login_obj['email']=event.target.value;
   }
   else{
      login_obj['password']=event.target.value;
   }
}
 
   //email and password out put
  var loaderaction=document.getElementsByClassName('parent_loader')[0]
  var loginsection=document.getElementById('login-sec')
function clickhandler(){
 if(login_obj&&Object.keys(login_obj).length==2){  
   //console.log(login_obj);
   var storeddata= localStorage.getItem('user_datas');
   var data=(JSON.parse(storeddata));
   //console.log(data)
   var somefun=data.some(function(value){
      return (value.email==login_obj.email && value.password==login_obj.password);
   }); 
   console.log(somefun);
   if(somefun===true){
      loginsection.style.display='none';
      loaderaction.style.display='block';
      setTimeout(function(){
         loaderaction.style.display='none';
         window.location.href= "http://127.0.0.1:5500/Slack.html";
      },4000)
   }
   email.value="";
   password.value="";
   login_obj={}
 }}

     // enable the sigup page from hidden stage
 
function signuphandler(){
   var signup=document.getElementById('new_user')
   signup.style.display='block'
   
}

        //get the log in page by back to login text

function get_login_page(){
   var login_back=document.getElementById('new_user')
   login_back.style.display='none'
 }


     //signup form function and out put

var signup_name=document.getElementById('sign_up_name');
var signup_email=document.getElementById('sign_up_email');
var signup_password=document.getElementById('sign_up_password');
var signup_phonenumber=document.getElementById('sign_up_phonenumber');
var signup_obj={};
var output_array=[];
function signupchanger(event,type){
   if(type=='name'){
      signup_obj['name']=event.target.value;
   }
   else if(type=='email'){
      signup_obj['email']=event.target.value;
   }
   else if(type=='password'){
      signup_obj['password']=event.target.value;
   }
   else{
      signup_obj['phonenumber']=event.target.value;
   }
}
  
function submithandler(){
   if(signup_obj&&Object.keys(signup_obj).length==4){
      output_array.push(signup_obj);
      signup_name.value="";
      signup_email.value="";
      signup_password.value="";
      signup_phonenumber.value="";
      signup_obj={};
      //console.log(output_array);
      localStorage.setItem('user_datas',JSON.stringify(output_array))}
   }
      

function provideddatas(){
     var provideddatas= localStorage.getItem('user_datas')
     console.log(provideddatas)
     console.log(JSON.parse(provideddatas))

}      

     //console.log('Name=',output_array[0].name)  
     //console.log('Email=',output_array[0].email)  
     //console.log('Password=',output_array[0].password)  
     //console.log('phonenumber=',output_array[0].phonenumber) 
     //output_array=[]
   
  

