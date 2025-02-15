import Sunrise from './Sunrise.png';
import Sunset from './Sunset.png'
const SunRiseSet = () => {
    return (
        <div>
            <table className="sunRiseSet">
                <tbody>
                    <tr>
                        <td>
                            <img src={Sunrise} alt="Null" />
                        </td>
                        <td>
                            <img src={Sunset} alt="Null" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            06:45
                        </td>
                        <td>
                            17:38
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SunRiseSet