window.onresize= screen;
window.onload=screen;

function screen(){
    myWidth=window.innerWidth;
    document.getElementById('width').innerHTML=" The Current width:- "+myWidth+"px";
    if(myWidth<600){
document.getElementById('text').innerText="Mobile";
    }
    if(myWidth>600){
        document.getElementById('text').innerText="Portrait Tablet";
            }
            if(myWidth>768){
                document.getElementById('text').innerText="Landscape Tablet ";
                    }
                    if(myWidth>992){
                        document.getElementById('text').innerText="Laptop";
                            }
                            if(myWidth>1200){
                                document.getElementById('text').innerText="Large Laptop"; 
                            }
}