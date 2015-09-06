//var i=0;
//while(i<99){
//	i++;
//}阻塞在这里

var c=0;

function printIt(){
	console.log(c);
}

function plus(){
	setTimeout(function(){
		c+=1;
	},1000);

}

plus();
printIt();



//var t = true;
//setTimeout(function(){ //异步非阻塞，加到队列后面
//	t=false;
//},2000);
//while(t){
//    console.log('end');  //立即打印end
//}


//var d = 0;
//setTimeout(function(){
//	while(d<50){
//		d++;
//		console.log("settimeout1");
//	}
//},2000);
//setTimeout(function(){
//	while(d<10){
//		d++;
//		console.log("2");
//	}
//},1000);