x="0"; 
xi=1; 
coma = 0; 
ni = 0; 
op = "no"; 
    
function numero(y) { 
    if (x=="0" || xi==1  ) {	
        document.getElementById("texto").value=y; 
        x = y; 
        if (y==".") {
            document.getElementById("texto").value="0.";
            x=y; 
            coma=1; 
        }
    }
    else { 
        if (y=="." && coma==0) { 
            document.getElementById("texto").value+=y;
            x+=""+y;
            coma=1;
        }
        else if (y=="." && coma==1) {
        } 
                  	 
        else {
            document.getElementById("texto").value+=y;
            x+=""+y
        }    
    }
    xi=0 
}

function operar(s) {
    igualar() 
    ni=x 
    op=s; 
    xi=1; 
}	

function igualar() {
    if (op=="no") { 
        document.getElementById("texto").value=x;	
    }
    else { 
        sl=ni+op+x;
        sol=eval(sl)
        document.getElementById("texto").value=sol
        x=sol; 
        op="no"; 
        xi=1; 
    }
}

function borradoTotal() {
    document.getElementById("texto").value="";	
    x="0"; 
    coma=0; 
    ni=0 
    op="no"
}

function borradoParcial() {
    document.getElementById("texto").value=0;	 
    x=0; 
    coma=0; 				
}
function retro(){ 
    cifras=x.length; 
    br=x.substr(cifras-1,cifras) 
    x=x.substr(0,cifras-1) 
    if (x=="") {x="0";}
    if (br==".") {coma=0;} 
    document.getElementById("texto").value=x;	
}