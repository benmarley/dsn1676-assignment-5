var $form = $('.form');
var $item = $('.item');
var $list = $('.list');


$form.on('submit', function (e) { 
	e.preventDefault();

	var $li = $('<li>').html($item.val());
	var $button = $('<button>X</button>');
	
	$list.append($li);
	$li.append($button);

	$button.css ({
		'background-color': '#DDDDDD',
		'margin-right': '0px',
		'font-family': "Brush Script MT",
		'font-size': '1rem',
		'border': 'solid 1px',
		'border-color': '#ccc',
		'position': 'relative',
		'left': '60%',
		'border-radius': '5px',

	});
});

$list.on('click', 'li', function () {
	$(this).toggleClass('line');
})
	
$list.on('click', 'button', function () {
	$(this).parent().remove();
})




