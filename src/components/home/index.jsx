import React from 'react'
import Maybach from '../../assets/images/home-maybach.jpg'
import RollsRoyce from '../../assets/images/home-rr.jpg'
import RangeRover from '../../assets/images/home-rrover.jpg'
import './home.less';
import { Carousel } from 'antd';
// import { useSwipeable } from 'react-swipeable';
import { ImageMap } from '@qiuz/react-image-map';
import { useHistory } from 'react-router-dom';




const Home = () => {

  let history = useHistory();

  function onChange (a,b,c){
    console.log(a,b,c)
  }

  const mapArea = [
    {
      "left":"0%",
      "top":"0%",
      "height":"12%",
      "width":"33%",
      "style":{
        "background":"rgba(0, 0, 0, 0.0)",
        "cursor": "pointer"
      }
    },
    {
      "left":"0%",
      "top":"12%",
      "height":"12%",
      "width":"33%",
      "style":{
        "background":"rgba(0, 0, 0, 0.0)",
        "cursor": "pointer"
      }
    },
    {
      "left":"80%",
      "top":"0%",
      "height":"15%",
      "width":"20%",
      "style":{
        "background":"rgba(0, 0, 0, 0.0)",
        "cursor": "pointer"
      }
    },
    {
      "left":"33%",
      "top":"0%",
      "height":"12%",
      "width":"13%",
      "style":{
        "background":"rgba(0, 0, 0, 0.0)",
        "cursor": "pointer"
      }
    },
    {
      "left":"72%",
      "top":"calc(100% - 34%)",
      "height":"34%",
      "width":"28%",
      "style":{
        "background":"rgba(0, 0, 0, 0.0)",
        "cursor": "pointer"
      }
    }
  
  ];
  
  const onMapClick = (area, index) => {
    if(index === 0) {
      history.push(`/car-music`)
    }
    if(index === 4){
      history.push('/car/Maybach')
    }

    console.log(`clicked ${index + 1}`)
    // const tip = `click map${index + 1}`;
    // console.log(tip, area);
    // alert(tip);
  }

  const onMapClick1 = (area, index) => {
    if(index === 0) {
      history.push(`/car-music`)
    }
    if(index === 4){
      history.push('/car/Rolls-royce')
    }

    console.log(`clicked ${index + 1}`)
    // const tip = `click map${index + 1}`;
    // console.log(tip, area);
    // alert(tip);
  }

  const onMapClick2 = (area, index) => {
    if(index === 0) {
      history.push(`/car-music`)
    }
    if(index === 4){
      history.push('/car/Range-Rover')
    }

    console.log(`clicked ${index + 1}`)
    // const tip = `click map${index + 1}`;
    // console.log(tip, area);
    // alert(tip);
  }

  // <ImageMap
	// className="usage-map"
	// src={Maybach}
	// map={mapArea}
	// onMapClick={onMapClick}
  // />

const ImageMapComponent1 = React.useMemo(() => <ImageMap className="usage-map" src={Maybach} map={mapArea} onMapClick={onMapClick} />, [mapArea, Maybach]);
const ImageMapComponent2 = React.useMemo(() => <ImageMap className="usage-map" src={RollsRoyce} map={mapArea} onMapClick={onMapClick1} />, [mapArea, RollsRoyce]);
const ImageMapComponent3 = React.useMemo(() => <ImageMap className="usage-map" src={RangeRover} map={mapArea} onMapClick={onMapClick2} />, [mapArea, RangeRover]);
  // const handlers = useSwipeable({
  //   onSwipedLeft: (eventData) => {
  //     console.log('you swipped')
  //   }
  // });


  return (
    <div>
      <Carousel  className="carousel_holder" afterChange={onChange}>

        <div>
          {/* <img className="HomePhoto" src={Maybach} /> */}
          {ImageMapComponent1}
        </div>

        <div>
          {/* <img className="HomePhoto" src={RollsRoyce} /> */}
          {ImageMapComponent2}
        </div>

        <div>
          {/* <img className="HomePhoto" src={RollsRoyce} /> */}
          {ImageMapComponent3}
        </div>

      </Carousel>
       
    </div>
  )
}

export default Home
