// document.querySelector("#btnBook").addEventListener("click",function(){
// 	document.querySelector("#secondPage").style.display="none"
// 	document.querySelector("#ThirdPage").style.display="block"
// })

$("#btnBook").click(function(){
	$("#secondPage").hide();
	$("#ThirdPage").show();
})

$("#nextBtn").click(function(){
	$(".container1").hide();
	$("#forthPage").show();

})

$("#goBack").click(function(){
	$(".container1").show();
	$("#forthPage").hide();
})


// var clothesType = $("input[name='check']:checked" ).val();
// var detergentType = $("input[name='detergent']:checked" ).val();
// var machineCapacity = $("input[name='capacity']:checked" ).val();
// var dropInDate = $("#myDate").val();
// var machineNumber = $("#machineNumber").val();
// var position = $("#position").val();
// var dropOffDate = $("#dropOff1").val();
// function values () {
// 	clothesType = $("input[name='check']:checked" ).val();
//     detergentType = $("input[name='detergent']:checked" ).val();
//     machineCapacity = $("input[name='capacity']:checked" ).val();
//     dropInDate = $("#myDate").val();
//     machineNumber = $("#machineNumber").val();
//     position = $("#position").val();
//     dropOffDate = $("#dropOff1").val();
// }
// var clothesType;
// var detergentType;
// var machineCapacity;
// var dropInDate;
// var machineNumber;
// var position;
// var dropOffDate;
// //  $('input').on("click",function(){
// // 	 clothesType = $("input[name='check']:checked").val() + ", ";
// // 	 return clothesType;
// // })

//   $('input').on("click",function(){
// 	detergentType= $("input[name='detergent']:checked").val();
// })
// $('input').on("click",function(){
// 	machineCapacity= $("input[name='capacity']:checked").val();
// })

// function InformationService (){
// 	var info ={};
// 	info.clothesType = clothesType;
// 	info["Type of detergent"] =detergent;
// 	info["Machine Capacity"] = machineCapacity;
// 	info["DropIn Date"]
// 	info["Machine Number"] = machineNumber;
// 	info.["Location"] = position;
// 	info.["DropOff Date"] = dropOffDate;

// 	return info;
// }

// var clothesType = function(){
// 	$('input').on("click",function(){
// 		console.log($("input[name='check']:checked").val();
// 		return $("input[name='check']:checked").val();
// 	})
// }



// // function userInformation (){

// // }


// function total (){

// 	machineCapacity*detergentType*+ 5
// }