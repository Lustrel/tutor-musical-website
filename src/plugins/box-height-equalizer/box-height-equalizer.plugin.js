$(document).ready(function(){
	// If window's width is less than 768, we don't need it
	var $window = $(window);
	if($window.width() < 768)
		return;

	console.log('helloooo');
	var $parentRow = $("[box-height-equalizer]");
	var $boxes = $parentRow.find("[box-height-equalized");

	var biggerHeight = getBiggerHeight($boxes);
	equalizeHeight($boxes, biggerHeight);
});

function getBiggerHeight($elements)
{
	var bigger = 0;
	$elements.each(function(){
		var height = $(this).outerHeight;
		bigger = (height > bigger) ? height : bigger;
	});

	return bigger;
}

function equalizeHeight($elements, height)
{
	$elements.each(function(){
		$(this).css({ height: height + 'px' });
	});
}