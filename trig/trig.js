window.onload=()=>{
    var canvas=document.getElementById('canvas')
    var context=canvas.getContext('2d')
    canvas.style="border:1px solid black"
    var width=canvas.width=window.innerWidth
    var height=canvas.height=window.innerHeight
    
    context.translate(0,height/2)
    context.scale(1,-1)
    //SIN WAVE
    for(angle=0;angle<Math.PI*2;angle+=.01){
        var x=angle*200
        var y=Math.cos(angle)*200
        context.fillRect(x,y,1,1)
    }
}