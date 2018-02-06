import React, {Component} from 'react';
import '../styles/User.css'

class User extends Component {


    render(){
        

        const userJobs = this.props.userArr.map( (job, i) => {
        return (
            <div className="interior" key={Math.random()}>
                <h1 className="userTitle"> {job.title}</h1>
                
                <img src={job.company_logo} className="userImage" alt=""/>
                <br/><br/>
                <a href={job.url}  target="_blank"><button className="userLink"  type="submit">View on Github</button></a>

                <button className = "customBtn btn btn-danger" onClick={()=>this.props.removeFromUser(job, i)}>
                Remove this Job!
                </button><br/><br/>

            </div>
            )
        
        })


        return(
            <main className="wrapper">
                    
                <section className="inwrapper" >     
                    { userJobs }
                </section>
                
            </main>
        )

    }

}

export default User;