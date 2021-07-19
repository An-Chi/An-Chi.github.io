		// document. ready
		document.addEventListener("DOMContentLoaded", () => {

			let navToggle = document.querySelector("#nav-hamburger");
				// let navToggle = document.getElementById("nav-hamburger");
				navToggle.addEventListener("click", () => {
					console.log(navToggle);
					console.log("click toggle");

				}, false);


				// let pageNum = document.getElementsByClassName("page-num");
				let pageNum = document.querySelectorAll(".page-num");
				let swipeGroup = document.querySelectorAll(".swipe-group");
				// for( let i = 0;  i < pageNum.length; i++ ){
				// 	pageNum[i].addEventListener("click", () =>{
				// 		pageNum[i].value = pageNum[i].innerText;
				// 		console.log(pageNum[i].value);
				// 		// console.log("click swipe");
				// 		// swipeGroup.style.display="none";
				// 		let sG = document.querySelector(".sg-"+i);
				// 		sG.style.display="flex";
				// 		// switch panel 

				// 	}, false);
				// }



				let orderOpen = document.querySelector("#nav-order");
				orderOpen.addEventListener("click", () => {
					console.log(orderOpen);
					console.log("click orderOpen");
					// orderOpen

				});




			}); // END