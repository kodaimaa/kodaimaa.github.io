$(document).ready(function() {
	$("#btnStart").click(function() {
		$("[id^=btnSub]").each(function(){
			if ($(this).hasClass('scale-in')) {
				$(this).addClass('scale-out');
				$(this).removeClass('scale-in');
			}else{
				$(this).addClass('scale-in');
				if ($(this).hasClass('scale-out')) {
			 		$(this).removeClass('scale-out');
			 	}
			} 
		});
	});
});