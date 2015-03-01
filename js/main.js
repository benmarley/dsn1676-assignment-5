var $form = $('.form');
var $item = $('.item');
var $list = $('.list');

$form.on('submit', function (e) { 
	e.preventDefault();


	var $li = $('<li>').html($item.val());

	$list.append($li);

	

});


