
document.getElementById("typewrite").innerText='|';
let i=1;
let s="I love Web designing.";
let arr=[''];
let n=s.length;
for(let i=0;i<n;i++){
    arr.push(s.charAt(i));
}
function typeWriter() {
    if (i < n+1) {
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
