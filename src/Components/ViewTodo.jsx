import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar';
import axios from 'axios';

const ViewTodo = () => {
    const containerStyle = {
        backgroundImage: 'url("https://t4.ftcdn.net/jpg/02/42/79/15/360_F_242791586_qkCFcop5qIbmhAZYX7lpAUEWU03GfIFL.jpg")', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    };
    const [TodoData, ChangeTodo] = useState(
        [

        ]
    )
    const FetchData =()=>{
        axios.get("https://dummyjson.com/todos").then(
            (response)=>{
                        ChangeTodo(response.data.todos)
            }
        ).catch(
            alert("Something Went Wrong")
        )
    }
    useEffect(()=>{FetchData()},[])
    return (
        <div style={containerStyle}>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {TodoData.map(
                                (value,index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.id}</h5>
                                                    <h6 class="card-subtitle mb-2 text-body-secondary">{value.todo}</h6>
                                                    <p class="card-text">{value.completed?<p className='text-success'>True</p>:<p className='text-danger'>False</p>}</p>
                                                    <p class="card-text">{value.userId}</p>
                    

                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTodo