import "./detailsPage.css"

const DetailsPage = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const time = current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds();
  return (
    <div classname = "detailsPage">
        
        <h1>{date}</h1>
        <h2>{time}</h2>
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