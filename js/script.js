var game_ul=document.getElementById('game_ul');
var game_list = game_ul.children;
var add_submit = document.getElementById('add_submit_button');

function add_game(name_value){
	alert(typeof(name_value));
   var new_game = name_value;
   if (new_game===''|| new_game===null){
   	return ;
   }
   var new_li = document.createElement('li');
   new_li.innerText = name_value; 
	game_ul.appendChild(new_li);
	new_li.innerText = name_value; 
	alert(new_game);

};

function get_event_target(event_name) {
    event_name = event_name || window.event;
    return event_name.target || event_name.srcElement; 
};

function get_index(target){
	target_parent= target.parentElement;
	for (i=0;i<target_parent.children.length;i++){
		if (target_parent.children[i] === target){
			
		};
	};
};

game_ul.onclick = function(event) {
    var target = get_event_target(event);
    get_index(target);      
};

game_list[0].addEventListener('click',function(){
	game_list[1].classList.toggle("closed");
	game_list[1].classList.toggle("open");
	//add_game();
});

add_submit.addEventListener('click',function(){
	var name_value = document.getElementById("name_input_box").value;
	add_game(name_value);
	game_list[1].classList.toggle("closed");
	game_list[1].classList.toggle("open");
});
