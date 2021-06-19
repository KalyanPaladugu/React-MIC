import React from 'react'
import '../App.css'
import Resume from './Resume'
import { BrowserRouter,Route, Link } from 'react-router-dom'
function Home() {
    return (
        <div className="App">
           
            <BrowserRouter>
             <Route exact path="/" component={Home1} />
             <Route exact path="/Resume" component={Resume} />
            </BrowserRouter>
        </div>
    )

}

function Home1 (){

    return (
        <div>
             <h1>This is Home Page</h1>
            <h3> To navigate Resume Page Click below Link </h3>
            <Link to="/Resume" className="btn btn-primary ">Resume</Link>
        </div>
    )
}

export default Home;
