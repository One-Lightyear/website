window.addEventListener("scroll", myAnimation1);
window.addEventListener("resize", myAnimation2);
window.onload=load_page_event_handler();

var wind_size_height=window.innerHeight;
var wind_size_width=window.innerWidth;
var scroll_val;
var rot1_val;
var rot2_val;
var navgn_width=20;
var flag_view;
var navgn_scroll;
var myTimer; 
var flag_timer=0; 
var rot1_val1_m=0;
var rot1_val2_m=0;


function mobile_view()
{
    console.log("Mobile view");
    flag_view="mv";
    myTimer = setInterval("timer_handler()", 50);
    document.querySelector(".main_body_div").classList.remove("main_body_div_desktop");
    document.querySelector(".gear1").classList.remove("gear1_d");
    document.querySelector(".gear2").classList.remove("gear2_d");
    document.querySelector(".brand").classList.remove("brand_d");
    document.querySelector(".gear_logo").classList.remove("gear_logo_d");
    document.querySelector(".master_class_logo").classList.remove("master_class_logo_d");
    document.querySelector(".navgn_panel").classList.remove("navgn_panel_d");
}

function desktop_view()
{
    console.log("Desktop view");
    flag_view="dv";

    if(flag_timer==1)               //if timer enabled,stop timer
    {
        flag_timer=0;
        clearInterval(myVar);
    }

    document.querySelector(".main_body_div").classList.remove("main_body_div_mobile");
    document.querySelector(".gear1").classList.remove("gear1_m");
    document.querySelector(".gear2").classList.remove("gear2_m");
    document.querySelector(".brand").classList.remove("brand_m");
    document.querySelector(".gear_logo").classList.remove("gear_logo_m");
    document.querySelector(".master_class_logo").classList.remove("master_class_logo_m");
    document.querySelector(".navgn_panel").classList.remove("navgn_panel_m");
}

function timer_handler(){
    flag_timer=1;
    document.querySelector(".gear1").style.transform=`rotate(-${rot1_val1_m+=40}deg)`;
    document.querySelector(".gear2").style.transform=`rotate(${rot1_val2_m+=80}deg)`;
    if(rot1_val1_m>=360) rot1_val1_m=0;
    if(rot1_val2_m>=360) rot1_val2_m=0;
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

    if(flag_view=="dv")
    {
        navgn_scroll=scrollY/4;
        console.log("Desktop_scroll");
        if(window.scrollY>scroll_val)   //scroll down
        {
            
            document.querySelector(".gear1").style.transform=`rotate(-${rot1_val}deg)`;
            document.querySelector(".gear2").style.transform=`rotate(${rot2_val}deg)`;
            if(navgn_scroll<=100 && navgn_scroll>20) document.querySelector(".navgn_panel").style.width=`${navgn_scroll}%`;
            else if(navgn_scroll>100) document.querySelector(".navgn_panel").style.width="100%";

            document.getElementById("details").value=scrollY;
            document.getElementById("details2").value=document.querySelector(".navgn_panel").style.width;
            
        }
        else if(window.scrollY<scroll_val)  //scroll up
        {
            document.querySelector(".gear1").style.transform=`rotate(-${rot1_val}deg)`;
            document.querySelector(".gear2").style.transform=`rotate(${rot2_val}deg)`;
            if(navgn_scroll>20 && navgn_scroll<=100) document.querySelector(".navgn_panel").style.width=`${navgn_scroll}%`;
            else if(navgn_scroll<20) document.querySelector(".navgn_panel").style.width="20%";

            document.getElementById("details").value=scrollY;
            document.getElementById("details2").value=document.querySelector(".navgn_panel").style.width;
        }
    }
    else
    {
        console.log("mobile_scroll");
    }
    scroll_val=window.scrollY;
}



function fx_body_load()
{
    console.log("Hello world");

    (wind_size_width<600)?mobile_view():desktop_view();

    //alert(wind_size_height+"  "+wind_size_width);
    
    document.getElementById("details").value=scrollY;

    if(flag_view=="dv")
    {
        if(scrollY<20) document.querySelector(".navgn_panel").style.width=`20%`;
        else if (scrollY<=90 && scrollY>=20) document.querySelector(".navgn_panel").style.width=`${scrollY}%`;
        else if(scrollY>90) document.querySelector(".navgn_panel").style.width=`90%`;
    }
    
    document.getElementById("details2").value=document.querySelector(".navgn_panel").style.width;
        
    document.querySelector(".gear_logo").style.visibility="visible";
}
