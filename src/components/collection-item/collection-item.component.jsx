import React from 'react';

import './collection-item.style.scss';

const CollectionItem = ({ id, name, price, imageUrl}) => (
    <div className='collection-item'>
        <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            
        </div>
    </div>
)

export default CollectionItem;