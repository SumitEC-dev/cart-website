import * as React from 'react';
import { useEffect, useState } from 'react'


function Dashboard({handleClick}) {
    const [users, setUsers] = useState([]);
    const fetchUserData = () => {
        fetch("https://dummyjson.com/products")
          .then(response => {
            return response.json()
          })
          .then(data => {
            console.log(data.products)
            setUsers(data.products)
          })
      }
    
      useEffect(() => {
        fetchUserData()
        console.log(fetchUserData());
      }, [])
        return (   
            <section>
                <div className="">
                    <div className="row">
                        {
                            users.length > 0 &&
                            users.map(user => {
                                return (
                                    <div className="col-md-3" key={user.id}>
                                        <div className="card">
                                            <div className="card-header text-center bg-white">
                                                <img src={user.images[0]} alt="" width="220" height="150"/>
                                            </div>
                                            <div className="card-body rgba-light-green-light">
                                                <ul className="list-group">
                                                    <li className="list-group-item">
                                                        {user.title}
                                                    </li>
                                                    <li className="list-group-item">
                                                        &#8377; {user.price.toFixed(2)}
                                                        {/* <span className='text-center'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill bg-sucess" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg></span> */}
                                                    </li>
                                                    <li className="list-group-item">
                                                    <i class="bi bi-star"></i> <button className='btn btn-outline-success btn-sm' onClick={()=>handleClick(user)}>Add to Cart</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="row">
                        <div className="col">
                            {
                                // for empty data
                                users.length === 0 &&
                                <p  className="font-weight-bold text-success text-center">NO Records Found in Database</p>
                            }
                        </div>
                    </div>
                </div>
            </section>
      
        );
}

export default Dashboard;