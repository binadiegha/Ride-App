import React, {useState, useEffect} from 'react'
import {  useParams, useHistory, Switch } from 'react-router-dom'
import { ImageMap } from '@qiuz/react-image-map';
import NameplatePhoto from '../../assets/images/nameplate/digital-name-plate-landscape.jpg'

const NamePlate = () => {

  let { id } = useParams();
  const history = useHistory();
  const [namePlate, setNamePlate] = useState()



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
      case 'africanNerd':
        setNamePlate(NameplatePhoto)
        break

      default:
        setNamePlate(NameplatePhoto)
        break
    }
  }, [])

     
 const  ImageMapComponent = React.useMemo(() => <ImageMap className="usage-map" src={namePlate} map={mapArea} onMapClick={onMapClick} />, [mapArea, namePlate]);
  


  return (
    <div>
     {ImageMapComponent}
    </div>
  )
}

export default NamePlate
