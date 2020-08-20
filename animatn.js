window.addEventListener("scroll", myAnimation1);
window.addEventListener("resize", myAnimation2);
window.onload=load_page_event_handler();

var wind_size_height=window.innerHeight;
var wind_size_width=window.innerWidth;
var scroll_val;
var rot1_val;
var rot2_val;
var navgn_width=20;

function mobile_view()
{
    document.querySelector(".main_body_div").classList.remove("main_body_div_desktop");
    console.log("Mobile view");
    document.querySelector(".gear1").classList.remove("gear1_d");
    document.querySelector(".gear2").classList.remove("gear2_d");
    document.querySelector(".brand").classList.remove("brand_d");
    document.querySelector(".gear_logo").classList.remove("gear_logo_d");
}

function desktop_view()
{
    document.querySelector(".main_body_div").classList.remove("main_body_div_mobile");
    console.log("Desktop view");
    document.querySelector(".gear1").classList.remove("gear1_m");
    document.querySelector(".gear2").classList.remove("gear2_m");
    document.querySelector(".brand").classList.remove("brand_m");
    document.querySelector(".gear_logo").classList.remove("gear_logo_m");
}


function load_page_event_handler()  //730 539
{
    console.log("Page loaded");
}


function myAnimation2()
{    
    wind_size_height=window.innerHeight;
    wind_size_width=window.innerWidth;
    location.reload();   
}


function myAnimation1()
{    
    rot1_val=(window.scrollY/6);
    rot2_val=(window.scrollY/3);

    if(window.scrollY>scroll_val)   //scroll down
    {
        
        document.querySelector(".gear1").style.transform=`rotate(-${rot1_val}deg)`;
        document.querySelector(".gear2").style.transform=`rotate(${rot2_val}deg)`;
        if(navgn_width<=90) document.querySelector(".navgn_panel").style.width=`${navgn_width+=5}%`;
        document.getElementById("details").value=scrollY;
        
    }
    else if(window.scrollY<scroll_val)  //scroll up
    {
        document.querySelector(".gear1").style.transform=`rotate(-${rot1_val}deg)`;
        document.querySelector(".gear2").style.transform=`rotate(${rot2_val}deg)`;
        if(navgn_width>20) document.querySelector(".navgn_panel").style.width=`${navgn_width-=5}%`;
        document.getElementById("details").value=scrollY;
    }
    
    scroll_val=window.scrollY;
}



function fx_body_load()
{
    console.log("Hello world");
    //alert(wind_size_height+"  "+wind_size_width);
    document.getElementById("details").value=scrollY;

    if(scrollY>=350) document.querySelector(".navgn_panel").style.width="90%";

    (wind_size_width<600)?mobile_view():desktop_view();
        
    document.querySelector(".gear_logo").style.visibility="visible";
}