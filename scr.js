let dollar=document.getElementById("dollar");
let pound=document.getElementById("pound");


dollar.onkeyup=function(){
    let dollar1= dollar.value;
    let pound1= dollar1*0.82;
    pound.value=pound1;
    
}
pound.onkeyup=function(){
    let pound1=pound.value;
    let dollar1=pound1/0.82;
    dollar.value=dollar1;

}
    
