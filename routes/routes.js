const axios = require('axios');
let jobs = [];
let notes = [];
let i = 0;
const baseURL = 'https://jobs.github.com/positions.json?'

module.exports = app => {

    app.get('/api/search/:description/:location/:full', (req,res)=>{
        let desc = req.params.description;
        let loc = req.params.location;
        let fullBool = req.params.full
        axios.get(`${baseURL}descripton=${desc}&location=${loc}&full time=${fullBool}`).then( response =>{
                let arr = [...jobs,...response.data];
                jobs = arr;
                res.send(arr);
            }            
        ).catch(()=>{console.log})
    })  

    app.get('/api/search',(req,res)=>{
        res.send(jobs);
    })

    app.post('/api/search',(req,res)=>{
        let { id, title, description, created_at, location, type, company_logo} = req.body;
        let obj = { 
            id,
            created_at,
            title,
            location,
            type,
            description,
            company_logo
        }
        jobs.push(obj);
        jobs.reverse();
        res.send(jobs);
    })

    app.delete('/api/search/:id',(req,res)=>{
        const ID = req.params.id;
        const index = jobs.findIndex( job => job.id == ID)
        jobs.splice(index,1);
        res.send(jobs);
    })

    app.delete('/api/all', (req,res)=>{
        jobs = [];
        res.send(jobs);
    })

    app.put('/api/note/:title/:body/:index',(req,res)=>{
        let index = req.params.index;
        let body = req.params.body;
        let title = req.params.title;
        notes[index].title = title;
        notes[index].body = body;
        res.send(notes);
    })



    app.get(`/api/notes`,(req,res)=>{
        res.send(notes);
    })

    app.post('/api/notes/post',(req,res)=>{
        notes.push(req.body);
        i++;
        res.send(notes);
    })

    app.delete(`/api/notes/:index`,(req,res)=>{
        let index = req.params.index;
        notes.splice(index,1);
        i--;
        res.send(notes);
    })

}



// https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg