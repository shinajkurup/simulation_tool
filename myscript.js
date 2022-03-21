
//the below creates the images and displays on the main page.

function setimg(give){
    var i;
    $(".row").empty();
    for(i=0; i<give.length; i++){
    if(give.length<16){
        $(".row").append("<div class='col-sm-3' id=a"+i+"></div>");
    } else {$(".row").append("<div class='col-sm-2' id=a"+i+"></div>");};  
 
    $("#a"+i).append("<div class='thumbnail' id=b"+i+"></div>");
    $("#b"+i).append("<img style='width:100%' src="+give[i]+">");
    }; 
}
 
//function for modal...

$(window).load(function(){
 $(".row").on("click","img",(function(){
     
    if($(this).attr("class")!=="active"){
        $(".row img").removeClass();
        $(this).addClass("active");
    };
     
    var imgsrc = $(this).attr("src");
     
    setmodal(imgsrc);//goes to function.js page to pick the function
     
     $("#modal-img").attr("src",imgsrc);

     $(".row").find("*").css("outline","0px");
     $(this).parents(".thumbnail").css("outline","5px ridge chartreuse");
     $("#myModal").modal({show:true}).modal({keyboard:true});     
     
}));
});


//function for dropdown nav menu

$(document).ready(function(){
  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});

//hide and display footer slider

$("#footerslide").click(function(){
    $("footer").animate({width:'toggle'});
});


//Adding text in the footer textarea on click of each dropdown option in nav bar

$("#level3id-1").click(function(){
   $("#footertxtar").val('1. User has an Outlook issue. \r\n2. Checked mailcloud policy.\r\n3. Installed Certificates. \r\n4. Created test profile.\r\n5. User able to see mail.\r\n6. Closing the ticket.');
    
});
$("#level3id-2").click(function(){
   $("#footertxtar").val('1. User has an Outlook issue. \r\n2. Checked mailcloud policy.\r\n3. Installed Certificates. \r\n4. Created test profile.\r\n5. User able to see mail.\r\n6. Closing the ticket.');
    
});
$("#level3id-3").click(function(){
   $("#footertxtar").val('1. User has an Outlook issue. \r\n2. Checked mailcloud policy.\r\n3. Installed Certificates. \r\n4. Created test profile.\r\n5. User able to see mail.\r\n6. Closing the ticket.');
});
$("#level3id-4").click(function(){
   $("#footertxtar").val('1. User calls in stating that he is not able to login to bit locker. \r\n2. Agent need to login to MFA portal to check if user is registered for MFA. If yes then authenticate the user via MFA portal. \r\n3. If user is authenticated successfully then ask user to provide the Serial number by pressing ESC key on the bit locker screen on users machine. \r\n4. Login to EPO Portal and use you admin credentials to login to server. \r\n5. Click on Menu on the top left corner of the screen to find more option on EPO. \r\n6. Once agent find more option click on MacAfee management of Native encryption ( Under Data protection). \r\n7. Once agent move to the next page, Agent need to enter the serial number of bit locker recovery key ID to generate the recovery keys. \r\n9. Provide the recovery key (48 digit key) to the user from the portal and user will be able to see his windows login screen. \r\n10. Ask user to login to windows using NT password. \r\n11. Once the user is logged in successfully to windows. \r\n12. Use a quick search and then find for bit locker (keyword). \r\n13. When agent reach the Bit locker manager, click on change PIN and ask user to enter the new PIN for bit locker. \r\n14. Help the user in clearing TPM and then help the user in reinstalling the TPM/ VPN certificate from Task scheduler. \r\n15. Ask the user to restart the computer and check if the pin works.');
});





















