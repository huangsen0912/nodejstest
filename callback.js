function callback(name){

    console.log(name);//name
}

function say(callback,name){

	callback(name);
}

say(callback,"zhangsan");
