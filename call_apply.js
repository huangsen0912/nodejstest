var pet ={
	name:"kitty",
	speak:function(){
		console.log(this.name+" speak");
	
	},
	say:function(say){
		console.log(this.name+"  "+say);
	}	
	
};

var cat = {

	name:"dog"
}

pet.speak.call(cat);

pet.say.call(cat,"hello kitty");
//实现继承
function ppet(){
	this.name="world kitty",
	this.speak=function(){
		console.log(this.name);
	}	
}

function ppdog(){
	
	ppet.call(this);
	//	ppet.apply(this);
	console.log(this.name);
}

var ppdog = new ppdog();
ppdog.speak();
