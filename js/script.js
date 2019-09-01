


  function draw () {

    var canvas = document.getElementById('example');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      //set canvas size in js instead of in css or html can avoid distortion
      //otherwise we need to set options on responsive and maintainAspectRatio
      ctx.canvas.width = 800;
      ctx.canvas.height = 600;


      const l = 600; // length
      const tf = l * 2 / 5; // two fifths of length

      ctx.translate(20, 300); // just for display

      ctx.moveTo(0,0);
      ctx.bezierCurveTo(tf,-(l-tf),l-tf,l-tf,l,0);

      ctx.lineWidth = 1;
      ctx.stroke();


    }
  }
