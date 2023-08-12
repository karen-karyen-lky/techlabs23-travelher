import React from 'react'

const Facts = () => {
  return (
    <div className='facts'>
        <div class="dot-container">
            <span class="dot">
                <h2 className='incircle'>76%</h2>
            </span>
            <span class="dot"><h2 className='incircle'>85%</h2></span>
            <span class="dot"><h2 className='incircle'>12%</h2></span>
            <span class="dot"><h2 className='incircle'>88%</h2></span>
            <span class="dot"><h2 className='incircle'>97%</h2></span>
        </div>
        <div className='description'>
            <ul class="horizontal-list">
            <li>people want to travel alone</li>
            <li>solo traveler are women</li>
            <li>women have been physically attacked/threaten</li>
            <li>women felt unsafe while travelling alone</li>
            <li>women felt they have no physical skills to define themselves</li>
            </ul>
        </div>

    </div>
  )
}

export default Facts