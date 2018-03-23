function find_priority(x){

if(document.getElementById(x).innerHTML==white[3]){prior=5}
if(document.getElementById(x).innerHTML==white[4]){prior=6}
if(document.getElementById(x).innerHTML==white[2]){prior=3}
if(document.getElementById(x).innerHTML==white[1]){prior=4}
if(document.getElementById(x).innerHTML==white[0]){prior=2}
if(document.getElementById(x).innerHTML==white[5]){prior=1}


if(document.getElementById(x).innerHTML==black[3]){prior=5}
if(document.getElementById(x).innerHTML==black[4]){prior=6}
if(document.getElementById(x).innerHTML==black[2]){prior=3}
if(document.getElementById(x).innerHTML==black[1]){prior=4}
if(document.getElementById(x).innerHTML==black[0]){prior=2}
if(document.getElementById(x).innerHTML==black[5]){prior=1}

}
function clear_table(){
	for(var i=0;i<64;i++){
document.getElementsByTagName("p")[i].style.border="0px solid transparent"

}
}
function test_game_over(x,y){/*X-Compt; Y-player*/
	var flag;
	var over_flag=true;
for(var i=0;i<64;i++){
	testplacing(priority_defence_id);
	if(document.getElementsByTagName("P")[i].style.border=="2px solid yellow"){
		var cont=document.getElementsByTagName("P")[i].innerHTML;
		var cont1=document.getElementById(priority_defence_id).innerHTML;
		document.getElementById(priority_defence_id).innerHTML="";
		document.getElementsByTagName("P")[i].innerHTML=x[4];
		 flag=true;
			for(var b=0;b<64;b++){
						testplacing(document.getElementsByTagName("P")[b].getAttribute("id"));
						if(document.getElementsByTagName("P")[i].style.border=="2px solid yellow"){
							flag=false;
					
						}
			}
		if(flag==false){
			document.getElementsByTagName("P")[i].innerHTML=cont;
			document.getElementById(priority_defence_id).innerHTML=cont1;
		}	
		if(flag==true){
			document.getElementsByTagName("P")[i].innerHTML=cont;
			document.getElementById(priority_defence_id).innerHTML=cont1
			over_flag=false;
			break;
		}	


	}/*If i*/

}
if(over_flag==true){
	alert("GAME OvER")
	location.reload()
}
}


function testnodeath(x){
 proceed=true;
for(var i=0;i<64;i++){
testplacing(document.getElementsByTagName("P")[i].getAttribute("id"));
if(document.getElementById(x).style.border=="2px solid yellow"){
	proceed=false;
	break;
}

}
}
function test(x,y){
for(var i=0;i<64;i++){
	if(document.getElementsByTagName("P")[i].innerHTML==y[0]||
	document.getElementsByTagName("P")[i].innerHTML==y[1]||
	document.getElementsByTagName("P")[i].innerHTML==y[2]||
	document.getElementsByTagName("P")[i].innerHTML==y[3]||
	document.getElementsByTagName("P")[i].innerHTML==y[4]||
	document.getElementsByTagName("P")[i].innerHTML==y[5])
		{
			testplacing(document.getElementsByTagName("P")[i].getAttribute("id"))
			for(var b=0;b<64;b++){
				if(document.getElementsByTagName("P")[b].innerHTML==x[4]&&document.getElementsByTagName("P")[b].style.border=="2px solid yellow"){
					priority_defence_id=document.getElementsByTagName("P")[b].getAttribute("id");
					test_game_over(x,y);
					clear_table()
				}

			}
		}


	}

}




