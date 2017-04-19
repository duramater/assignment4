// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
  // Magic!
  console.log('Keepin\'n it clean with an external script!');
})();

(function () {
	$('.flexsearch-input').keyup(function () {
		$.ajax({
			type: 'GET',
			dataType: 'json',
			url: "http://www.mattbowytz.com/simple_api.json?data=all"
		}).done(function (data) {
			var curr = $('.flexsearch-input').val().toLowerCase();
			var searchList = '';
			$.each(data.data, function (heading, listing) {
				var varList = '';
				$.each(data.data[heading], function (index, listing) {
					if (listing.toLowerCase().indexOf(curr) === 0) {
						varList = varList + '<ul><li> <a href="http://google.com/#q=' + listing + '" target="_blank">' + listing + '</a></li></ul>';
					}
				});
				if (varList.length > 0) {
					searchList += '<h2>' + heading.toUpperCase() + '</h2>';
					searchList += '<ul>' + varList.italics() + '</ul>';
				}
				else {
					searchList = '';
				}
			});
			$.fx.speeds.xslow = 3000;
			$('.searchList').html(searchList);
		});
	});
})();