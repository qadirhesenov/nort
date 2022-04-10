const bar=document.querySelector(".line");
const Close=()=>{
    const contn=document.querySelector(".contn")
    if(contn.style.transform === "translateY(0px)"){
        contn.style.transform="translateY(-780px)";
        contn.style.zIndex="6";

    }else{
        contn.style.transform="translateY(0px)";
        contn.style.zIndex="6";

    }
}
bar.addEventListener("click",Close)

