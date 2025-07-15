import React from 'react'
import NavigationBar from './NavigationBar';

const AddTodo = () => {
     const containerStyle = {
        backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1683309568772-57011d6c1b7b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    };
  return (
    <div style={containerStyle}>
        <NavigationBar/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Id</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">User Id</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Todo</label>
                                <input type="text" className="form-control" />

                            </div>
                            <center>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Completed</label><br></br>
                                <input type="checkbox" id="" name="" value="" />
                                <label for="vehicle2">  false </label>   
                                <input type="checkbox" id="" name="" value="" />
                                <label for="">  True </label><br />
                            </div>
                            </center>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-success">Submit</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AddTodo