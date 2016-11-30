// $(document).ready(function(){
//   carousel = (function(){
//     var box = document.querySelector('.carousel-container');
//     var next = box.querySelector('.next');
//     var prev = box.querySelector('.prev');
//     // var items = box.querySelectorAll('.content li');
//     var bullets = document.querySelectorAll('.bullets div');
//     var counter = 0;
//     var amount = bullets.length;
//     var current = bullets[0];
//     // var currentBullet = bullets[0];
//     box.classList.add('active');
//     function navigate(direction) {
//       current.classList.remove('current');
//       // current.id = '';
//       // currentBullet.classList.remove('current');
//       counter = counter + direction;
//       if (direction === -1 && counter < 0) { 
//         counter = amount - 1; 
//       }
//       if (direction === 1 && !bullets[counter]) { 
//         counter = 0;
//       }
//       current = bullets[counter];
//       current.classList.add('current');
//       // current.id = 'current'
//       // currentBullet = bullets[counter];
//       current.classList.add('current');
//     }
//     next.addEventListener('click', function(ev) {
//       navigate(1);
//     });
//     prev.addEventListener('click', function(ev) {
//       navigate(-1);
//     });
//     navigate(0);
//   })();
// });