//$("li").click(function(){                 //to make the new todo to run as well we will change this 
//	$(this).toggleClass("completed");
//});
$("ul").on("click", "li" , function(){                 
	$(this).toggleClass("completed");
});

//$("span").click(function(event){
//	$(this).parent().fadeOut(500, function(){              //to make the new todo to run as well we will change this 
//		$(this).remove();	
//	});
//	event.stopPropagation();
//});
$("ul").on("click" , "span" ,function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();	
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		var todoText = $(this).val();
		$(this).val(""); //to give us an empty string
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});