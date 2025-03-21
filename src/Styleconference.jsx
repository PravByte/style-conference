import React from 'react'
import speakers from '../src/assets/speakers.jpg'
import schedule from "../src/assets/schedule.jpg"
import venue from '../src/assets/venue.jpg'
const Styleconference = () => {
  return (
    <div>
      {/* <Link to={'/'}></Link> */}

      <div className="container col-8 mt-4 ">
        <div className="row">
          <div className='col-4'>
            <h6 className='lh-lg car'>SPEAKERS</h6>
            <div className="card w-100 border border-0">
              <img src={speakers} alt="" className='img-fluid card-img-top' />
              <div className="card-body">
                <h5 style={{ fontFamily: "'Roboto', sans-serif" }} className='t fw-bolder'>World-Class Speakers</h5>
                <p style={{ fontFamily: "'Roboto', sans-serif" }} className='p'>Joining us from all around the world are over twenty fantastic speakers, here to share their stories.</p>
              </div>
            </div>
          </div>
          <div className='col-4' >
            <h6 className='car lh-lg'>SCHEDULE</h6>
            <div className="card w-100 border border-0">

              <img src={schedule} alt="" className='img-fluid card-img-top' />
              <div className="card-body">
                <h5 style={{ fontFamily: "'Roboto', sans-serif" }} className='t fw-bold'>Three Inspiring Days</h5>
                <p style={{ fontFamily: "'Roboto', sans-serif" }} className='p'>Enjoy three inspiring and action-packed days of tals, gatherings, and all-around good times.</p>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <h6 className='car lh-lg'>VENUE</h6>
            <div className="card w-100 border border-0">
              <img src={venue} alt="" className='img-fluid card-img-top' />
              <div className="card-body">
                <h5 style={{ fontFamily: "'Roboto', sans-serif", }} className='t fw-bold'>The Chicago Theatre</h5>
                <p style={{ fontFamily: "'Roboto', sans-serif" }} className='p'>Within the heart of downtown Chicago, The Chicago Theatre will provide a beautiful conference venue.</p>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}
export default Styleconference