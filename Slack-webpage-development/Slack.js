
function clickHandler(){
   var name=document.getElementById('header_hidden_sec-1')
   var chev=document.getElementById('chevron_head')
   if(name.style.display=="block"){
    name.style.display='none'
    chev.style.transform='rotate(360deg)'
   }
   else{
    name.style.display="block"
    chev.style.transform='rotate(180deg)'
   }
    
}