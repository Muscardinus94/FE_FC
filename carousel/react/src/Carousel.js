import { useState, useRef, useEffect } from 'react';
import styled from "styled-components";
import Item from './Item';
import Button from './Button';

const CarouselStyle = styled.div`
  overflow: hidden;
  width: 90%;
  margin: auto;
  * {
    box-sizing: border-box;
  }
  .carousel{
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
`;


export default function Carousel(){

  const totalItems = 5;
  const [ current, setCurrent ] = useState(0);
  const isMoving = useRef(false);

  useEffect(() => {
    isMoving.current = true;
    setTimeout(() => {
      isMoving.current = false;
    }, 500)
  }, [current])


  // 다음 슬라이드로 이동
  const moveNext = () => {
    // Do Something Here!
    if (!isMoving.current) {
      if (current === totalItems - 1) setCurrent(0);
      else setCurrent((prev) => prev + 1);
    }
  }

  // 이전슬라이드로 이동
  const movePrev = () => {
    // Do Something Here!
    if (!isMoving.current) {
      if (current === 0) setCurrent(totalItems - 1);
      else setCurrent((prev) => prev - 1);
    }
  }


  const ItemList = Array(totalItems).fill().map(( _ , index) => {

    const key = `item_${index}`;

    // prev 와 next 상태를 작성
    // Do Something Here!
    let prev = 0;
    let next = 0;
    if (current === 0) {
      prev = totalItems - 1;
      next = current + 1;
    }
    if (current === totalItems - 1) {
      prev = current - 1;
      next = 0;
    }


    return (

      <Item
        src={`https://picsum.photos/id/${index}/1600/900`}
        key={key}
        active={index === current}
        prev={index === prev}
        next={index === next}
      />

    );
  })

  return (<CarouselStyle>
      <div className="carousel">

        {ItemList}

        <Button
          prev
          handleSlide={movePrev}
        />
        <Button
          next
          handleSlide={moveNext}
        />

      </div>
    </CarouselStyle>)

}
