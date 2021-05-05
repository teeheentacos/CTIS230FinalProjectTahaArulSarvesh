ATXheader = document.getElementById("ATXheader");
MicroATXheader = document.getElementById("MicroATXheader");
MiniITXheader = document.getElementById("MiniITXheader");
ATXimage = document.getElementById("ATXMOBO");
MicroATXimage = document.getElementById("MicroATXMOBO");
MiniITXimage = document.getElementById("MiniITXMOBO");

ATXheader.addEventListener("mouseover", ATXMouseOver);

function ATXMouseOver(){
    ATXimage.style.display = "block";
}

ATXheader.addEventListener("mouseout", ATXMouseOut);

function ATXMouseOut(){
    ATXimage.style.display = "none"
}

MicroATXheader.addEventListener("mouseover", MicroATXMouseOver);

function MicroATXMouseOver(){
    MicroATXimage.style.display = "block";
}

MicroATXheader.addEventListener("mouseout", MicroATXMouseOut);

function MicroATXMouseOut(){
    MicroATXimage.style.display = "none"
}

MiniITXheader.addEventListener("mouseover", MiniITXMouseOver);

function MiniITXMouseOver(){
    MiniITXimage.style.display = "block";
}

MiniITXheader.addEventListener("mouseout", MiniITXMouseOut);

function MiniITXMouseOut(){
    MiniITXimage.style.display = "none"
}
