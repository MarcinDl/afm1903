const express = require('express');
const path = require('path');
const dataFromFunctionsJS = require('./functions');
const app = express();
const port = process.env.PORT || 3000;
const imie = "wiola"
const outsideSubtitle = 'podtytuł'
app.set('view engine', 'hbs')
app.use('/assets', express.static(path.join(__dirname, './assets')));
app.use('/js', express.static(path.join(__dirname, './js')));
app.get('/', function(req, res){
    res.render('index', {
        pageTitle: "Zajęcia AFM 19.03.2022",
        subtitle: outsideSubtitle,
        example: dataFromFunctionsJS.sayHello2()
    })
})
app.get('/about', function(req, res){
    res.render('about')
})

app.get('/pricing', function(req, res){
    res.send("<h2> Cennik </h2>");
})
app.get('/team/marcin', function(req, res){
    res.send("<h2> strona o Marcinie </h2>");
})
app.get(`/team/${imie}`, function(req, res){
    res.send(`<h2> strona o ${imie} </h2>`);
})

app.listen(port, (err) => {
    if (err) { return console.log(`Wystąpił błąd ${err}`); }
    return console.log(`Apka działa na porcie ${port}`);
})