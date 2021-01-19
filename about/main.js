
document.getElementById("typewrite").innerText='|';
let i=1;
let st="Prantaneel Debnath";
let n=st.length;
let arr=[''];
for(let j=0;j<n;j++){
    arr.push(st.charAt(j));
}
function typeWriter() {
    if (i <= n) {
        let temp='';
        for(let j=0;j<=i;j++){
            temp+=arr[j];
        }
        if(i!=n){
            temp+='|';
        }
        document.getElementById("typewrite").innerHTML=temp;
        
        i++;
        window.setTimeout(typeWriter, 80);
    }

    
    
    


    
}
function loading(){
    typeWriter();
}
document.onload=loading();
