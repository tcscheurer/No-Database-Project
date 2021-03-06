const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json())
require('./routes/routes')(app);

if(process.env.NODE_ENV === 'production'){
    //making sure express will serve up production assets
    //like the main.js or main.css generated by the react build
    app.use(express.static('client/build'));

    //Express will serve up the index.html file if it
    //doesn't recognize the route
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendfile(path.resolve(__dirname, 'client','build','index.html'));
    });

}



app.listen(PORT, () => {console.log(`Express listening on ${PORT}`)})