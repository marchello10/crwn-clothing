import React from 'react';
import { withRouter } from 'react-router-dom';
// withRouter is a higher order component
// a function that takes a component as an argument and 
// returns you a modified component

import './menu-item.styles.scss'

// we have access to history because of export withRouter(MenuItem)
// we use ${match.url}, so we can access our page even if we write smth like this:
// http://localhost:3000/somemarchedURL/linkUrl

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div
        className={`${size} menu-item`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            className="background-image"
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

// return components with access to location, match and history props
export default withRouter(MenuItem);
