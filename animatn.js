window.addEventListener("scroll", myAnimation1);
window.addEventListener("resize", myAnimation2);
window.onload=load_page_event_handler();

var wind_size_height=window.innerHeight;
var wind_size_width=window.innerWidth;
var val=30;
var scroll_val;
var margn=90;
var brand_lenght;

function mobile_view()
{
    document.querySelector(".main_body_div").classList.remove("main_body_div_desktop");
    console.log("Mobile view");
    document.querySelector(".gear1").classList.remove("gear1_d");
    document.querySelector(".gear2").classList.remove("gear2_d");
    document.querySelector(".brand").classList.remove("brand_d");
    document.querySelector(".gear_logo").classList.remove("gear_logo_d");
    brand_lenght=400;
}

function desktop_view()
{
    document.querySelector(".main_body_div").classList.remove("main_body_div_mobile");
    console.log("Desktop view");
    document.querySelector(".gear1").classList.remove("gear1_m");
    document.querySelector(".gear2").classList.remove("gear2_m");
    document.querySelector(".brand").classList.remove("brand_m");
    document.querySelector(".gear_logo").classList.remove("gear_logo_m");
    brand_lenght=662;
}


function load_page_event_handler()  //730 539
{
    console.log("Page loaded");
}


function myAnimation2()
{    
    wind_size_height=window.innerHeight;
    wind_size_width=window.innerWidth;
    //window.location.reload();   
}


function myAnimation1()
{    
    val=(window.scrollY/4)+30;
    var rot1_val=(window.scrollY/10);
    var rot2_val=(window.scrollY/5);
    //margn=(window.scrollY/20);
    

    if(window.scrollY>scroll_val)
    {
        document.querySelector(".gear1").style.transform="rotate(-"+rot1_val+"deg)";
        document.querySelector(".gear2").style.transform="rotate("+rot2_val+"deg)";
        
    }
    else if(window.scrollY<scroll_val)
    {
        document.querySelector(".gear1").style.transform="rotate(-"+rot1_val+"deg)";
        document.querySelector(".gear2").style.transform="rotate("+rot2_val+"deg)";
    }

    
    if(window.scrollY>1000 && window.scrollY>scroll_val && margn>=-280)
    {
        margn-=20;
        document.querySelector(".gear_logo").style.marginTop=`${margn}px`;
        //document.querySelector(".gear_logo").style.position="static";
    }
    else if(window.scrollY<scroll_val && window.scrollY<=1000 && margn<=40)
    {
        margn+=20;
        document.querySelector(".gear_logo").style.marginTop=`${margn}px`;
        //document.querySelector(".gear_logo").style.position="fixed";
    }
    
    scroll_val=window.scrollY;
    
}



function fx_body_load()
{
    console.log("Hello world");
    //alert(wind_size_height+"  "+wind_size_width);
    (wind_size_width<600)?mobile_view():desktop_view();
    
    //document.querySelector(".gear_logo").style.left=`${(wind_size_width/2)-(brand_lenght/2)}px`;
    //document.querySelector(".gear_logo").style.width=`${brand_lenght}px`
    
    document.querySelector(".gear_logo").style.visibility="visible";
}