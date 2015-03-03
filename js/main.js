var $form = $('.form');
var $item = $('.item');
var $list = $('.list');

$form.on('submit', function (e) { 
	e.preventDefault();

	var $li = $('<li>').html($item.val());
	var $button = $('<button class="bg-col">X</button>');
	
	$list.append($li);
	$li.append($button);

	$button.css ({
		'font-family': "Brush Script MT",
		'font-size': '1rem',
		'border': 'solid 1px',
		'border-color': '#ccc',
		'margin-left': '20%',
		'border-radius': '5px',
		'padding': '.5em',
	});
});

$list.on('click', 'li', function () {
	$(this).toggleClass('line');
})
	
$list.on('click', 'button', function () {
	$(this).parent().remove();
})




