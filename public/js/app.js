document.addEventListener('DOMContentLoaded', function() {
    // Add your JavaScript here.
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
  }


function ChangeBackgroundColour(){
    console.log('i was clicked');
    const entirePost=document.getElementsByClassName('entire-post');
    console.log(entirePost);
    for(let i=0; i<11; i++){
        entirePost[i].style.backgroundColor = getRandomColor()
    }
}


function myToggle() {
    console.log('Clicked')
    const menu = document.getElementsByClassName('magic-menu');
    if (menu[0].style.display === 'none') {
      menu[0].style.display = 'flex';
    } else {
      menu[0].style.display = 'none';
    }
  }




 function MakeMenuAppear(){
     console.log('clicked ok');
     const menu = document.getElementsByClassName('magic-menu');
     console.log(menu);
     menu[0].style.display = 'flex'
 } 




