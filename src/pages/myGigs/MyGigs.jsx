import React from 'react'
import "./MyGigs.scss"
import { Link } from 'react-router-dom'

const MyGigs = () => {
  return (
    <div className='myGigs'>
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add"  ><button>Add New Gig</button></Link>
        </div>
        <table>
          <tr>
            <th>Images</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td><img className='img' src="https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg" alt="" /></td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td><img className='img' src="https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg" alt="" /></td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td><img className='img' src="https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg" alt="" /></td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MyGigs
