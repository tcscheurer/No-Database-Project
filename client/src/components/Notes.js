import React from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';

import Note from './Note';
import '../styles/Notes.css'


class Notes extends React.Component{
    constructor(){
        super()
        this.state={
            userInput: '',
            noteTitle: '',
            notes: []
        }

        this.submitChange=this.submitChange.bind(this)
        this.removeNote=this.removeNote.bind(this)
    }


    componentDidMount(){
        axios.get('/api/notes').then(response=>{
            this.setState({
                notes: response.data
            })
        })
    }
    changeTitle(val){
        this.setState({
            noteTitle: val
        })
    }

    changeInput(val){
        this.setState({
            userInput: val
        })
    }



    handleClick(e){
        e.preventDefault();
        let note = {
            title: this.state.noteTitle,
            body: this.state.userInput
        }
       
       

        axios.post('api/notes/post', note).then(response=>{
            this.setState({
                notes: response.data,
                
            })           
        })
        axios.get('/api/notes').then(response=>{
            this.setState({
                notes: response.data
            })
        })
    }



    submitChange(title,body,index){
        axios.put(`/api/note/${title}/${body}/${index}`).then(res=>{
            this.setState({
                notes: res.data
            })
        })
    }

    removeNote(index){
        axios.delete(`/api/notes/${index}`).then(response=>{
            this.setState({
                notes: response.data
            })
        })
        toast.success("Deleted your note.")
    }




    render(){


        const notes = this.state.notes.map( (note, index) => {
            return(
                <Note body={note.body} title={note.title} index={index} 
                handleTitle={this.handleTitle} handleBody={this.handleBody}
                sc={this.submitChange} deleter={()=>this.removeNote(index)}
                />
            )
        })

       

        return(
            <div>
                <form className="NoteFormWrap">
                        <h1 className="formTitle">A place to organize your notes for your job search</h1>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Note Title: </label>
                            <input type="text" className="noteInput form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                                placeholder={this.state.noteTitle || "Add a title to your note!"}
                                onChange={(e)=>{this.changeTitle(e.target.value)}}
                            />
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Body:  </label>
                            <input type="text" className="noteInput form-control" id="exampleInputPassword1" 
                                placeholder={this.state.userInput ||"Add a body for your note"}
                                onChange={(e)=>{this.changeInput(e.target.value)}}
                            />
                            <small id="emailHelp" className="form-text text-muted">A body for your note.</small>
                        </div>
                        <button type="submit" className="noteFormBtn btn btn-primary"
                            onClick={e=>this.handleClick(e)}
                        >
                        Add</button><br/><br/>
                </form>
                <div>
                    {notes}
                </div>
            </div>
        )
    }


}

export default Notes;

/*
<div className="card">
                <div className="card-header">
                  Note
                </div>
                <div className="card-body">
                  <h5 className="card-title">{note.title}</h5>
                  <p className="card-text">{note.body}</p>
                  <button className="btn btn-primary">Update Note</button><br/>
                  <button className="btn btn-danger">Remove Note</button>
                </div>
              </div>

*/