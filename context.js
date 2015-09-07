
var cat = {
	name:"kitty",
	speak:function(){
		console.log("my name is "+this.name);
		console.log(this===cat);
	}

};

cat.speak();

function pet(words){
	this.words=words;
	console.log(this.words);
	console.log(this===global);
}

pet("kitty");

function kittycat(name){
      this.name=name;
      this.speak=function(){
              console.log("my name "+this.name);
              console.log(this===kittycat);
      }
}
var kittycat = new kittycat("kitty");
kittycat.speak(); 

