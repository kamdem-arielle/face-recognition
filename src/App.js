import React,{Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const particleoptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: false,
        color: "#3CA9D1",
        blur: 5
      }
    },
    number:{
      value: 70,
      density: {
        enable: true,
        value_area: 800
      }
    },
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      }
    }
  },
  "retina_detect": true
}


class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
    }
  }

  onInputchange=(event)=>{
    console.log(event.target.value);
  }

  onClicksubmit=()=>{
    console.log('click');
  }


 render(){
  return (
    <div className="App">
     <Particles params={particleoptions} className='particle'/>
     <Navigation/>
     <Logo/>
     <Rank/>
     <ImageLinkForm onInputchange={this.onInputchange} onClicksubmit={this.onClicksubmit}/>
     {/* {
     <ImageLinkFormn/>
     <FaceRecognition/>} */}
     
    </div>
  );
 }
 
}

export default App;
