const express = require('express');
const app = express();

//Use environment variables from Dockerfile e.g PORT and HOST
const PORT = process.env.PORT || 8080;
const IP = process.env.HOST || "0.0.0.0";

//Replace project-folder with the name of your project in the /dist folder after the build
const project_folder = 'public';

app.use(express.static(`${__dirname}/${project_folder}`));

//Test endpoint to see all environment variables from Heroku
app.get('/params', (req, res) => {
    res.status(200).json(process.env);
})

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
