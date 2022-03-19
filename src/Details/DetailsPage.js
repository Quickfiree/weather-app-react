import "./detailsPage.css";
import HighLowTemps from "./HighLowTemps";
import InfoTable from "./InfoTable";
import TempInfo from "./TempInfo";
import SunRiseSet from "./SunRiseSet";
import Status from "./Status";

const DetailsPage = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const time = current.getHours() + ':' + current.getMinutes();
  return (
    <div className = "detailsPage">
        <h2 className = "date">{date}</h2>
        <h2 className = "time">{time}</h2>
        <h1 className = "mainTemp">8<sup id = "super">&#176;C</sup></h1>
        <HighLowTemps />
        <Status />
        <SunRiseSet />
        <TempInfo />
        <InfoTable />
    </div>
  )
}

export default DetailsPage