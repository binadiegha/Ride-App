import React, {useState, useEffect} from 'react'
import {  useParams, useHistory, Switch } from 'react-router-dom'
import { ImageMap } from '@qiuz/react-image-map';
import MaybachSelected from '../../assets/images/car-selected/car-selected-maybach.jpg'
import RollsRoyceSelected from '../../assets/images/car-selected/car-selected-rr.jpg'
import RangeRoverSelected from '../../assets/images/car-selected/car-selected-rrover.jpg'

const Car = () => {

  let { id } = useParams();
  const history = useHistory();
  const [car, setCar] = useState()



  const mapArea = [
    // back button : index of 0
    {
      "left":"0%",
      "top":"0%",
      "height":"12%",
      "width":"18%",
      "style":{
        "background":"rgba(0, 0, 0, 0.0)",
        "cursor": "pointer"
      }
    },

    // Digital name plate : index of 1
    {
      "left":"0%",
      "top":"38%",
      "height":"8%",
      "width":"50%",
      "style":{
        "background":"rgba(0, 0, 0, 0.0)",
        "cursor": "pointer"
      }
    },

    // Welcome music : index of 2
    {
      "left":"0%",
      "top":"46%",
      "height":"8%",
      "width":"50%",
      "style":{
        "background":"rgba(0, 0, 0, 0.0)",
        "cursor": "pointer"
      }
    },

    // Music Source : index of 3
    {
      "left":"0%",
      "top":"55%",
      "height":"8%",
      "width":"50%",
      "style":{
        "background":"rgba(0, 0, 0, 0.0)",
        "cursor": "pointer"
      }
    },

    // prefered temperature : index of 4
    {
      "left":"0%",
      "top":"63%",
      "height":"8%",
      "width":"50%",
      "style":{
        "background":"rgba(0, 0, 0, 0.0)",
        "cursor": "pointer"
      }
    },

    // Pilot Errands : index of 5
    {
      "left":"0%",
      "top":"71%",
      "height":"8%",
      "width":"50%",
      "style":{
        "background":"rgba(0, 0, 0, 0.0)",
        "cursor": "pointer"
      }
    },

    // Ride mode : index of 6
    {
      "left":"0%",
      "top":"79%",
      "height":"8%",
      "width":"50%",
      "style":{
        "background":"rgba(0, 0, 0, 0.0)",
        "cursor": "pointer"
      }
    },

    // contact pilot : index of 7
    {
      "left":"0%",
      "top":"87%",
      "height":"8%",
      "width":"50%",
      "style":{
        "background":"rgba(0, 0, 0, 0.0)",
        "cursor": "pointer"
      }
    },

    
   
  
  ];
  
  const onMapClick = (area, index) => {
    if(index === 0) {
      history.goBack()
    }
    if(index === 1) {
      history.push('/nameplate/africanNerd')
    }
    if(index === 2) {
      history.push('/welcome-music/i-feel-it-coming')
    }
    if(index === 5) {
      history.push('/errands/errand-one')
    }
    if(index === 6) {
      history.push('/ride-mode/executive')
    }
    if(index === 7){
      history.push('/driver/jean')
    }

    console.log(`clicked ${index + 1}`)
    // const tip = `click map${index + 1}`;
    // console.log(tip, area);
    // alert(tip);
  }

 

  useEffect(()=>{
    // if (id === 'Maybach'){
    //   setCar(MaybachSelected);
    // } 

    switch(id){
      case 'Maybach':
        setCar(MaybachSelected)
        break
      case 'Rolls-royce':
        setCar(RollsRoyceSelected)
        break
      case 'Range-Rover':
        setCar(RangeRoverSelected)
        break

      default:
        setCar('')
    }
  }, [])

     
 const  ImageMapComponent = React.useMemo(() => <ImageMap className="usage-map" src={car} map={mapArea} onMapClick={onMapClick} />, [mapArea, car]);
  


  return (
    <div>
     {ImageMapComponent}
    </div>
  )
}

export default Car
