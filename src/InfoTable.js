import circle from "./Details/circle_faded.png"

const InfoTable = () => {
  return (
    <div>
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

export default InfoTable