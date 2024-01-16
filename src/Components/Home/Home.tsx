import React, {FC} from 'react';
import './Home.scss'

const HomeComponent:FC = () => {
  return (
    <>
        <div>Hello, Its me I guess</div>
        <img src="/Images/idc.png" alt="Showcase image" style={{width: '200px', height: '200px'}} />
        <img src="/idc.png" alt="Showcase image" style={{width: '200px', height: '200px'}} />
    </>
  );
}

export default HomeComponent;
