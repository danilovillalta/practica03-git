
var end;
var colors = ['#bb0000', '#ffffff'];

function frame() {
  confetti({
    particleCount: 4,
    angle: 60,
    spread: 55,
    origin: {  x: 0, y: 1 },
    colors: colors
  });
  confetti({
    particleCount: 4,
    angle: 120,
    spread: 55,
    origin: {  x: 1, y: 1 },
    colors: colors
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    end = Date.now() + (1 * 1000);
    frame();
  });
});


function lanzarConfeti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.8 }
  });
}

document.querySelectorAll('.btn-link').forEach(link => {
    link.addEventListener('click', lanzarConfeti);
    });
    

