import React from 'react'
import "./Message.scss"
// import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <div className='message' >
      <div className="container">
        {/* <span className="breadcrumbs">
          <Link to="/messages">  JOHN DOE  </Link>
        </span> */}
        <div className="messages">
          <div className="item">
            <img src="https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.webp?b=1&s=170667a&w=0&k=20&c=ZhlW6F6fSu42EG13PO0hkgV0L-MqHipJm1hT0yaRl9U=" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
          </div>
          <div className="item owner ">
            <img src="https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.webp?b=1&s=170667a&w=0&k=20&c=ZhlW6F6fSu42EG13PO0hkgV0L-MqHipJm1hT0yaRl9U=" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
          </div>
          <div className="item">
            <img src="https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.webp?b=1&s=170667a&w=0&k=20&c=ZhlW6F6fSu42EG13PO0hkgV0L-MqHipJm1hT0yaRl9U=" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
          </div>
          <div className="item owner ">
            <img src="https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.webp?b=1&s=170667a&w=0&k=20&c=ZhlW6F6fSu42EG13PO0hkgV0L-MqHipJm1hT0yaRl9U=" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
          </div>
          <div className="item">
            <img src="https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.webp?b=1&s=170667a&w=0&k=20&c=ZhlW6F6fSu42EG13PO0hkgV0L-MqHipJm1hT0yaRl9U=" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
          </div>
          <div className="item owner ">
            <img src="https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.webp?b=1&s=170667a&w=0&k=20&c=ZhlW6F6fSu42EG13PO0hkgV0L-MqHipJm1hT0yaRl9U=" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
          </div>
        </div>
        <div className="write">
          <textarea name="" id="" cols="30" rows="10" placeholder='write a message' ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message
