import styles from './App.module.css'

import powredImage from './assets/powered.png'

const App = () => {
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={powredImage} alt="" width={150} />
        </div>
      </header>


      <div className={styles.container}>

        <div className={styles.leftSide}>
          <h1>Calculo de IMC</h1>
          <p>O IMC (Índice de Massa Corporal) é reconhecido pela OMS (Organização Mundial da Saúde)  como um padrão internacional que avalia se as pessoas, entre 20 e 59 anos, estão com peso ideal ou em excesso, em relação a sua altura. No entanto, vale lembrar que o resultado não indica como está o estado nutricional.</p>
        
           <input
           type="number"
           placeholder="Informe sua altura. Ex 1.50"
          />
          <input
          type="number"
          placeholder="Informe seu peso. Ex 50.3"
          />
          <button>calcular </button>
        </div>


        <div className={styles.rightSide}>
          ...

        </div>
      </div>

    </div >
  )
}

export default App;