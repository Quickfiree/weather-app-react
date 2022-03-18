import Raincloud from './Torrential_Rain.png';
import Thermometer from './Dew_Point.png';
import Wind from './Wind.png';

const InfoTable = () => {
  return (
    <div>
        <table className = "infoTable">
          <tbody>
            <tr>
              <td>
                <img src = {Raincloud} alt = "info"/>
              </td>
              <td>
                <img src = {Thermometer} alt = "info"/>
              </td>
              <td>
                <img src = {Wind} alt = "info"/>
              </td>
            </tr>
            <tr>
              <td>
              <img src = {Raincloud} alt = "info"/>
              </td>
              <td>
              <img src = {Thermometer} alt = "info"/>
              </td>
              <td>
                <img src = {Wind} alt = "info"/>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default InfoTable