let v=[29.76,41.85,46.5]
document.write("Gien array =[ "+v+" ]<br><br>")

let r=v.reduce(function(a,b){
	if(b>40){
		a.push(b)
	} 
	return a

},[])

document.write("reduced value =[ "+r+" ]")