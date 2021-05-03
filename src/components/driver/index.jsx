import React, {useState, useEffect} from 'react'
import {  useParams, useHistory, Switch } from 'react-router-dom'
import { ImageMap } from '@qiuz/react-image-map';
import JohnSmith from '../../assets/images/driver/driver_landscape.jpg'

const Driver = () => {

  let { id } = useParams();
  const history = useHistory();
  const [driver, setDriver] = useState()



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

    //video call : index of 1
    {
      "left":"11%",
      "top":"13%",
      "height":"10%",
      "width":"12%",
      "style":{
        "background":"rgba(0, 0, 0, 0.0)",
        "cursor": "pointer",
        "border-radius":".5rem"
      }
    },

    // Text message : index of 2
    {
      "left":"11%",
      "top":"25%",
      "height":"10%",
      "width":"12%",
      "style":{
        "background":"rgba(0, 0, 0, 0.0)",
        "cursor": "pointer",
        "border-radius":".5rem"
      }
    },

     // Phone call : index of 3
     {
      "left":"11%",
      "top":"38%",
      "height":"10%",
      "width":"12%",
      "style":{
        "background":"rgba(0, 0, 0, 0.0)",
        "cursor": "pointer",
        "border-radius":".5rem"
      }
    }

  
  ];
  
  const onMapClick = (area, index) => {
    if(index === 0) {
      history.goBack()
    }
    if(index === 4){
      history.push('/car/Maybach')
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
      case 'Jean':
        setDriver(JohnSmith)
        break

      default:
        setDriver(JohnSmith)
        break
    }
  }, [])

     
 const  ImageMapComponent = React.useMemo(() => <ImageMap className="usage-map" src={driver} map={mapArea} onMapClick={onMapClick} />, [mapArea, driver]);
  


  return (
    <div>
     {ImageMapComponent}
    </div>
  )
}

export default Driver
