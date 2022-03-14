import "./detailsPage.css"
import circle from "./Details/circle_faded.png"

const DetailsPage = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const time = current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds();
  return (
    <div className = "detailsPage">
        <h2 className = "date">{date}</h2>
        <h2 className = "time">{time}</h2>
        <h1 className = "mainTemp"> 8</h1>
        <p className = "highLowTemps">H: 8 L: 8</p>
        <p className  = "tempInfo1">morning temp: 10</p>
        <p className = "tempInfo2">day temp: 10</p>
        <p className = "tempInfo3">evening temp: 10</p>
        <p className = "tempInfo4">night temp: 10</p>
        <table className = "infoTable">
          <tbody>
            <tr>
              <td>
                <img src = {circle} alt = "info"/>
              </td>
              <td>
                <img src = {circle} alt = "info"/>
              </td>
              <td>
                <img src = {circle} alt = "info"/>
              </td>
            </tr>
            <tr>
              <td>
                <img src = {circle} alt = "info"/>
              </td>
              <td>
                <img src = {circle} alt = "info"/>
              </td>
              <td>
                <img src = {circle} alt = "info"/>
              </td>
            </tr>
          </tbody>
        </table>
        
    </div>
  )
}
function t()
{
  return (
    <div className='App'>
      <h1>Ola Welcome to the Weather app </h1>
      </div>
  )
}

export default DetailsPage