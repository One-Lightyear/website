var wind_size_height=window.innerHeight;
var wind_size_width=window.innerWidth;
var scroll_val;
var rot1_val;
var rot2_val;
var flag_view;
var navgn_scroll;
var scroll_element;
var myTimer; 
var flag_timer=0; 
var rot1_val1_m=0;
var rot1_val2_m=0;

window.onload=load_page_event_handler();

function desktop_view()
{
    console.log("Desktop view");
    flag_view="dv";

    if(flag_timer==1)                                       //if timer enabled,stop timer
    {
        flag_timer=0;
        clearInterval(myVar);
    }
    // document.querySelector(".master_class_logo").classList.remove("master_class_logo_d");
    document.querySelector(".expand_button").style.visibility="visible";
}

function mobile_view()
{
    console.log("Mobile view");
    flag_view="mv";
    myTimer = setInterval("timer_handler()", 50);
}

function timer_handler(){                                   //mobile_view_logo_animation
    flag_timer=1;
    document.querySelector(".gear1").style.transform=`rotate(-${rot1_val1_m+=20}deg)`;
    document.querySelector(".gear2").style.transform=`rotate(${rot1_val2_m+=40}deg)`;
    if(rot1_val1_m>=359) rot1_val1_m=0;
    if(rot1_val2_m>=359) rot1_val2_m=0;
}


function load_page_event_handler()  //730 539
{
    console.log("Page loaded");
}


window.addEventListener("resize", function myAnimation2()
{    
    wind_size_height=window.innerHeight;
    wind_size_width=window.innerWidth;
    location.reload();   
});


window.addEventListener("scroll", function myAnimation1()
{
    scroll_element=window.scrollY;
    rot1_val=(scroll_element/6);
    rot2_val=(scroll_element/3);
    navgn_scroll=scroll_element/4;

    if(flag_view=="dv")
    {
        // console.log("Desktop_scroll");

        if(scroll_element>scroll_val)   //scroll down
        {        
            document.querySelector(".gear1").style.transform=`rotate(-${rot1_val}deg)`;
            document.querySelector(".gear2").style.transform=`rotate(${rot2_val}deg)`;
            
            if(navgn_scroll<=100 && navgn_scroll>20)
            {
                document.querySelector(".navgn_panel").style.width=`${navgn_scroll}%`;
            }
            else if(navgn_scroll>100)
            {
                document.querySelector(".navgn_panel").style.width="100%";
            }
        }
        else if(scroll_element<scroll_val)  //scroll up
        {
            document.querySelector(".gear1").style.transform=`rotate(-${rot1_val}deg)`;
            document.querySelector(".gear2").style.transform=`rotate(${rot2_val}deg)`;
            
            if(navgn_scroll>20 && navgn_scroll<=100)
            {
                document.querySelector(".navgn_panel").style.width=`${navgn_scroll}%`;
            }
            else if(navgn_scroll<20)
            {
              document.querySelector(".navgn_panel").style.width="20%";
            }
        }
    }
    else
    {
        // console.log("mobile_scroll");
    }

    scroll_val=window.scrollY;
});



function fx_body_load()
{
    console.log("Hello world");

    (wind_size_width<600)?mobile_view():desktop_view();
    
    scroll_element=window.scrollY;
    navgn_scroll=scroll_element/4;

    if(flag_view=="dv")
    {
        if(navgn_scroll<=20) document.querySelector(".navgn_panel").style.width="20%";    
        
        else if (navgn_scroll<=100 && navgn_scroll>20) document.querySelector(".navgn_panel").style.width=`${navgn_scroll}%`;
        
        else if(navgn_scroll>100) document.querySelector(".navgn_panel").style.width="100%";
    }
    
    document.querySelector(".main_body_div").style.visibility="visible";
}


function scroll_to()            //Scroll function for the navigation panel expansion button
{
   window.scrollTo( 0,400);
}
