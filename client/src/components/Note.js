import React from 'react';
import '../styles/Note.css'

class Note extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            displayFields: false,
            body: '',
            title: '',
            index: 0
        }
    }

    componentWillReceiveProps(props){
        this.setState({
            body: props.body,
            title: props.title,
            index: props.index
        })
    }

    handleUpdate(e){
        e.preventDefault();
        this.setState({
            displayFields: true
        })
    }

    submitChange(e){
        e.preventDefault(e);
        this.setState({
            displayFields: false
        })
        this.props.sc(this.state.title, this.state.body, this.state.index);
    }

    handleTitle(e){
        this.setState({
            title: e.target.value
        })
    }

    handleBody(e){
        this.setState({
            body: e.target.value
        })
    }


    render(){
       return(
          <div className="card-cstm card">
               {
                (this.state.displayFields) ?
                <div>
                    <div className="card-header">
                    Note
                    </div>
                    <div className="card-body">
                        <input type="text" placeholder={this.state.title} onChange={e=>this.handleTitle(e)} />
                        <input type="text" placeholder={this.state.body}   onChange={e=>this.handleBody(e)}/>
                        <button className="cstm-card-btn btn btn-primary" id="update-btn" onClick={e=>this.submitChange(e)} >Update Note</button><br/>
                        <button className="cstm-card-btn btn btn-danger" id="rmv-btn" onClick={e=>this.props.deleter()} >Remove Note</button>
                    </div>
                </div>
                   :
                   <div>
                   <div className="card-header">
                   Note
                 </div>
                 <div className="cstm-body card-body">
                   <h5 className="card-title">{this.state.title}</h5>
                   <p className="card-text">{this.state.body}</p>
                   <button className="cstm-card-btn btn btn-primary" id="update-btn" onClick={e=>this.handleUpdate(e)} >Update Note</button><br/>
                   <button className="cstm-card-btn btn btn-danger" id="rmv-btn" onClick={e=>this.props.deleter()} >Remove Note</button>
                 </div>
                </div>
                
               }
            </div> 
       )

    }

}

export default Note;