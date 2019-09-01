


  function draw () {

    var canvas = document.getElementById('example');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      const l = 200; // length
      const tf = l * 2 / 5; // two fifths of length

      ctx.translate(20, 40); // just for display

      ctx.moveTo(0,0);
      ctx.bezierCurveTo(tf,-(l-tf),l-tf,l-tf,l,0);

      ctx.lineWidth = 1;
      ctx.stroke();


    }
  }
