import React, {useState, useEffect} from 'react'
import {  useParams, useHistory, Switch } from 'react-router-dom'
import { ImageMap } from '@qiuz/react-image-map';
import RideModePhoto from '../../assets/images/ride-mode/ride-mode-landscape.jpg'

const RideMode = () => {

  let { id } = useParams();
  const history = useHistory();
  const [rideMode, setRideMode] = useState()



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

  
  ];
  
  const onMapClick = (area, index) => {
    if(index === 0) {
      history.goBack()
    }
    // if(index === 4){
    //   history.push('/car/Maybach')
    // }

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
      case 'executive':
        setRideMode(RideModePhoto)
        break

      default:
        setRideMode(RideModePhoto)
        break
    }
  }, [])

     
 const  ImageMapComponent = React.useMemo(() => <ImageMap className="usage-map" src={rideMode} map={mapArea} onMapClick={onMapClick} />, [mapArea, rideMode]);
  


  return (
    <div>
     {ImageMapComponent}
    </div>
  )
}

export default RideMode
