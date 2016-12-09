$(function() {
	$.ajax({
		url:'https://www.codeschool.com/users/davidgbarbero.json',
		dataType: 'jsonp',
		success: function(response){ 
			$.each(response.courses.completed, function(i,item){
				$('#badges').append('<div class="course"><h3>' + item.title +'</h3><img src="' + item.badge+
				'" /><a class="btn btn-primary" target="_blank" href="' + item.url + '">See Course</a></div>');
				console.log(item.title);
			});
		}
	})

});
