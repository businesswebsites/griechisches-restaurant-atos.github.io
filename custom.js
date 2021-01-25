$(document).ready(function(){
	
	function showWindow(){
		$('#main').show();
		//stop scrolling
		$('html body').css('overflow','hidden');
		//setTimeout(showWindow, 5000);
	}
	//showWindow()
	
	function hideWindow(){
		$('#main').hide();
		//on scrolling
		$('html body').css('overflow','scroll');
	}
	//hideWindow()
	
	
	setTimeout(showWindow, 1000);
	
	$("#close-btn").click(function(){
		hideWindow();
	})
	
})