import stlyles from './App.module.css'
import poweredImage from'./assets/powered.png'
const app = () => {
  return (
    <div className= {stlyles.main}>
    /**/
    <header>
       <div className={stlyles.headerContainer}> 
<img src={poweredImage} alt="" width={150} />
      </div>
    </header>
    </div>
  )
}
export default app;