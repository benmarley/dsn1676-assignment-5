var $form = $('.form');
var $item = $('.item');
var $list = $('.list');

$form.on('submit', function (e) { 
	e.preventDefault();

	var $li = $('<li>').html($item.val());

	$list.append($li);
});

$list.on('click', function () {
	$list.css({
		'color': 'grey',
		'text-decoration': 'line-through',
	});
});


