(function($){
	$.fn.tabs = function(){
		var nav = $(this).find('.tabs-nav'),
			navLis = $(this).find('.tabs-nav > ul > li'),
			content = $(this).find('.tabs-content'),
			contentLis = $(this).find('.tabs-content > ul > li');
		$(navLis[0]).addClass('active');
		$(contentLis[0]).addClass('active');
		$.each(navLis, function(i){
			$(this).addClass('tab-nav-'+i);
		});
		$.each(contentLis, function(i){
			$(this).addClass('tab-content-'+i);
		});
		navLis.on('click', function(){
			var data = $(this).attr('class');
			var index = data.lastIndexOf('-');
			data = parseInt(data.substr(index+1));
			var contentLi = $(contentLis[data]);
			navLis.removeClass('active');
			contentLis.removeClass('active');
			contentLi.addClass('active');
			$(this).addClass('active');
		});
	}
})(jQuery);
