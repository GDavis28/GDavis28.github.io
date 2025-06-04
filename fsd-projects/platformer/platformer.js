$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(70, 690, 200, 300);
createPlatform(400, 600, 200, 29, "red");

createPlatform(800, 600, 20, 290);
createPlatform(900, 600, 20, 290);
createPlatform(1000, 600, 20, 290);
createPlatform(1100, 600, 200, 50);
createPlatform(1300, 500, 20, 200);
createPlatform(1000, 400, 200, 20);
createPlatform(850, 300, 20, 20);
createPlatform(500, 350, 200, 30);
createPlatform(200, 300, 20, 20);
createPlatform(400, 300, 20, 20);
createPlatform(1385, 600, 20, 20);

createPlatform(800, 700, 220, 60, "red");



    // TODO 3 - Create Collectables
createCollectable("steve", 800, 330);
createCollectable("diamond", 200, 170, 0.5, 0.7);
createCollectable("steve", 1300, 700);


    
    // TODO 4 - Create Cannons
createCannon("right", 200, 1000);
createCannon("left", 650, 1500);
createCannon("top", 800, 1000);
createCannon("top", 600, 2000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
