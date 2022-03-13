import "./detailsPage.css"

const DetailsPage = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const time = current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds();
  return (
    <div classname = "detailsPage">
        
        <h2 class = "date">{date}</h2>
        <h2 class = "time">{time}</h2>
        <h1 class = "mainTemp"> 8</h1>
        <p class = "highLowTemps">H: 8 L: 8</p>
        <p class = "tempInfo1">morning temp: 10</p>
        <p class = "tempInfo2">day temp: 10</p>
        <p class = "tempInfo3">evening temp: 10</p>
        <p class = "tempInfo4">night temp: 10</p>
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