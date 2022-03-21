//function for slideshow

$("#slideshow").click(function(){
   
    let x=0; 
    var timeoutfct= function(){    
        var imgsrc = $(".row img").eq(x).attr("src");
        setmodal(imgsrc);//goes to function.js page to pick the function
        $("#modal-img").attr("src",imgsrc);
        setTimeout($("#myModal").modal({show:true}).modal({keyboard:true}),300);
        x = x +1;   
        
      if(x<=$(".row img").length){  
        setTimeout(timeoutfct, 5000)}
        else {
        alert("Done");
        $("#myModal").modal("hide");
}; }
     
    timeoutfct();
    
});