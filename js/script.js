

document.addEventListener("DOMContentLoaded",
function(event){
  function draw (event) {
    console.log(event);
    var canvas = document.getElementById('example');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgb(200, 0, 0)';
      ctx.fillRect(10, 10, 50, 50);

      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
      ctx.fillRect(30, 30, 50, 50);
    }
  }


    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", draw);
})
