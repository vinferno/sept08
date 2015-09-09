var game_ul=document.getElementById('game_ul');

var game_list = game_ul.children;

function add_game(){
   var new_game = prompt('What new game do you want to add?'); 
   if (new_game===''|| new_game===null){
   	return ;
   }
   var new_li = document.createElement('li');
   new_li.innerText = new_game; 
	game_ul.appendChild(new_li);

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

