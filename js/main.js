var $form = $('.form');
var $item = $('.item');


$form.on('click', function (e) {
	e.preventDefault();

	$item.append($item.val());
		

})