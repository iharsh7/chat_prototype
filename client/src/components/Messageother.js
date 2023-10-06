import React from 'react'

const Messageother = ({props}) => {
  return (
    <div className='othermessagecont'>
        <div className='convercont'>
            <p className='icon'>{props.sender.name[0]}</p>
            <div className='othertext'>
                <p className='messtitle'>{props.sender.name}</p>
                <p className='lastmess'>{props.content}</p>
                {/* <p className='timestamp'>10:00am</p> */}
            </div>
        </div>

    </div>
  )
}

export default Messageother