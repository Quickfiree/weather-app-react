import React from 'react'
import Navbar from './Navbar'
import "./Details/App.css"
import DetailsPage from './Details/DetailsPage'

export default function App() {
  return (
    <div className='page'>
      <DetailsPage />
      
      <Navbar />
    </div>
  )
  // function button()
  // {
  // <div>
  //          <h2>Find Current Weather Conditions</h2>
  //          <div>
  //              {JSON.stringify(responseObj)}
  //          </div>
  //          <button onClick={getForecast}>Get Forecast</button>
  //      </div>
// }
}
