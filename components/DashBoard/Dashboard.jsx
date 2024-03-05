import React from 'react'
import AiComponent from '../Ai Component/AiComponent'

const Dashboard = () => {
    return (
        <div className='fixed bottom-0'>
            <div className='flex'>
                <div>
                    <img src='/rightNav.png' alt='right' style={ { zoom: 0.7 } } />
                </div>
                <div>
                    <img src='/leftNav.png' alt='right' style={ { zoom: 0.7 } } />
                    <AiComponent />
                </div>
            </div>
        </div>
    )
}

export default Dashboard