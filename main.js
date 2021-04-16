function signUp(){ 
$("#btn2").click(function(){
	$("#student").show()
	$("#btn1").hide()
	$("#btn2").hide()
	$("#btn3").hide()
	$("#btn4").show()
	// $("#btn4").hide()
	$(".check").show()
	$("#student1").show()
	// $("#btn4").css({"transform": "translateY(-950px)"})
	$(".check").css({"transform": "translateY(-900px)"})


    $("#box").css( {"transform": "translateY(-50%)"})
})}

function logIn(){
	$("#btn1").click(function(){
		$("#student1").hide()
		$("#password").show()
		$("#E-mail").show()
		$("#btn1").hide()
	    $("#btn2").hide()
	    $("#btn3").show()




    $("#box").css( {"transform": "translateY(-80%)"})
	})
}

function next(){ 
$("#btn4").click(function(){

    $("#student1").hide()
	$("#student").hide()
	$("#adress").show()
	$("#btn1").hide()
	$("#btn2").hide()
	$("#btn4").hide()
	$("#btn3").show()
    $(".check").hide()
	$("#first").show()
	$("#fullName").show()
    $("#number").show()
    $("#E-mail").show()
    $("#password").show()
    $("#box").css( {"transform": "translateY(-50%)"})
    $("#btn3").css({"transform": "translateY(-950px)"})

})}



