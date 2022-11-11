
import axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component{

state ={ advice:"" };

componentDidMount(){
  console.log("component did mount");
  this.fetchAdvice();
}

fetchAdvice = () => {
   axios.get("https://api.adviceslip.com/advice").then((response)=>{
      const {advice} = response.data.slip;
      this.setState({advice});// if properties and  value have same name you can omit the values
   }).catch((error)=>{
      console.log(error);
   });
}

  render(){
    const {advice} = this.state;
    return(
      <div className='app'>
      
      <div className='card'>
          <h1 className='heading'>{advice}</h1>
          <button onClick={this.fetchAdvice}>
            <span>Give Me Advice!</span>
          </button>
      </div> 
      </div>
      
    );
  }
}

export default App;
