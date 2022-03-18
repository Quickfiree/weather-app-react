import "./detailsPage.css"
import InfoTable from "./InfoTable";
import TempInfo from "./TempInfo";

const DetailsPage = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const time = current.getHours() + ':' + current.getMinutes();
  return (
    <div className = "detailsPage">
        <h2 className = "date">{date}</h2>
        <h2 className = "time">{time}</h2>
        <h1 className = "mainTemp">8<sup>&#176;C</sup></h1>
        <p className = "highLowTemps">H: 8<sup>&#176;C</sup> L: 8<sup>&#176;C</sup></p>
        <TempInfo />
        <InfoTable />
    </div>
  )
}

export default DetailsPage