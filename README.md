
<!DOCTYPE html>

<html lang="en">



<head>

  <meta charset="utf-8" />

  <meta http-equiv="X-UA-Compatible" content="IE=edge" />

  <title>Calculator</title>

  <meta name="description" content="Simple Calculator With Dark Mode." />

  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <link rel="icon" type="image/x-icon" href="assets/calculator.ico">

  <link rel="stylesheet" href="https://rawcdn.githack.com/U7P4L-IN/simple-calculator/4aee7076a50959dcdb414f0340ce5359cc2e6005/styles/dark.css" id="theme" />

  <link rel="preconnect" href="https://fonts.googleapis.com">

  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap" rel="stylesheet">

</head>



<body>

  <div class="wrapper">

    <div class="container">

      <div class="header-container">

        <!-- This heading also notifies about the theme change.-->

        <h1 id="toast">Calculator</h1>

        <div class="top-buttons">

          <a href="https://github.com/U7P4L-IN">

            <img src="assets/GitHubLight.svg" alt="Sun Icon" height="22.5" width="22.5" id="github-icon">

          </a>

          <button type="button" onclick="changeTheme()" class="theme-button">

            <img src="assets/SunIcon.svg" alt="Theme Icon" height="19" width="19" id="theme-icon">

          </button>

        </div>

      </div>

      <div class="first-row">

        <input type="text" name="result" id="result" placeholder="Result" readonly />

        <input type="button" value="C" onclick="result.value=''" id="clear-button" />

      </div>

      <div class="second-row">

        <input type="button" value="1" onclick="liveScreen(1)" />

        <input type="button" value="2" onclick="liveScreen(2)" />

        <input type="button" value="3" onclick="liveScreen(3)" />

        <input type="button" value="+" onclick="liveScreen('+')" />

      </div>

      <div class="third-row">

        <input type="button" value="4" onclick=" liveScreen(4)" />

        <input type="button" value="5" onclick=" liveScreen(5)" />

        <input type="button" value="6" onclick=" liveScreen(6)" />

        <input type="button" value="-" onclick="liveScreen('-')" />

      </div>

      <div class="fourth-row">

        <input type="button" value="7" onclick="liveScreen(7)" />

        <input type="button" value="8" onclick="liveScreen(8)" />

        <input type="button" value="9" onclick=" liveScreen(9)" />

        <input type="button" value="x" onclick="liveScreen('*')" />

      </div>

      <div class="fifth-row">

        <input type="button" value="/" onclick="liveScreen('/')" />

        <input type="button" value="0" onclick="liveScreen(0)" />

        <input type="button" value="." onclick="liveScreen('.')" />

        <input type="button" value="=" onclick="calculate(result.value)" />

      </div>

    </div>

  </div>

  <script src="https://rawcdn.githack.com/Afan76781/BJ_C/c5cee4f19baf05db6664c16522a8f5e85be19095/script.js">

  </script>

</body>



</html>
 
