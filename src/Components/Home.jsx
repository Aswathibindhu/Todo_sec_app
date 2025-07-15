import React from 'react'
import NavigationBar from './NavigationBar'

const Home = () => {
  return (
    <div>
        <NavigationBar/>
        <div className="container">
            <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <img src="https://t3.ftcdn.net/jpg/01/10/01/90/360_F_110019055_JBbr778hMxpwuwDaFszyQNck5PhBYHli.jpg" class="card-img-top" alt="..." height={800} width={1000}/>
                            </div>
                        </div>
            </div>
        </div>
    </div>
  )
}

export default Home