//funtion for next slider button

$("#next").click(function(){
    
    if($(".active").attr("src")== undefined){
                
        $(".row img").removeClass();
        $(".row img").eq(0).addClass("active");
        var imgsrc = $(".row img").eq(0).attr("src");
        setmodal(imgsrc); //goes to function.js page to pick the function
        $("#modal-img").attr("src",imgsrc);

        $(".row").find("*").css("outline","0px");
        $(".active").parents(".thumbnail").css("outline","5px ridge chartreuse");
        $("#myModal").modal({show:true}).modal({keyboard:true});  
        
    }else{
        if($(".active").index("img")> $(".row img").length){
        alert ("End of images");
        }else{          
    
        var actimg = $(".active").parentsUntil(".row").next().find("img");
        $(".row img").removeClass();
        $(actimg).addClass("active");
        var imgsrc2 = actimg.attr("src");
        setmodal(imgsrc2);    //goes to function.js page to pick the function
        $("#modal-img").attr("src",imgsrc2);

        $(".row").find("*").css("outline","0px");
        $(".active").parents(".thumbnail").css("outline","5px ridge chartreuse");
        $("#myModal").modal("hide");       
        $("#myModal").modal({show:true}).modal({keyboard:true}); 
    
    }};
        
});

//funtion for Prev slider button

$("#previous").click(function(){
    
    if($(".active").attr("src")== undefined){
                
        $(".row img").removeClass();
        $(".row img").last().addClass("active");
        var imgsrc = $(".row img").last().attr("src");
        setmodal(imgsrc); //goes to function.js page to pick the function
        $("#modal-img").attr("src",imgsrc);

        $(".row").find("*").css("outline","0px");
        $(".active").parents(".thumbnail").css("outline","5px ridge chartreuse");
        $("#myModal").modal({show:true}).modal({keyboard:true});  
        
    }else{
        if($(".active").index("img")== 2){
        alert ("End of images");
        }else{          
    
        var actimg = $(".active").parentsUntil(".row").prev().find("img");
        $(".row img").removeClass();
        $(actimg).addClass("active");
        var imgsrc2 = actimg.attr("src");
        setmodal(imgsrc2);  //goes to function.js page to pick the function
        $("#modal-img").attr("src",imgsrc2);

        $(".row").find("*").css("outline","0px");
        $(".active").parents(".thumbnail").css("outline","5px ridge chartreuse");
        $("#myModal").modal("hide");       
        $("#myModal").modal({show:true}).modal({keyboard:true}); 
    
    }};
        
});










