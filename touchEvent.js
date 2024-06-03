let div = document.querySelector('div')


div.addEventListener('touchstart', function(){
    alert('touchstarted')
})


///////////////////////////////


div.addEventListener('touchmove', function(){
    alert('touchmoved')
})


////////////////////////////////

div.addEventListener('touchend' , function(){
    alert('touchended')
})

////////////////////////////////

div.addEventListener('touchcancel' , function(){
    alert('touchcanceled')
})