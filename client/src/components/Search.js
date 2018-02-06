import React, {Component} from 'react';
import '../styles/Search.css';





class Search extends Component {
   


    render(){
       
        const jobs = this.props.jobsForDisplay.map( job => {
            return (
               
                <div classname="resultsBox">
                    <img className="i jobImage" src={job.company_logo} alt=""
                    onClick={()=>{this.props.addToUser(job);}}
                     />
                                       
                    <a href={job.url}  target="_blank"><button className="gitLink"  type="submit">View on Github</button></a>
                    
                    
                </div>
                
                
                
            )
          
        })


        return(
           
               <div>
                   { (this.props.displayJobs === false) ?
                    <form className="searchFormWrapper">
                        <div className="form-group">
                            <label className="srchLbls" htmlFor="exampleInputEmail1">Seach Key</label>
                            <input  type="text" className="searchInput form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                                placeholder={this.props.searchKey || "Seach GitHub by a SearchKey!"}
                                onChange={(e)=>{this.props.changeSearchKey(e.target.value)}}
                            />
                            <small id="emailHelp" className="form-text text-muted">A search key for querying open jobs.</small>
                        </div>
                        <div className="form-group">
                            <label className="srchLbls" htmlFor="exampleInputPassword1">Search Location </label>
                            <input type="text" className="searchInput form-control" id="exampleInputPassword1" 
                                placeholder={this.props.location ||"Add a location for search"}
                                onChange={(e)=>{this.props.changeLocation(e.target.value)}}
                            />
                            <small id="emailHelp" className="form-text text-muted">A search location may be a Country, State, or City</small>
                        </div>
                        <div className="form-group">
                            <label className="srchLbls" htmlFor="exampleFormControlSelect2">Full Time??</label>
                            <select multiple className="cstm-select searchInput form-control" id="exampleFormControlSelect2"
                                onClick={event=>this.props.handleBool(event.target.value)}
                            >
                                <option value="true">Yes</option>
                                <option value="false">Doesn't matter</option>
                               
                            </select>
                        </div>
                        <button type="submit" className="cst-search-btn btn btn-lg btn-primary"
                            onClick={e=>this.props.handleClick(e)}
                        >
                        Search</button><br/><br/>
                        
                    </form>

                    :                       
                    
                    <div className='info-box'> 
                        <div className="btnWrapper">
                        <button type="submit" className="refresh"
                        onClick={e=>this.props.handleRefresh(e)}
                        >
                        Refresh Search</button><br/><br/>
                        </div>
                        <div className="jobWrapper">{ jobs }</div>
                        
                    </div>
                    
            
                       
                        
                       
                    
                   }
                </div>

            
                        
              

        )
    }


}

export default Search;

