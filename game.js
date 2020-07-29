let gravity=4;

let app = {
    
    start() {

        app.createClouds(4);
        app.attacheKeyEvents();
        app.createBirds(5);
    
    },
    createClouds(clouds) 
    {

        for (var i = 0; i < clouds; i++) {

            let newCloud = new Image();

            newCloud.className = "cloud";

            newCloud.src = "./images/cloud.png";

            appContainer.appendChild(newCloud);

            setInterval(function () {

                if (newCloud.offsetLeft > appContainer.offsetWidth) {
                    newCloud.style.left = -newCloud.offsetWidth+'px';
                } else {
                    newCloud.style.left = (newCloud.offsetLeft + 1) + 'px';
                }


            }, (i+1) * 12);

        }

    },
    createBirds(bird) 
    {

        for (var i = 0; i < bird; i++) {

            let newBird = new Image();

            newBird.className = "Birds";

            newBird.src = "bird.gif";

            appContainer.appendChild(newBird);

            setInterval(function () {
 
                
                 if (newBird.offsetLeft > 0) {
                     newBird.style.left = (newBird.offsetLeft + 1) + 'px';
                 } 
                  else 
                  {
                    newBird.style.left = newBird.offsetWidth+'px';
                  }


            }, (i+1) * 10);

        }

    },
    attacheKeyEvents()
    {
        document.onkeydown = function (evt) {
            // console.log(evt.keyCode);

            switch (evt.keyCode) {

                // Left
                case 37:
                    app.moveLeft();
                    break;

                // Right
                case 39:
                    app.moveRight();
                    break;

                // Top
                 case 38:
                     console.log("moving top");
                     app.moveForward();
                     break;

                 // BOttom
                 case 40:
                     console.log("moving Bottom");
                     app.moveBackward();
                     break;

            }


        }

    },

     moveLeft() 

     {

         let currentPosition = player.offsetLeft;

        if (currentPosition > 0)
        {
           player.style.left = (currentPosition - 8) + 'px';
        }


     },

     moveRight() 

     {

        let currentPosition = player.offsetLeft;

        let containerRight = appContainer.offsetWidth - player.offsetWidth;

       // console.log(currentPosition);

        if (currentPosition < containerRight) 
        {
            player.style.left = (currentPosition + 6) + 'px';
        }

    },
     moveForward() {
         player.style.top= '0%';

                setTimeout(function(){
                    player.style.top= '30%';
                 }, 500);
        }
    
    }




window.onload = app.start;