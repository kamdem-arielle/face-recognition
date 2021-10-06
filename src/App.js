import React,{Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Clarifai from 'clarifai';
import './App.css';

const app =new Clarifai.App({
  apiKey:'ac09ef4210854535a4103a79d0a26e61'
})

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
      imageurl:'',
      box:{},
      route:SignIn,
      issignedin:false,
    }
  }

  onInputchange=(event)=>{
    this.setState({input:event.target.value})
  }

  // onroutechange=()=>{
  //   this.state.route==='home'?
  //   this.setState({route:SignIn})
  //   :
  //   this.setState({route:'home'})
  // }

  onroutechange=(route)=>{
    if(route===SignIn || route===Register){
      this.setState({issignedin:false});
    }else if(route==='home'){
      this.setState({issignedin:true});
    }
    this.setState({route:route})
  }
  // then pass home and signIn as parameters for the signout and signin onclick
  // thats what the instructor did

  calculatefacelocation=(data)=>{
    const clarifaiface=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image=document.getElementById('inputimage');
    const widths = Number(image.width);
    const height = Number(image.height);

    return{
      left_col :clarifaiface.left_col * widths,
      top_row:clarifaiface.top_row * height,
      right_col:widths-(clarifaiface.right_col * widths),
      bottom_row:height-(clarifaiface.bottom_row * height)
    }
  }

  displayfacebox=(box)=>{
    this.setState({box:box})
  }

  onClicksubmit=()=>{
    console.log('click');
    this.setState({imageurl:this.state.input,});
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
    .then((response)=> {this.displayfacebox(this.calculatefacelocation(response));})
    .catch((err)=>console.log(err))
  }
  // .outputs[0].data.regions[0].region_info.bounding_box

 render(){
   const {issignedin,route,box,imageurl}= this.state
  return (
    <div className="App">
     <Particles params={particleoptions} className='particle'/>
     <Navigation onroutechange={this.onroutechange} issignedin={issignedin}/>
     {route==='home'?
     <div>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputchange={this.onInputchange} onClicksubmit={this.onClicksubmit}/>
        <FaceRecognition imageurl={imageurl} box={box} />
      </div>
      :(route===SignIn?
        <SignIn onroutechange={this.onroutechange}/>:
        <Register onroutechange={this.onroutechange}/>
      )
     }
    </div>
  );
 }
 
}

export default App;
