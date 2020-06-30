const express = require('express');
const app = express();

//Use environment variables from Dockerfile e.g PORT and HOST
const PORT = process.env.PORT || 80;
const IP = process.env.HOST || "0.0.0.0";

//Replace project-folder with the name of your project in the /dist folder after the build
const project_folder = 'project-folder';

app.use(express.static(`${__dirname}/${project_folder}`));

app.all('/*', function(req, res, next) {
    res.sendFile(`${project_folder}/index.html`, { root: __dirname });
});

app.listen(PORT, IP, () => {
    console.log(`
    ==================================
    Server is running on ${IP}:${PORT}
    Serve from ${__dirname}/${project_folder}
    ==================================
    `);
})
