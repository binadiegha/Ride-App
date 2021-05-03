import React, {useState, useEffect} from 'react'
import {  useParams, useHistory } from 'react-router-dom'
import { ImageMap } from '@qiuz/react-image-map';
import ErrandsPhoto from '../../assets/images/errands/driver-errands.jpg'

const Errands = () => {

  let { id } = useParams();
  const history = useHistory();
  const [errandPhoto, setErrandPhoto] = useState()



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

    // yes :  index of 1
    {
      "left":"13%",
      "top":"55%",
      "height":"12%",
      "width":"14%",
      "style":{
        "background":"rgba(0, 0, 0, 0.0)",
        "cursor": "pointer"
      }
    },

    // no :  index of 2
    {
      "left":"28%",
      "top":"55%",
      "height":"12%",
      "width":"14%",
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
      history.goBack()
    }

    if(index === 2) {
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
      case 'errand-one':
        setErrandPhoto(ErrandsPhoto)
        break

      default:
        setErrandPhoto(ErrandsPhoto)
        break
    }
  }, [])

     
 const  ImageMapComponent = React.useMemo(() => <ImageMap className="usage-map" src={errandPhoto} map={mapArea} onMapClick={onMapClick} />, [mapArea, errandPhoto]);
  


  return (
    <div>
     {ImageMapComponent}
    </div>
  )
}

export default Errands
