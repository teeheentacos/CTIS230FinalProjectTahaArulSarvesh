intel = document.getElementById("Intel");
intelButton = document.getElementById("IntelButton");
isIntelShowing = false;

intelButton.addEventListener("click", onIntelClick);

function onIntelClick(){
    if(isIntelShowing & isAMDShowing){
        intel.style.display = "none";
        intelButton.textContent = "Show Guide for Installing Intel";
        isIntelShowing = false;
        amd.style.marginLeft = "50%";
    }
    else if(isAMDShowing){
    intel.style.display = "block";
    intelButton.textContent = "Hide Guide for Installing Intel";
    isIntelShowing = true;
    amd.style.marginLeft = "0%";
    }
    else{
        intel.style.display = "block";
        intelButton.textContent = "Hide Guide for Installing Intel";
        isIntelShowing = true;
    }

}

amd = document.getElementById("AMD");
amdButton = document.getElementById("AMDButton");
isAMDShowing = false;

amdButton.addEventListener("click", onAmdClick);

function onAmdClick(){
    if(isAMDShowing){
        amd.style.display = "none";
        amdButton.textContent = "Show Guide for Installing AMD";
        isAMDShowing = false;
    }
    else if(isIntelShowing){
        amd.style.display = "block";
        amdButton.textContent = "Hide Guide for Installing AMD";
        isAMDShowing = true;
        amd.style.marginLeft = "0%";
    }
    else{
        amd.style.display = "block";
        amdButton.textContent = "Hide Guide for Installing AMD";
        isAMDShowing = true;
        amd.style.marginLeft = "50%";
    }

}
