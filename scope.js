var  a =10;

function local(){

	var b=20;
	console.log(a);
	console.log(b);
	c=30;
}
console.log(a);

local();
//console.log(b);//会报错，因为函数内部变量用var来修饰，这样这个变量就是属于这个函数作用于的局部变量

console.log(c);//函数内部不用var来修饰,就会是全局的变量
