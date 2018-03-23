var ka="s";
function white1(){
if(document.getElementById("black")!=null){
document.getElementById("black").remove()
document.getElementById("title").remove()
document.getElementById("white").remove()
ka="white"	
document.getElementById("main").style.display="block";}

for(var i=0;i<64;i++){
	if(document.getElementsByTagName('p')[i].innerHTML==black[0]||
	document.getElementsByTagName('p')[i].innerHTML==black[1]||
	document.getElementsByTagName('p')[i].innerHTML==black[2]||
	document.getElementsByTagName('p')[i].innerHTML==black[3]||
	document.getElementsByTagName('p')[i].innerHTML==black[4]||
	document.getElementsByTagName('p')[i].innerHTML==black[5]){
		document.getElementsByTagName('p')[i].draggable=false;
	}
	else {document.getElementsByTagName('p')[i].draggable=true}

}

}

function black1(){
if(document.getElementById("white")!=null){
document.getElementById("black").remove()
document.getElementById("title").remove()
document.getElementById("white").remove()
ka="black"	
document.getElementById("main").style.display="block";}
for(var i=0;i<64;i++){
	if(document.getElementsByTagName('p')[i].innerHTML==white[0]||
	document.getElementsByTagName('p')[i].innerHTML==white[1]||
	document.getElementsByTagName('p')[i].innerHTML==white[2]||
	document.getElementsByTagName('p')[i].innerHTML==white[3]||
	document.getElementsByTagName('p')[i].innerHTML==white[4]||
	document.getElementsByTagName('p')[i].innerHTML==white[5]){
		document.getElementsByTagName('p')[i].draggable=false;
	}
	else {document.getElementsByTagName('p')[i].draggable=true}

}

}



var black=['♜',"♞","♝","♛","♚","♟"];
var white=["♖","♘","♗","♕","♔","♙"];
var c=0;
var a;
var alph=["A","B","C","D","E","F","G","H"];
var chess=[["A","B","C","D","E","F","G","H"],["A","B","C","D","E","F","G","H"],["A","B","C","D","E","F","G","H"],["A","B","C","D","E","F","G","H"],["A","B","C","D","E","F","G","H"],["A","B","C","D","E","F","G","H"],["A","B","C","D","E","F","G","H"],["A","B","C","D","E","F","G","H"]];
for (var i=0;i<chess.length;i++){
for (var a=0;a<chess[i].length;a++){
			if(((i+1)==1||(i+1)==3||(i+1)==5||(i+1)==7)&&(chess[i][a]=="A"||chess[i][a]=="C"||chess[i][a]=="E"||chess[i][a]=="G"))
	{
	document.getElementById("main").innerHTML+="<div style='color:white;background-color:gray;float:left;width:12.5%;height:100px'><p draggable='true' ondrag='kraken(this.id)' ondragend='kraken1(this.id)' ondragover='track(this.id)' id='"+(i+1)+chess[i][a]+"'></p></div>"
	}
			if(((i+1)==1||(i+1)==3||(i+1)==5||(i+1)==7)&&(chess[i][a]=="B"||chess[i][a]=="D"||chess[i][a]=="F"||chess[i][a]=="H"))
	{
	document.getElementById("main").innerHTML+="<div style='color:white;background-color:black;float:left;width:12.5%;height:100px'><p draggable='true' ondrag='kraken(this.id)' ondragend='kraken1(this.id)' ondragover='track(this.id)'  id='"+(i+1)+chess[i][a]+"'></p></div>"
	}
      		if(((i+1)==2||(i+1)==4||(i+1)==6||(i+1)==8)&&(chess[i][a]=="A"||chess[i][a]=="C"||chess[i][a]=="E"||chess[i][a]=="G"))
	{
	document.getElementById("main").innerHTML+="<div style='color:white;background-color:black;float:left;width:12.5%;height:100px'><p draggable='true' ondrag='kraken(this.id)' ondragend='kraken1(this.id)' ondragover='track(this.id)'  id='"+(i+1)+chess[i][a]+"'></p></div>"
	}
   		    if(((i+1)==2||(i+1)==4||(i+1)==6||(i+1)==8)&&(chess[i][a]=="B"||chess[i][a]=="D"||chess[i][a]=="F"||chess[i][a]=="H"))
	{
	document.getElementById("main").innerHTML+="<div style='color:white;background-color:gray;float:left;width:12.5%;height:100px'><p draggable='true' ondrag='kraken(this.id)' ondragend='kraken1(this.id)' ondragover='track(this.id)'  id='"+(i+1)+chess[i][a]+"'></p></div>"
	}

}

}
function initial_placing (){
document.getElementById("1A").innerHTML="♜";
document.getElementById("1B").innerHTML="&#9822";
document.getElementById("1C").innerHTML="&#9821";
document.getElementById("1D").innerHTML="&#9819";
document.getElementById("1E").innerHTML="&#9818";
document.getElementById("1F").innerHTML="&#9821";
document.getElementById("1G").innerHTML="&#9822";
document.getElementById("1H").innerHTML="&#9820";
for(var i=0;i<8;i++){
document.getElementById(7+alph[i]).innerHTML="&#9817;";
document.getElementById(2+alph[i]).innerHTML="&#9823;";
}


document.getElementById("8A").innerHTML="&#9814";
document.getElementById("8B").innerHTML="&#9816";
document.getElementById("8C").innerHTML="&#9815";
document.getElementById("8D").innerHTML="♕";
document.getElementById("8E").innerHTML="&#9812";
document.getElementById("8F").innerHTML="&#9815";
document.getElementById("8G").innerHTML="&#9816";
document.getElementById("8H").innerHTML="&#9814";

}
initial_placing();




function testplacing(id){
for(var a=0;a<64;a++){
document.getElementsByTagName("P")[a].style.border="0px solid transparent"

}
var my_id="";
var pos_id="";
var at_forward="";
var my_id_alph="";


if (document.getElementById(id).innerHTML=="♟")
{
	peska_move();
	function peska_move()
	{
	my_id=id.split("");
	var ind1=parseInt(my_id[0]);
	var alph1=my_id[1];
	var alph_ind=alph.indexOf(alph1);

		if((id=="2A"||id=="2B"||id=="2C"||id=="2D"||id=="2E"||id=="2F"||id=="2G"||id=="2H")&&(document.getElementById((ind1+2)+alph1).innerHTML==""))
		{
document.getElementById((ind1+2)+alph1).style.border="2px solid yellow"
	}
     
	if(document.getElementById((ind1+1)+alph1)!=null && document.getElementById((ind1+1)+alph1).innerHTML=="")
		{
	document.getElementById((ind1+1)+alph1).style.border="2px solid yellow"
		}	
    	if(document.getElementById((ind1+1)+alph[alph_ind+1])!=null && (document.getElementById((ind1+1)+alph[alph_ind+1]).innerHTML==white[0]||
document.getElementById((ind1+1)+alph[alph_ind+1]).innerHTML==white[1]||document.getElementById((ind1+1)+alph[alph_ind+1]).innerHTML==white[2]||
document.getElementById((ind1+1)+alph[alph_ind+1]).innerHTML==white[3]||document.getElementById((ind1+1)+alph[alph_ind+1]).innerHTML==white[4]||
document.getElementById((ind1+1)+alph[alph_ind+1]).innerHTML==white[5]) ){

		document.getElementById((ind1+1)+alph[alph_ind+1]).style.border="2px solid yellow"
	}
           	if(document.getElementById((ind1+1)+alph[alph_ind-1])!=null && (document.getElementById((ind1+1)+alph[alph_ind-1]).innerHTML==white[0]||
document.getElementById((ind1+1)+alph[alph_ind-1]).innerHTML==white[1]||document.getElementById((ind1+1)+alph[alph_ind-1]).innerHTML==white[2]||
document.getElementById((ind1+1)+alph[alph_ind-1]).innerHTML==white[3]||document.getElementById((ind1+1)+alph[alph_ind-1]).innerHTML==white[4]||
document.getElementById((ind1+1)+alph[alph_ind-1]).innerHTML==white[5]) ){

		document.getElementById((ind1+1)+alph[alph_ind-1]).style.border="2px solid yellow"
	}

	}
}

if (document.getElementById(id).innerHTML=="♙"){
peska_move1();
function peska_move1()
	{
	my_id=id.split("");
	var ind1=parseInt(my_id[0]);
	var alph1=my_id[1];
	var alph_ind=alph.indexOf(alph1);
	if((id=="7A"||id=="7B"||id=="7C"||id=="7D"||id=="7E"||id=="7F"||id=="7G"||id=="7H")&&document.getElementById((ind1-2)+alph1).innerHTML==""){
document.getElementById((ind1-2)+alph1).style.border="2px solid yellow"

	}

	if(document.getElementById((ind1-1)+alph1)!=null && document.getElementById((ind1-1)+alph1).innerHTML=="")
		{
	document.getElementById((ind1-1)+alph1).style.border="2px solid yellow"
		}	

				if(document.getElementById((ind1-1)+alph[alph_ind+1])!=null && (document.getElementById((ind1-1)+alph[alph_ind+1]).innerHTML==black[0]||
		document.getElementById((ind1-1)+alph[alph_ind+1]).innerHTML==black[1]||document.getElementById((ind1-1)+alph[alph_ind+1]).innerHTML==black[2]||
		document.getElementById((ind1-1)+alph[alph_ind+1]).innerHTML==black[3]||document.getElementById((ind1-1)+alph[alph_ind+1]).innerHTML==black[4]||
		document.getElementById((ind1-1)+alph[alph_ind+1]).innerHTML==black[5]) )
		{

		document.getElementById((ind1-1)+alph[alph_ind+1]).style.border="2px solid yellow"
			}
		if(document.getElementById((ind1-1)+alph[alph_ind-1])!=null && (document.getElementById((ind1-1)+alph[alph_ind-1]).innerHTML==black[0]||
	document.getElementById((ind1-1)+alph[alph_ind-1]).innerHTML==black[1]||document.getElementById((ind1-1)+alph[alph_ind-1]).innerHTML==black[2]||
	document.getElementById((ind1-1)+alph[alph_ind-1]).innerHTML==black[3]||document.getElementById((ind1-1)+alph[alph_ind-1]).innerHTML==black[4]||
	document.getElementById((ind1-1)+alph[alph_ind-1]).innerHTML==black[5]) )
		{

		document.getElementById((ind1-1)+alph[alph_ind-1]).style.border="2px solid yellow"
		}

	}


}

/*Top Function */
if (document.getElementById(id).innerHTML=="♜")
{	
topmove(black,white);

}
function topmove(xa,ya){
my_id=id.split("");
var b=true;
alph_num=alph.indexOf(my_id[1]);
int_fun=parseInt(my_id[0]);

for(var a=1;a<=(8-int_fun);a++){

	if(document.getElementById((int_fun+a)+my_id[1]).innerHTML==xa[0]||
document.getElementById((int_fun+a)+my_id[1]).innerHTML==xa[1]||
document.getElementById((int_fun+a)+my_id[1]).innerHTML==xa[2]||
document.getElementById((int_fun+a)+my_id[1]).innerHTML==xa[3]||
document.getElementById((int_fun+a)+my_id[1]).innerHTML==xa[4]||
document.getElementById((int_fun+a)+my_id[1]).innerHTML==xa[5])
		{break;};

	document.getElementById((int_fun+a)+my_id[1]).style.border="2px solid yellow";

if(document.getElementById((int_fun+a)+my_id[1]).innerHTML==ya[0]||
document.getElementById((int_fun+a)+my_id[1]).innerHTML==ya[1]||
document.getElementById((int_fun+a)+my_id[1]).innerHTML==ya[2]||
document.getElementById((int_fun+a)+my_id[1]).innerHTML==ya[3]||
document.getElementById((int_fun+a)+my_id[1]).innerHTML==ya[4]||
document.getElementById((int_fun+a)+my_id[1]).innerHTML==ya[5])
		{break;};	


}

for(var a=1;a<int_fun;a++){

	if(document.getElementById((int_fun-a)+my_id[1]).innerHTML==xa[0]||
document.getElementById((int_fun-a)+my_id[1]).innerHTML==xa[1]||
document.getElementById((int_fun-a)+my_id[1]).innerHTML==xa[2]||
document.getElementById((int_fun-a)+my_id[1]).innerHTML==xa[3]||
document.getElementById((int_fun-a)+my_id[1]).innerHTML==xa[4]||
document.getElementById((int_fun-a)+my_id[1]).innerHTML==xa[5])
		{break;};

	document.getElementById((int_fun-a)+my_id[1]).style.border="2px solid yellow";

	if(document.getElementById((int_fun-a)+my_id[1]).innerHTML==ya[0]||
document.getElementById((int_fun-a)+my_id[1]).innerHTML==ya[1]||
document.getElementById((int_fun-a)+my_id[1]).innerHTML==ya[2]||
document.getElementById((int_fun-a)+my_id[1]).innerHTML==ya[3]||
document.getElementById((int_fun-a)+my_id[1]).innerHTML==ya[4]||
document.getElementById((int_fun-a)+my_id[1]).innerHTML==ya[5])
		{break;};

}

for(var b=alph_num+1;b<8;b++){
	if(document.getElementById(int_fun+alph[b]).innerHTML==xa[0]||
document.getElementById(int_fun+alph[b]).innerHTML==xa[1]||
document.getElementById(int_fun+alph[b]).innerHTML==xa[2]||
document.getElementById(int_fun+alph[b]).innerHTML==xa[3]||
document.getElementById(int_fun+alph[b]).innerHTML==xa[4]||
document.getElementById(int_fun+alph[b]).innerHTML==xa[5])
		{break;}

	document.getElementById(int_fun+alph[b]).style.border="2px solid yellow";

	if(document.getElementById(int_fun+alph[b]).innerHTML==ya[0]||
document.getElementById(int_fun+alph[b]).innerHTML==ya[1]||
document.getElementById(int_fun+alph[b]).innerHTML==ya[2]||
document.getElementById(int_fun+alph[b]).innerHTML==ya[3]||
document.getElementById(int_fun+alph[b]).innerHTML==ya[4]||
document.getElementById(int_fun+alph[b]).innerHTML==ya[5])
		{break;}
}
for(var b=alph_num-1;b>-1;b--){

	if(document.getElementById(int_fun+alph[b]).innerHTML==xa[0]||
document.getElementById(int_fun+alph[b]).innerHTML==xa[1]||
document.getElementById(int_fun+alph[b]).innerHTML==xa[2]||
document.getElementById(int_fun+alph[b]).innerHTML==xa[3]||
document.getElementById(int_fun+alph[b]).innerHTML==xa[4]||
document.getElementById(int_fun+alph[b]).innerHTML==xa[5])
		{break;}

	document.getElementById(int_fun+alph[b]).style.border="2px solid yellow";

	if(document.getElementById(int_fun+alph[b]).innerHTML==ya[0]||
document.getElementById(int_fun+alph[b]).innerHTML==ya[1]||
document.getElementById(int_fun+alph[b]).innerHTML==ya[2]||
document.getElementById(int_fun+alph[b]).innerHTML==ya[3]||
document.getElementById(int_fun+alph[b]).innerHTML==ya[4]||
document.getElementById(int_fun+alph[b]).innerHTML==ya[5])
		{break;}
}

}




if (document.getElementById(id).innerHTML=="♖")
{	
topmove(white,black);



}






/*Top Function END*/
/*FIl Function */

if (document.getElementById(id).innerHTML=="♝")
	{
		filmove(black,white);
	
}
	function filmove(xa,ya){
	my_id=id.split("");
	var num1=parseInt(my_id[0]);
	var index1=alph.indexOf(my_id[1]);
	num1++;
	index1++;
	while(document.getElementById(num1+alph[index1])!=null )
	{
		if(document.getElementById(num1+alph[index1]).innerHTML==xa[0]||
		document.getElementById(num1+alph[index1]).innerHTML==xa[1]||
		document.getElementById(num1+alph[index1]).innerHTML==xa[2]||
		document.getElementById(num1+alph[index1]).innerHTML==xa[3]||
		document.getElementById(num1+alph[index1]).innerHTML==xa[4]||
		document.getElementById(num1+alph[index1]).innerHTML==xa[5]){break;}

		document.getElementById(num1+alph[index1]).style.border="2px solid yellow";
		if(document.getElementById(num1+alph[index1]).innerHTML==ya[0]||
document.getElementById(num1+alph[index1]).innerHTML==ya[1]||
document.getElementById(num1+alph[index1]).innerHTML==ya[2]||
document.getElementById(num1+alph[index1]).innerHTML==ya[3]||
document.getElementById(num1+alph[index1]).innerHTML==ya[4]||
document.getElementById(num1+alph[index1]).innerHTML==ya[5]){break;}
		num1++;
		index1++;



	}
	var num1=parseInt(my_id[0]);
	var index1=alph.indexOf(my_id[1]);
	num1++;
	index1--;
	while(document.getElementById(num1+alph[index1])!=null )
	{

			if(document.getElementById(num1+alph[index1]).innerHTML==xa[0]||
document.getElementById(num1+alph[index1]).innerHTML==xa[1]||
document.getElementById(num1+alph[index1]).innerHTML==xa[2]||
document.getElementById(num1+alph[index1]).innerHTML==xa[3]||
document.getElementById(num1+alph[index1]).innerHTML==xa[4]||
document.getElementById(num1+alph[index1]).innerHTML==xa[5]){break;}
		document.getElementById(num1+alph[index1]).style.border="2px solid yellow";
		if(document.getElementById(num1+alph[index1]).innerHTML==ya[0]||
document.getElementById(num1+alph[index1]).innerHTML==ya[1]||
document.getElementById(num1+alph[index1]).innerHTML==ya[2]||
document.getElementById(num1+alph[index1]).innerHTML==ya[3]||
document.getElementById(num1+alph[index1]).innerHTML==ya[4]||
document.getElementById(num1+alph[index1]).innerHTML==ya[5]){break;}
		num1++;
		index1--;


	}
	var num1=parseInt(my_id[0]);
	var index1=alph.indexOf(my_id[1]);
	num1--;
	index1++;
	while(document.getElementById(num1+alph[index1])!=null )
	{
		if(document.getElementById(num1+alph[index1]).innerHTML==xa[0]||
document.getElementById(num1+alph[index1]).innerHTML==xa[1]||
document.getElementById(num1+alph[index1]).innerHTML==xa[2]||
document.getElementById(num1+alph[index1]).innerHTML==xa[3]||
document.getElementById(num1+alph[index1]).innerHTML==xa[4]||
document.getElementById(num1+alph[index1]).innerHTML==xa[5]){break;}
		document.getElementById(num1+alph[index1]).style.border="2px solid yellow";
		if(document.getElementById(num1+alph[index1]).innerHTML==ya[0]||
document.getElementById(num1+alph[index1]).innerHTML==ya[1]||
document.getElementById(num1+alph[index1]).innerHTML==ya[2]||
document.getElementById(num1+alph[index1]).innerHTML==ya[3]||
document.getElementById(num1+alph[index1]).innerHTML==ya[4]||
document.getElementById(num1+alph[index1]).innerHTML==ya[5]){break;}
		num1--;
		index1++;


	}
	var num1=parseInt(my_id[0]);
	var index1=alph.indexOf(my_id[1]);
	num1--;
	index1--;
	while(document.getElementById(num1+alph[index1])!=null )
	{
	if(document.getElementById(num1+alph[index1]).innerHTML==xa[0]||
document.getElementById(num1+alph[index1]).innerHTML==xa[1]||
document.getElementById(num1+alph[index1]).innerHTML==xa[2]||
document.getElementById(num1+alph[index1]).innerHTML==xa[3]||
document.getElementById(num1+alph[index1]).innerHTML==xa[4]||
document.getElementById(num1+alph[index1]).innerHTML==xa[5]){break}

		document.getElementById(num1+alph[index1]).style.border="2px solid yellow";
		if(document.getElementById(num1+alph[index1]).innerHTML==ya[0]||
document.getElementById(num1+alph[index1]).innerHTML==ya[1]||
document.getElementById(num1+alph[index1]).innerHTML==ya[2]||
document.getElementById(num1+alph[index1]).innerHTML==ya[3]||
document.getElementById(num1+alph[index1]).innerHTML==ya[4]||
document.getElementById(num1+alph[index1]).innerHTML==ya[5]){break}
		num1--;
		index1--;


	}
}

if (document.getElementById(id).innerHTML=="♗")
	{
		filmove(white,black);
		}



/*Fil Function END*/
/*At Function */
if (document.getElementById(id).innerHTML=="♞")
{

	at_move(white);

	

}


function at_move(xa){
		my_id=id.split('');
		var ind1=parseInt(my_id[0]);
		var alph1=alph.indexOf(my_id[1]);
			if(document.getElementById((ind1-2)+alph[alph1-1])!=null &&(document.getElementById((ind1-2)+alph[alph1-1]).innerHTML==""||document.getElementById((ind1-2)+alph[alph1-1]).innerHTML==xa[0]
||document.getElementById((ind1-2)+alph[alph1-1]).innerHTML==xa[1]
||document.getElementById((ind1-2)+alph[alph1-1]).innerHTML==xa[2]
||document.getElementById((ind1-2)+alph[alph1-1]).innerHTML==xa[3]
||document.getElementById((ind1-2)+alph[alph1-1]).innerHTML==xa[4]
||document.getElementById((ind1-2)+alph[alph1-1]).innerHTML==xa[5]


				)){document.getElementById((ind1-2)+alph[alph1-1]).style.border="2px solid yellow"};
			if(document.getElementById((ind1-2)+alph[alph1+1])!=null &&(document.getElementById((ind1-2)+alph[alph1+1]).innerHTML==""||document.getElementById((ind1-2)+alph[alph1+1]).innerHTML==xa[0]
||document.getElementById((ind1-2)+alph[alph1+1]).innerHTML==xa[1]
||document.getElementById((ind1-2)+alph[alph1+1]).innerHTML==xa[2]
||document.getElementById((ind1-2)+alph[alph1+1]).innerHTML==xa[3]
||document.getElementById((ind1-2)+alph[alph1+1]).innerHTML==xa[4]
||document.getElementById((ind1-2)+alph[alph1+1]).innerHTML==xa[5]


				)){document.getElementById((ind1-2)+alph[alph1+1]).style.border="2px solid yellow"};
			if(document.getElementById((ind1+2)+alph[alph1-1])!=null &&(document.getElementById((ind1+2)+alph[alph1-1]).innerHTML==""||document.getElementById((ind1+2)+alph[alph1-1]).innerHTML==xa[0]
||document.getElementById((ind1+2)+alph[alph1-1]).innerHTML==xa[1]
||document.getElementById((ind1+2)+alph[alph1-1]).innerHTML==xa[2]
||document.getElementById((ind1+2)+alph[alph1-1]).innerHTML==xa[3]
||document.getElementById((ind1+2)+alph[alph1-1]).innerHTML==xa[4]
||document.getElementById((ind1+2)+alph[alph1-1]).innerHTML==xa[5]


				)){document.getElementById((ind1+2)+alph[alph1-1]).style.border="2px solid yellow"};
			if(document.getElementById((ind1+2)+alph[alph1+1])!=null &&(document.getElementById((ind1+2)+alph[alph1+1]).innerHTML==""||document.getElementById((ind1+2)+alph[alph1+1]).innerHTML==xa[0]
||document.getElementById((ind1+2)+alph[alph1+1]).innerHTML==xa[1]
||document.getElementById((ind1+2)+alph[alph1+1]).innerHTML==xa[2]
||document.getElementById((ind1+2)+alph[alph1+1]).innerHTML==xa[3]
||document.getElementById((ind1+2)+alph[alph1+1]).innerHTML==xa[4]
||document.getElementById((ind1+2)+alph[alph1+1]).innerHTML==xa[5]


				)){document.getElementById((ind1+2)+alph[alph1+1]).style.border="2px solid yellow"};
			if(document.getElementById((ind1-1)+alph[alph1+2])!=null &&(document.getElementById((ind1-1)+alph[alph1+2]).innerHTML==""||document.getElementById((ind1-1)+alph[alph1+2]).innerHTML==xa[0]
||document.getElementById((ind1-1)+alph[alph1+2]).innerHTML==xa[1]
||document.getElementById((ind1-1)+alph[alph1+2]).innerHTML==xa[2]
||document.getElementById((ind1-1)+alph[alph1+2]).innerHTML==xa[3]
||document.getElementById((ind1-1)+alph[alph1+2]).innerHTML==xa[4]
||document.getElementById((ind1-1)+alph[alph1+2]).innerHTML==xa[5]


				)){document.getElementById((ind1-1)+alph[alph1+2]).style.border="2px solid yellow"};
			if(document.getElementById((ind1+1)+alph[alph1+2])!=null &&(document.getElementById((ind1+1)+alph[alph1+2]).innerHTML==""||document.getElementById((ind1+1)+alph[alph1+2]).innerHTML==xa[0]
||document.getElementById((ind1+1)+alph[alph1+2]).innerHTML==xa[1]
||document.getElementById((ind1+1)+alph[alph1+2]).innerHTML==xa[2]
||document.getElementById((ind1+1)+alph[alph1+2]).innerHTML==xa[3]
||document.getElementById((ind1+1)+alph[alph1+2]).innerHTML==xa[4]
||document.getElementById((ind1+1)+alph[alph1+2]).innerHTML==xa[5]


				)){document.getElementById((ind1+1)+alph[alph1+2]).style.border="2px solid yellow"};
			if(document.getElementById((ind1-1)+alph[alph1-2])!=null &&(document.getElementById((ind1-1)+alph[alph1-2]).innerHTML==""||document.getElementById((ind1-1)+alph[alph1-2]).innerHTML==xa[0]
||document.getElementById((ind1-1)+alph[alph1-2]).innerHTML==xa[1]
||document.getElementById((ind1-1)+alph[alph1-2]).innerHTML==xa[2]
||document.getElementById((ind1-1)+alph[alph1-2]).innerHTML==xa[3]
||document.getElementById((ind1-1)+alph[alph1-2]).innerHTML==xa[4]
||document.getElementById((ind1-1)+alph[alph1-2]).innerHTML==xa[5]


				)){document.getElementById((ind1-1)+alph[alph1-2]).style.border="2px solid yellow"};
			if(document.getElementById((ind1+1)+alph[alph1-2])!=null &&(document.getElementById((ind1+1)+alph[alph1-2]).innerHTML==""||document.getElementById((ind1+1)+alph[alph1-2]).innerHTML==xa[0]
||document.getElementById((ind1+1)+alph[alph1-2]).innerHTML==xa[1]
||document.getElementById((ind1+1)+alph[alph1-2]).innerHTML==xa[2]
||document.getElementById((ind1+1)+alph[alph1-2]).innerHTML==xa[3]
||document.getElementById((ind1+1)+alph[alph1-2]).innerHTML==xa[4]
||document.getElementById((ind1+1)+alph[alph1-2]).innerHTML==xa[5]


				)){document.getElementById((ind1+1)+alph[alph1-2]).style.border="2px solid yellow"};		
		}



if (document.getElementById(id).innerHTML=="♘")
{

	at_move(black);

	
}

/*At function*/
/*Vezir Funktion*/
if (document.getElementById(id).innerHTML=="♛"){
filmove(black,white);
topmove(black,white);
}
if(document.getElementById(id).innerHTML=="♕"){

	filmove(white,black);
	topmove(white,black);
}

/*Vezir Function */

/*Sah Function*/


if (document.getElementById(id).innerHTML=="♚")
{
sah_move(white)
}
function sah_move(xa){	
my_id=id.split("");
var num1=parseInt(my_id[0]);
var index1=alph.indexOf(my_id[1]);
if(document.getElementById((num1+1)+alph[index1])!=null && (document.getElementById((num1+1)+alph[index1]).innerHTML==""||
document.getElementById((num1+1)+alph[index1]).innerHTML==xa[1]||
document.getElementById((num1+1)+alph[index1]).innerHTML==xa[2]||
document.getElementById((num1+1)+alph[index1]).innerHTML==xa[3]||
document.getElementById((num1+1)+alph[index1]).innerHTML==xa[4]||
document.getElementById((num1+1)+alph[index1]).innerHTML==xa[5]||
document.getElementById((num1+1)+alph[index1]).innerHTML==xa[0]))
{document.getElementById((num1+1)+alph[index1]).style.border="2px solid yellow"};

if(document.getElementById((num1+1)+alph[index1+1])!=null && (document.getElementById((num1+1)+alph[index1+1]).innerHTML==""||
document.getElementById((num1+1)+alph[index1+1]).innerHTML==xa[0]||
document.getElementById((num1+1)+alph[index1+1]).innerHTML==xa[1]||
document.getElementById((num1+1)+alph[index1+1]).innerHTML==xa[2]||
document.getElementById((num1+1)+alph[index1+1]).innerHTML==xa[3]||
document.getElementById((num1+1)+alph[index1+1]).innerHTML==xa[4]||
document.getElementById((num1+1)+alph[index1+1]).innerHTML==xa[5]))
{document.getElementById((num1+1)+alph[index1+1]).style.border="2px solid yellow"};

if(document.getElementById((num1+1)+alph[index1-1])!=null && (document.getElementById((num1+1)+alph[index1-1]).innerHTML==""||
document.getElementById((num1+1)+alph[index1-1]).innerHTML==xa[0]||
document.getElementById((num1+1)+alph[index1-1]).innerHTML==xa[1]||
document.getElementById((num1+1)+alph[index1-1]).innerHTML==xa[2]||
document.getElementById((num1+1)+alph[index1-1]).innerHTML==xa[3]||
document.getElementById((num1+1)+alph[index1-1]).innerHTML==xa[4]||
document.getElementById((num1+1)+alph[index1-1]).innerHTML==xa[5]))
{document.getElementById((num1+1)+alph[index1-1]).style.border="2px solid yellow"};
/*Top moving tester*/

if(document.getElementById((num1)+alph[index1+1])!=null && (document.getElementById((num1)+alph[index1+1]).innerHTML==""||
document.getElementById((num1)+alph[index1+1]).innerHTML==xa[0]||
document.getElementById((num1)+alph[index1+1]).innerHTML==xa[1]||
document.getElementById((num1)+alph[index1+1]).innerHTML==xa[2]||
document.getElementById((num1)+alph[index1+1]).innerHTML==xa[3]||
document.getElementById((num1)+alph[index1+1]).innerHTML==xa[4]||
document.getElementById((num1)+alph[index1+1]).innerHTML==xa[5]))
{document.getElementById((num1)+alph[index1+1]).style.border="2px solid yellow"};

if(document.getElementById((num1)+alph[index1-1])!=null && (document.getElementById((num1)+alph[index1-1]).innerHTML==""||
document.getElementById((num1)+alph[index1-1]).innerHTML==xa[0]||
document.getElementById((num1)+alph[index1-1]).innerHTML==xa[1]||
document.getElementById((num1)+alph[index1-1]).innerHTML==xa[2]||
document.getElementById((num1)+alph[index1-1]).innerHTML==xa[3]||
document.getElementById((num1)+alph[index1-1]).innerHTML==xa[4]||
document.getElementById((num1)+alph[index1-1]).innerHTML==xa[5]))
{document.getElementById((num1)+alph[index1-1]).style.border="2px solid yellow"};

/*Left right moving tester*/

if(document.getElementById((num1-1)+alph[index1])!=null && (document.getElementById((num1-1)+alph[index1]).innerHTML==""||
document.getElementById((num1-1)+alph[index1]).innerHTML==xa[0]||
document.getElementById((num1-1)+alph[index1]).innerHTML==xa[1]||
document.getElementById((num1-1)+alph[index1]).innerHTML==xa[2]||
document.getElementById((num1-1)+alph[index1]).innerHTML==xa[3]||
document.getElementById((num1-1)+alph[index1]).innerHTML==xa[4]||
document.getElementById((num1-1)+alph[index1]).innerHTML==xa[5]))
{document.getElementById((num1-1)+alph[index1]).style.border="2px solid yellow"};

if(document.getElementById((num1-1)+alph[index1+1])!=null && (document.getElementById((num1-1)+alph[index1+1]).innerHTML==""||
document.getElementById((num1-1)+alph[index1+1]).innerHTML==xa[0]||
document.getElementById((num1-1)+alph[index1+1]).innerHTML==xa[1]||
document.getElementById((num1-1)+alph[index1+1]).innerHTML==xa[2]||
document.getElementById((num1-1)+alph[index1+1]).innerHTML==xa[3]||
document.getElementById((num1-1)+alph[index1+1]).innerHTML==xa[4]||
document.getElementById((num1-1)+alph[index1+1]).innerHTML==xa[5]))
{document.getElementById((num1-1)+alph[index1+1]).style.border="2px solid yellow"};

if(document.getElementById((num1-1)+alph[index1-1])!=null && (document.getElementById((num1-1)+alph[index1-1]).innerHTML==""||
document.getElementById((num1-1)+alph[index1-1]).innerHTML==xa[0]||
document.getElementById((num1-1)+alph[index1-1]).innerHTML==xa[1]||
document.getElementById((num1-1)+alph[index1-1]).innerHTML==xa[2]||
document.getElementById((num1-1)+alph[index1-1]).innerHTML==xa[3]||
document.getElementById((num1-1)+alph[index1-1]).innerHTML==xa[4]||
document.getElementById((num1-1)+alph[index1-1]).innerHTML==xa[5]))
{document.getElementById((num1-1)+alph[index1-1]).style.border="2px solid yellow"};

/*Bottom moving tester*/
}


if (document.getElementById(id).innerHTML=="♔")
{

sah_move(black)
/*Sah function END*/

}



}
var testwhereyougo;
function kraken(id){
	testwhereyougo=false
	
testplacing(id);
if(document.getElementById(id).innerHTML==white[4] || document.getElementById(id).innerHTML==black[4]){
testwhereyougo=true
}
}

function track(id){
	if(document.getElementById(id).style.border=="2px solid yellow"){
     a=id;

	}
	else (a="")	
}
var proceed;
function kraken1(id){
	var cont=document.getElementById(a).innerHTML;
	cont1=document.getElementById(id).innerHTML;
	if(document.getElementById(a)!=null){
	document.getElementById(a).innerHTML=document.getElementById(id).innerHTML
	document.getElementById(id).innerHTML="";
	for (var tap=0;tap<64;tap++){
	document.getElementsByTagName("p")[tap].style.border="0px solid transparent";
	}
	if(testwhereyougo==true){
		testnodeath(a);
		if(proceed==false){
			document.getElementById(id).innerHTML=cont1;
			document.getElementById(a).innerHTML=cont;
			alert("Sah Vurulur");
			if(ka=="black"){ka="white"
				}
			else {ka="black";
				}	
		}
	}		
}

/*If White are played*/
if(ka=="black"&&document.getElementById(a).style.border!=""){
ka="white";
test(white,black)
draggablizm(white);

}
/*If BLACKS ARE animationPlayState = 'paused'*/
else if(ka="white"&&document.getElementById(a).style.border!=""){
ka="black";
test(black,white)
draggablizm(black);


}
clear_table()
}
function draggablizm(x){
for(var i=0;i<64;i++){
if(document.getElementsByTagName("P")[i].innerHTML==x[0]||
document.getElementsByTagName("P")[i].innerHTML==x[1]||
document.getElementsByTagName("P")[i].innerHTML==x[2]||
document.getElementsByTagName("P")[i].innerHTML==x[3]||
document.getElementsByTagName("P")[i].innerHTML==x[4]||
document.getElementsByTagName("P")[i].innerHTML==x[5]){
document.getElementsByTagName("P")[i].draggable=true;


}
else {
document.getElementsByTagName("P")[i].draggable=false

}
}

}