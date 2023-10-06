import React from 'react'

const Messageself = ({props}) => {
   
  return (
    <div className='selfmessagecont'>
        <div className=' selfm'>
        <p className='slefmessagetitle'>{props.content}</p>
        </div>
    </div>
  )
}

export default Messageself