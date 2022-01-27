import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ({category}) => {

    const {data:images,loading} = useFetchGifs(category);
    
  return (
    <>
        <h3 className='animate__animated animate__fadeInUp'>{category}</h3>

        {loading && <p>Loading</p>}

        <div className='card-grid'>
            {
                    images.map( img =>( 
                    <GiftGridItem 
                        key={img.id}
                        {...img}
                    />  
                    ))
            }   
        </div>
    </>
  );
};
