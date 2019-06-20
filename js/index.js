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

// // Select elems where 'attribute' ends with 'Dialog'
// $("[attribute$='Dialog']"); 

// // Selects all divs where attribute is NOT equal to value    
// $("div[attribute!='value']"); 

// // Select all elements that have an attribute whose value is like
// $("[attribute*='value']"); 

// // Select all elements that have an attribute whose value has the word foobar
// $("[attribute~='foobar']"); 

// // Select all elements that have an attribute whose value starts with 'foo' and ends
// //  with 'bar'
// $("[attribute^='foo'][attribute$='bar']");