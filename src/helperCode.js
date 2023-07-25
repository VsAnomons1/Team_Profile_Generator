var homePageHtml = function (teamMembers){
    var team = "";
    for(var i = 0; i < teamMembers.length; i++){
        team += teamMembers[i];
    }
    var homepage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
      <div class = 'container-fluid vh-100 overflow-auto'>
        <div class="row h-100 overflow-auto">
            <header class="d-flex justify-content-center align-items-center col-12 h-25 bg-primary">
                <h2>Dev Team</h2>
            </header>
            <main class="col-12 h-75 overflow-auto">
                <div class="row justify-content-center">
                    ${team}
                </div>
            </main>
        </div>
      </div> 
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>`;
    return homepage;
}

var managerHtml = function (manager) {
    var managerCard = ` 
<div class="col-10 col-md-6 col-lg-4 card ms-5 mt-3">
<div class="card-header">
<ul class="list-group list-group-horizontal">
<li class="list-group-item">
    <h4>${manager.name}</h4>
    <h5>Manager</h5>
</li>   
<li class="list-group-item">
    <div class="icons">
        <img class="img-fluid" src="images/manager_icon.png" alt="a manager icon">
    </div>
</li>
</ul>
</div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
        </ul>
    </div>
</div>`;
    return managerCard;
}

var engineerHtml = function (engineer) {
    var engineerCard = ` 
<div class="col-10 col-md-6 col-lg-4 card ms-5 mt-3">
<div class="card-header">
<ul class="list-group list-group-horizontal">
<li class="list-group-item">
    <h4>${engineer.name}</h4>
    <h5>Engineer</h5>
</li>   
<li class="list-group-item">
    <div class="icons">
        <img class="img-fluid" src="images/engineer_icon.png" alt="a engineer icon">
    </div>
</li>
</ul>
</div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
    </div>
</div>`;
    return engineerCard;
}

var internHtml = function (intern) {
    var internCard = ` 
<div class="col-10 col-md-6 col-lg-4 card ms-5 mt-3">
<div class="card-header">
<ul class="list-group list-group-horizontal">
<li class="list-group-item">
    <h4>${intern.name}</h4>
    <h5>Intern</h5>
</li>   
<li class="list-group-item">
    <div class="icons">
        <img class="img-fluid" src="images/intern_icon.png" alt="a intern icon">
    </div>
</li>
</ul>
</div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
</div>`;
    return internCard;
}
module.exports = {
    homePageHtml,
    managerHtml,
    engineerHtml,
    internHtml,
};