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








