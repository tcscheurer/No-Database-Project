import React, {Component} from 'react';
import '../styles/Post.css'

class Post extends Component{
    constructor(props){
        super(props)
        this.state = {
            postTitle: '',
            postType: '',
            postDescription: '',
            postLocation: '',
            company_logo: ''
        }
    }

        handleTitle(val){
            this.setState({
                postTitle: val
            })
        }

        handleLocation(val){
            this.setState({
                postLocation: val
            })
        }

        handleType(val){
            this.setState({
                postType: val
            })
        }

        handleDescription(val){
            this.setState({
                postDescription: val
            })
        }
        
        handleLogo(val){
            this.setState({
                company_logo: val
            })
        }


    render(){
        return(
                <form className="postWrapper">
                    <div className="form-group">
                        <label className="pstLbl" htmlFor="exampleInputEmail1">Company Logo URL: </label>
                        <input type="text" className="post-input form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                            placeholder={this.state.company_logo || "Enter your logo URL!"}
                            onChange={(e)=>{this.handleLogo(e.target.value)}}
                        />
                        <small id="emailHelp" className="form-text text-muted">A URL link to png for displaying your logo.</small>
                    </div>
                    <div className="form-group">
                        <label className="pstLbl" htmlFor="exampleInputEmail1">Job Title: </label>
                        <input type="text" className="post-input form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                            placeholder={this.state.postTitle || "Enter your Title!"}
                            onChange={(e)=>{this.handleTitle(e.target.value)}}
                        />
                        <small id="emailHelp" className="form-text text-muted">A title for your position for search queries.</small>
                    </div>
                    <div className="form-group">
                        <label className="pstLbl" htmlFor="exampleInputPassword1">Job Location: </label>
                        <input type="text" className="post-input form-control" id="exampleInputPassword1" 
                            placeholder={this.state.postLocation ||"Add a location for your position."}
                            onChange={(e)=>{this.handleLocation(e.target.value)}}
                        />
                        <small id="emailHelp" className="form-text text-muted">A posting's location may be a Country, State, or City</small>
                    </div>
                    <div className="form-group">
                        <label className="pstLbl" htmlFor="l exampleFormControlSelect2">Is this a fulll time position?</label>
                        <select multiple className="cstm-p-select post-input form-control" id="exampleFormControlSelect2"
                            onClick={event=>this.handleType(event.target.value)}
                        >
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="pstLbl" htmlFor="descriptionInput">Job description: </label>
                        <input type="text" className="cstm-desc post-input form-control" id="descriptionInput" 
                            placeholder={this.state.postDescription ||"Add a description for your postion"}
                            onChange={(e)=>{this.handleDescription(e.target.value)}}
                        />
                        <small id="emailHelp" className="form-text text-muted">A description for users to read more about your postion!!</small>
                    </div>
                    
                    <button type="submit" className="post-btn btn btn-primary"
                        onClick={e=>{
                            let title = this.state.postTitle;
                            let type = this.state.postType;
                            let desc = this.state.postDescription;
                            let loc = this.state.postLocation;
                            let cl = this.state.company_logo;
                            this.props.handlePost(e,title,type,desc,loc,cl)}}
                    >
                    Post!</button><br/><br/>
    
                 </form>
            )

    }

}

export default Post;


// https://avatars0.githubusercontent.com/u/5432151?s=280&v=4