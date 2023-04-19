const bestTeam = [];

function internCard(data) {
    const intern = 
    ` <div class="card">
    <h2>Intern</h2>
    <p>Name:${data.name}</p>
    <p>ID:${data.id}</p>
    <p>School: University of New Brunswick</p>
    <a href="mailto:${data.mail}" class="email">${data.mail}</a>
    </div>`;

    bestTeam.push(intern);
    return bestTeam;
};

function engineerCard(data) {
    const engineer = `<div class="card">
    <h2>Engineer</h2>
    <p>Name:${data.name}</p>
    <p>ID:${data.id}</p>
    <p>Github: <a href=https://github.com/${data.github} target="_blank">${data.github}</a></p>
    <a href="mailto:${data.mail}" class="email">${data.mail}</a>
    </div>`;

    bestTeam.push(engineer);
    return bestTeam;
};

function managerCard(data) {
    const manager = `<div class="card">
    <h2>Manager</h2>
    <p>Name:${data.name}</p>
    <p>ID:${data.id}</p>
    <p>Office:${data.officeNumber} 122312414</p>
    <a href="mailto:${data.mail}" class="email">${data.mail}</a>
    
</div>`

bestTeam.push(manager);
return bestTeam;
};


function generate(bestTeamCards) {

    bestTeamCards.forEach(element => {
        if (element.getRole() == "Manager") {
          managerCard(element);
        } else if (element.getRole() == "Engineer") {
          engineerCard(element);
        } else intCard(element);
    
      });

    };

    const html = `
    <!DOCTYPE html>
<html>
<head>
	<title>Employee Cards</title>
	<style>
		body {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 100vh;
			margin: 0;
			background-color: #000;
			color: #fff;
			font-family: Arial, sans-serif;
		}
		h2 {
			margin-top: 0;
			font-size: 36px;
			color: #fff;
			text-align: center;
			text-shadow: 1px 1px #333;
		}
		.card-container {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			max-width: 900px;
			width: 100%;
			margin-top: 50px;
		}
		.card {
			border: 1px solid #fff;
			box-shadow: 0 0 5px #fff;
			border-radius: 5px;
			padding: 20px;
			margin-bottom: 20px;
			display: inline-block;
			width: 300px;
			height: 350px;
			overflow: hidden;
			text-align: center;
			background-color: #333;
		}
		.card h2 {
			margin-top: 0;
			font-size: 24px;
			color: #fff;
			text-shadow: 1px 1px #000;
		}
		.card p {
			font-size: 18px;
			color: #fff;
			text-shadow: 1px 1px #000;
		}
		.card .email {
			display: block;
			margin-top: 20px;
			font-size: 16px;
			color: #fff;
			text-shadow: 1px 1px #000;
		}
		.card .button {
			display: block;
			margin-top: 20px;
			background-color: #fff;
			color: #333;
			padding: 10px 20px;
			border-radius: 5px;
			text-decoration: none;
			transition: background-color 0.3s;
		}
		.card .button:hover {
			background-color: #ccc;
			color: #000;
		}
	</style>
</head>
<body>
	<h2>The Best Team</h2>
    ${bestTeam}
    </div>
	</div>
</body>
</html>`;

return html;
    

exoports.generate = generate; 
