import React, {FC,useEffect,useState} from 'react';
import './Carousel.scss'

interface CarouselProps{
    slides: string[];
}

const Carousel:FC<CarouselProps> = ( props ) => {
    const [slideState,setSlideState] = useState<number>(0)

    function nextSlide(){
        if(slideState !== (props.slides.length - 1)){
            setSlideState(slideState + 1)
        }
    }
    function previousSlide(){
        if(slideState !== 0){
            setSlideState(slideState - 1)
        }
    }
    return(
        <div className='carousel'>
            {props.slides.map((slide,index)=>{
                return <img src={slide} alt="" key={index} className={slideState === index ? 'carousel-slide' : 'carousel-slide-hidden'}/>
            })}
            <button className='carousel-buttons' id='right-arrow' onClick={nextSlide} style={props.slides.length === 1 ? {display: 'none'} : {}}></button>
            <button className='carousel-buttons' id='left-arrow' onClick={previousSlide} style={props.slides.length === 1 ? {display: 'none'} : {}}></button>


            <span className='carousel-indicators-container'>
                {props.slides.map((_,index)=>{
                    return <button key={index} onClick={()=>{setSlideState(index)}} className={slideState === index ? 'carousel-indicator' : 'carousel-indicator carousel-indicaor-inactive'}></button>
                })}
            </span>
        </div>
    )

}

export default Carousel;
