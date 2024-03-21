import React from 'react'
import "./Orders.scss"
// import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'

const Orders = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))

  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      newRequest.get(`/orders`).then((res) => { return res.data })
  })



  // let userId = [];

  // if (currentUser.isSeller) {
  //   userId.push(data?.buyerId);
  // } else {
  //   userId.push(data?.sellerId);
  // }

  // console.log(userId)


  // const { isLoading: isLoadingUser, error: errorUser, data: dataUser } = useQuery({
  //   queryKey: ['user', userId],
  //   queryFn: () =>
  //     newRequest.get(`/users/${userId}`).then((res) => { return res.data }),
  //     enabled:!!userId, // useQuery works only when data is present in line 21
  // })
  // console.log(dataUser)

  // currentUser.isSeller ? {user:data.buyerId} : {user:data.sellerId}

  return (
    <div className='orders'>
      {isLoading ? "Loading ..." : error ? "Something went wrong" : (<div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>Images</th>
              <th>Title</th>
              <th>Price</th>
              <th>{currentUser?.isSeller ? "Buyer" : "Company"}</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order) => (
              <tr key={order._id}>
                <td><img className='img' src="https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg" alt="" /></td>
                <td>{order.title}</td>
                <td>{order.price}</td>
                <td>123</td>
                <td>
                  <img className='message' src="/img/message.png" alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>)}
    </div>
  )
}

export default Orders



