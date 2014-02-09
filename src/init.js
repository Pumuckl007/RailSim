(function(){
	window.Railsim = {};
	Railsim.Windowmanager = {};
	var screennames = [
		"mainmenu"
	]
	var manager = Railsim.Windowmanager;
	manager.screens = {};
	for(var i = 0; i < screennames.length; i++){
		var screen = document.createElement("iframe");
		screen.src = "screens/" + screennames[i] + ".html";
		document.getElementById("main").appendChild(screen);

	}
	manager.setVisible = function(screen){

	}
})();