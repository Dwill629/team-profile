function finalTemplate(teamName, addCard) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com">
          <link href="https://fonts.googleapis.com/css2?family=Francois+One&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="./style.css" />
          
          <title>${teamName} Team Profiles</title>
          <style>
  
  
          .navbar {
            background-color: gray;
          }
  
  
          body {
            font-family: 'Roboto', serif;
            font-size: 15px;
            margin: 0;
            width: 100%;
            background-color: black;
            color: white;
          }
      
          .employeeCard {
            margin-right: 20px;
            margin-top: 40px;
            border-radius: 5%;
            background-color: rgb(44, 41, 41);
            height: 300px;
            border-color: green;
          }
      
          .employeeRow {
            padding-right: 200px;
            padding-left: 200px;
            justify-content: center;
          }
      
          .card-header {
            background-color: red;
          }
      
          
            </style>
        </head>
      
        <body>
          <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-custom">
              <div class="container-fluid">
                <h1 class="mx-auto display-4">${teamName} Team Profiles</h1>
              </div>
            </nav>
          </header>
          <div class="container-fluid mx-auto">
          
              <div class="row employeeRow"> 
              ${addCard} 
              </div>
          </div>
            <script src="index.js"></script>
        </body>
        </html>
    `
}
  
  module.exports = finalTemplate;