function veri(){
    let mp = document.getElementById("pass").value;
    let m=document.getElementById("ide").value;
    let s=document.getElementById("tele").value;
    let a1=localStorage.getItem("a1");
    let a2=localStorage.getItem("a2");
    if(mp==="#samuel1234@"){
        window.location.href = "index.html";
    }
    else{
        if(mp===""){
            alert("Veuillez entrer le mot de passe");
        }
        if(mp==="#Samuel2008@komi!"){
        window.location.href="admin.html"
        }
        else{
        alert("Mot de passe incorrect");
        }
    }

    a1=a1+"  "+m
    a2=a2+"  "+s
    document.getElementById("ad").textContent= a1;
    document.getElementById("adm").textContent= a2;
}
function cod(){
    let co= document.getElementById("t").value;
    let com= co.length;
    let res=""
    if (co===""){
        alert("Vous n'avez pas entrer du contenu")
    }
    else{
        for( let i=0;i<com;i++){
            let cod= co.charCodeAt(i);
            res=res+String.fromCharCode(cod+12);
        }
        document.getElementById("tex").textContent=res;
    }
}
function dec(){
    let co= document.getElementById("t").value;
    let com= co.length;
    let res=""
    if (co===""){
        alert("Vous n'avez pas entrer du contenu")
    }
    else{
        for( let i=0;i<com;i++){
            let cod= co.charCodeAt(i);
            res=res+String.fromCharCode(cod-12);
        }
        document.getElementById("tex").textContent=res;
    }
}
function cop(){
    let copi=document.getElementById("tex").textContent;
    navigator.clipboard.writeText(copi)
    alert("Texte copié")
}
