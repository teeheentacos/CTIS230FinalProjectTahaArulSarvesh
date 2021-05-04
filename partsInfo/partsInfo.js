bool1 = true;
bool2 = true;
bool3 = true;
bool4 = true;
bool5 = true;
bool6 = true;
bool7 = true;

function button_function1() {
    if (bool1) {
        document.getElementById("btn1").innerHTML = "<p>The two main manufacturers for CPUs are Intel and AMD. Both produce low and high end chips, at a wide range of prices. If we are strictly speaking about gaming, then Intel might be the better choice. It is a little more affordable, and it has stronger single cores. This basically means it is good at running applications utilizing just one core, and this is the case for most video games. On the other hand, AMD has stronger multithreading capabilities. So if you plan to run various types of software (all at once or even separately), and you plan to do a lot of machine-heavy work, AMD may be the way to go. At the end of the day, there isn't a bad voice, both are very good, and most of the time it comes down to what you can afford and what is available.</p> <img src='images/intelvamd.jpg' class='btnImg'> <img src='images/intelvamd.jpg' class='btnImg'>";
        bool1 = false;
    }
    else {
        document.getElementById("btn1").innerHTML = "";
        bool1 = true;
    }
}

function button_function2() {
    if (bool2) {
        document.getElementById("btn2").innerHTML = "<p>RAM doesn't really have a specific set of brands which are the best. A lot of different brands manufacture RAM, and it all just comes down to what you can afford. Some companies are able to produce RAM with faster clock speeds, while some are not. So it really just comes down to how much you are willing to pay and how much power you need with your RAM. Some popular brands are Corsair and Kingston.</p>  <img src='images/diffRam.png' class='btnImg'>";
        bool2 = false;
    }
    else {
        document.getElementById("btn2").innerHTML = "";
        bool2 = true;
    }
}

function button_function3() {
    if (bool3) {
        document.getElementById("btn3").innerHTML = "  <p>The two main brands for GPU chips are Nvidia and AMD. Generally speaking, Nvidia cards are the way to go. They are generally cheaper and provide more value for their price. They perform better, and they even support ray-tracing, which is a nvidia specific rendering technique to make life like graphics in video games. Even AMD and Nvidia produce the chips, they lend other major brands the chip, so that they can produce the graphics cards as well. So even though Nvidia may have produced the gpu chip, you may end up buying the graphics card from ASUS. Think of it this way, AMD and Nvidia produce the main chip that does all the work. All the other companies take that chip and put it in an enclosure with fans and other important components so that the motherboard can communicate with the chip. Once you have decided between Nvidia and AMD, you have to choose between the numerous brands that produce the cards. Some popular brands are ASUS and EVGA. Choosing between those brands usually comes to price, as most companies price their cards differently. Also, some companies have a better reputation and better history with the stability of their products.</p> <img src='images/diffGpu.jpg' class='btnImg'>";
        bool3 = false;
    }
    else {
        document.getElementById("btn3").innerHTML = "";
        bool3 = true;
    }
}

function button_function4() {
    if (bool4) {
        document.getElementById("btn4").innerHTML = "  <p>Just like RAM, storage doesn't really have main brands either. A lot of different brands produce SSDs and HDDs. Some popular brands are Samsung, Kingston, and Corsair. It comes down to how much you are willing to pay. Some brands like Samsung have excellent read/speeds but their products are usually more expensive than Kingston.</p>  <img src='images/diffStorage.jpg' class='btnImg'>";
        bool4 = false;
    }
    else {
        document.getElementById("btn4").innerHTML = "";
        bool4 = true;
    }
}

function button_function5() {
    if (bool5) {
        document.getElementById("btn5").innerHTML = "  <p>Once again, motherboards have many different manufacturers that produce very similar products. One important thing to know is that if you choose an AMD CPU then you have to choose a motherboard that can support that. If you choose an intel CPU, then choose a motherboard that supports Intel. Once you have narrowed it down to between those two, it really just becomes about what you can afford. Most different brands offer similar products. Some popular brands are EVGA, MSI, and ASUS.</p>  <img src='images/diffMobos.jpg' class='btnImg'>";
        bool5 = false;
    }
    else {
        document.getElementById("btn5").innerHTML = "";
        bool5 = true;
    }
}

function button_function6() {
    if (bool6) {
        document.getElementById("btn6").innerHTML = "  <p>Power Supply Units also have many different manufacturers. You need to know how much wattage you are looking for, a mid-end PC shouldn't require more than 650 watts. After that it comes down to what you can afford. There is not much difference in what the different brands offer. Some popular brands are Corsair and Gigabyte.</p>  <img src='images/diffPsus.png' class='btnImg'>";
        bool6 = false;
    }
    else {
        document.getElementById("btn6").innerHTML = "";
        bool6 = true;
    }
}

function button_function7() {
    if (bool7) {
        document.getElementById("btn7").innerHTML = "  <p>Lastly, we have PC Cases. Cases also have many different brands. Once again it comes down to how much you want to pay. Another important factor is how big you want your PC to be. If you are using larger and heavier parts, you will obviously need a larger case, which will cost more. Some popular brands are NZXT and ASUS.</p>  <img src='images/diffCases.jpg' class='btnImg'>";
        bool7 = false;
    }
    else {
        document.getElementById("btn7").innerHTML = "";
        bool7 = true;
    }
}