async function start(app, io){
    app.get('/pingcord', (req, res) => {
        res.render('pingcord');
    })
}

module.exports = {
    start
}