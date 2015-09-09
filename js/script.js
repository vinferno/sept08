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

    function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement; 
    }

    
    game_ul.onclick = function(event) {
        var target = getEventTarget(event);
        target.style.backgroundColor = "green";
        alert(target.parentNode)
    };



game_list[0].addEventListener('click',function(){
	add_game();
});

