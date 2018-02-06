import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify';

import Header from './Header';
import Landing from './Landing';
import Search from './Search';
import User from './User';
import Post from './Post';
import Notes from './Notes';


class App extends Component {

  constructor(){
    super()
    this.state = {
      userArr : [],
      searchKey: '',
      location: '',
      ftBool: '',
      jobsForDisplay: [],
      displayJobs: false
    }
    this.addJob = this.addJob.bind(this)
    this.rmvJob = this.rmvJob.bind(this)
    this.changeSearchKey = this.changeSearchKey.bind(this)
    this.changeLocation = this.changeLocation.bind(this)
    this.handleBool = this.handleBool.bind(this)
    this.deleteJob = this.deleteJob.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleRefresh = this.handleRefresh.bind(this)
    this.handlePost = this.handlePost.bind(this)
  }


  // Logic for downward data flow regarding posting of data

  handlePost(event,title,type,desc,loc,company_logo){
    let newJob = {
      id: (Math.random()*Math.random).toString,
      title,
      description: desc,
      created_at: new Date().toDateString(),
      location: loc,
      type,
      company_logo
    }
    event.preventDefault();
    this.setState({displayJobs: true})
    axios.post('/api/search', newJob).then(response=>{
      this.setState({ jobsForDisplay: response.data })
    }).catch(err=>console.log(err));
  }

  // Functions for manipulation of downward flowing data to User component, handles logic regarding
  // user stored jobs and their functionality.
  addJob(job){
    let arr = this.state.userArr;
    arr.push(job);
    this.setState({
      userArr: arr
    })
    toast.success("Added to your profile!")
  }

  rmvJob(job, i){
   
    let arr = this.state.userArr;     
    arr.splice(i,1)
    this.setState({
      userArrr: arr
    })
    toast.success("Deleted job from your profile")
   
  }


  //Need logic to flow data downward to the Search componenet, so that Post and Update functionality
  //can be added to the application

  changeSearchKey(val){
    this.setState({
        searchKey: val
    })
  }

  handleBool(val){
      this.setState({
          ftBool: val
      })
  }

  changeLocation(val){
      this.setState({
          location: val
      })
  }

  deleteJob(id){
      axios.delete(`/api/search/${id}`).then(response => {
          this.setState({jobsForDisplay: response.data})
          toast.success("Successfully removed job")
      }).catch(err=>console.log(err))
  }

  handleClick(event){
      event.preventDefault();
      this.setState({ displayJobs: true})
      let sk =  this.state.searchKey;
      let lct = this.state.location;
      let dec = this.state.ftBool;
      axios.get(`/api/search/${sk}/${lct}/${dec}`).then(response =>{
          this.setState({jobsForDisplay: response.data})
      }).catch(err=>console.log(err))
  }

  handleRefresh(e){
      e.preventDefault();
      this.setState({ displayJobs: false})
      axios.delete('/api/all').then(response=>{
          console.log(response.data)
          this.setState({ jobsForDisplay: response.data})
      }).catch(err=>console.log(err))
  }





  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  render() {
    return (
      <div >
        <ToastContainer/>
        <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" render={()=>{
            return <Landing />
            }} />
          <Route exact path="/search" render={()=>{
            return <Search addToUser={this.addJob}
              searchKey={this.state.searchKey} location={this.state.location}
              ftBool={this.state.ftBool} jobsForDisplay={this.state.jobsForDisplay}
              displayJobs={this.state.displayJobs} changeSearchKey={this.changeSearchKey}
              handleBool={this.handleBool} changeLocation={this.changeLocation}
              deleteJob={this.deleteJob} handleClick={this.handleClick}
              handleRefresh={this.handleRefresh}
            />         
            }} />
           <Route exact path="/user" render={()=>{
            return <User userArr={this.state.userArr} removeFromUser={this.rmvJob}/>
            }} />
             <Route exact path="/post" render={()=>{
            return <Post handlePost={this.handlePost}/>
            }} />
             <Route exact path="/notes" render={()=>{
            return <Notes/>
            }} />
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


