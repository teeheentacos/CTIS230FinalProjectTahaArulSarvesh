expList = document.getElementById("expList");
expButton = document.getElementById("expButton");
isExpClicked = false;

expButton.addEventListener("click", onExpClick);

function onExpClick(){
    if(isExpClicked){
        expList.style.display = block;
        isExpClicked = false;
        expButton.textContent = "Hide Experience";
    }
    else{
        expList.style.display = none;
        isExpClicked = true;
        expButton.textContent = "Show Experience";
    }
}