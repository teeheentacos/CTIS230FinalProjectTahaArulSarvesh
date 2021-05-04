function about() {
    document.getElementById("about").innerHTML = 
    "<p id = 'aboutppp'>\
    PC Part Picker is a website that is designed to help you pick and choose\
    the components you want in order to build your PC. It has a helpful builder\
    section to assist you in picking your parts, a published builds section to\
    gain inspiration from other people's builds, and a section for you to browse parts such as sepecific \
    CPUs or GPUS or motherboards.\
\
    <p>\
        The cool part about PC Part Picker is that the builder section comes \
        with helpful tools such as compatability checker, a section that lets\
        you select from the catalog for each of the primary parts, (which you can see in the parts detail),\
        it automatically adds up the price of each of your components so that you can see a total\
        at the bottom, it shows you the estimated wattage that the machine will consume, and it also lets you add secondary components such as \
        keyboards, mice, monitors, and operating systems. If you create an account on the website,\
        you can even publish and save your custom parts lists.\
    </p>\
\
    <p>\
        This guide will go through the steps of creating a parts list in pcpartpicker and tips \
        on using the sorting and other features.\
    </p>\
</p>\
    ";
}
function show1() {
    document.getElementById("section1").innerHTML = 
    "<p>\
    Logging into the website allows you to save parts lists that you work on. It will also allow \
    you to save other lists and edit them for your own library of lists. You can make and receive comments\
    and messages with an account, and you can even add certain parts to your favorites that you like to use. \
    Although you can use the site without making an account, it is our recommendation to make one since it enhances the functionality\
    of what you can do with the site.\
</p>\
\
<div class='pppimages'>\
    <img id='login' src='images/login.png' alt='Login Screen'>\
    <h6>Login Screen</h6>\
</div>\
    ";
}
function show2() {
    document.getElementById("section2").innerHTML = 
    
    "<p>\
    The System Builder section is basically the most important part of the entire website.\
    It is the section which you use to actually put together your parts list. The way that this \
    section works is basically there is a huge list of sections for each major PC part. In each of these sections\
    you can choose a part from the parts list. It also shows you the estimated wattage for your list at the top of the page.\
    At the bottom of the page, it shows you compatability notes about which parts are may not be compatible with each other.\
\
\
    This section will be about the System Builder section which allows you \
    to build your list. It will have a subsection about each important topic such as \
    picking parts using sorting and the add from filter, what the estimated wattage means,\
    and what the compatability issues could mean and how to fix them.\
</p>\
\
<p>\
    Typically when you click the add a part button and add a part from the list, you can \
    simply scroll through until you find the part that you like and then you can simply add that\
    by clicking the add button. However, there is a better and more efficient way to find parts. \
    You can add filters such as product series like Intel Core i3 or i5 or i7 or an AMD processor or\
    memory size for RAM and Hard Drive space. You can also sort products on the page by price or ratings and\
    add products that way. The last way to add parts is to use the add from filter button. This \
    button adds parts from whatever filter you add. This button, however, is more useful after you add \
    a couple parts to your list already, then, when you click the add from filter button, even if you don't set \
    any filters, the website will add the part that fits to your build best, compatability and price wise.\
</p>\
\
<p>\
    The next important thing to consider is the estimated wattage. You should keep an eye on the \
    wattage as you are adding parts because when you choose a power supply you should choose one that \
    has an adequate wattage. To make sure you choose the proper power supply, you can also simply add from filter\
    and it should choose one that has enough wattage. \
</p>\
\
<p>\
    Finally, the last important thing to consider on this page is the compatability issues section at the bottom \
    of the page. This section tells you if the parts you have chosen are are may be incompatible with each other.\
    Some errors may be that the motherboard doesn't have a specific slot such as an M.2 slot or if there \
    isn't enough RAM ports. However, other issues such as the fitting larger components such as GPUs in a smaller case \
    isn't detectable yet, so you should look into the product's description to find its dimensions to see if it fits.\
</p>\
    \
\
    <div class='pppimages'>\
    <img id='systembuilder' src='images/systembuilder.png' alt='System Builder'>\
    <h6>System Builder</h6>\
</div>\
    ";
  }

function show3() {
    document.getElementById("section3").innerHTML = 
    "<p>\
    The Build Guides section shows different levels of builds for different types of \
    purposes. So far, on the page, they have dedicated streaming and gaming builds and simple \
    gaming builds. There are also multiple levels such as entry-level, modest, budget, excellent, and\
    glorious. As the levels of PCs increase, the price also increases as the cost of the components goes up.\
    Choosing a build from one of these lists will ensure that all the parts included will definitely work together\
    and it will be pretty straight forward to build. The only downside is that all the customizability \
    of building a PC will be gone.\
</p>\
\
<div class='pppimages'>\
    <img id='buildguide' src='images/buildguide.png' alt='Build Guides'>\
    <h6>Build Guides</h6>\
</div>\
    ";
}

function show4() {
    document.getElementById("section4").innerHTML = 
    "<p>\
    This section is really similar to the Build Guides section but it has completed builds made by \
    other users of the website. The difference between these two sections is that the Build Guides section \
    has professionally compiled PC parts lists with a tradeoff of little to no customization, whereas the \
    Completed Builds section may not be as professionally made, it has a lot of customization. \
    Building these PCs might prove to be quite difficult due to the large amount of personal \
    customization made by the creators. You can also filter out builds on this page as well. You can filter by \
    price, CPU type, GPUs, and more.\
</p>\
\
<div class='pppimages'>\
    <img id='completedbuilds' src='images/custom.png' alt='Completed Builds'>\
    <h6>Completed Builds</h6>\
</div>\
    ";
}

function tips() {
    document.getElementById("section5").innerHTML = 
    "<p>\
    Some tips that we have come up with are:\
    <ul>\
        <li>to have a price range in mind and make sure to stay \
            within that range</li>\
        <li>to have a plan in mind such as type of processor or GPU (it's \
            easy to lose track of your original idea when presented with hundreds of choices)\
        </li>\
        <li>to take inspiration from completed builds or YouTube videos</li>\
        <li>to have a style in mind, such as RGB or stealth</li>\
        <li>to keep how much space you have in your setup area so that you don't make a PC that's too large</li>\
        <li>to check and double check so that you only have to buy once</li>\
        <li>try to buy parts from mainly Amazon because of faster shipping through Prime and because of Amazon backed return policy</li>\
    </ul>\
</p>\
\
<p>\
    Finally, you can take some inspirations from our own completed builds linked below.\
\
    <a href='https://pcpartpicker.com/list/BXtnBc'>Sarvesh's List</a>\
    <a href='https://pcpartpicker.com/list/PbrpJf'>Arul's List</a>\
\
    <!-- will add Taha's list later -->\
</p>\
    ";
}