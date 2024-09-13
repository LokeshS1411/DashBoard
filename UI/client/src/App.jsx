
import './App.css'


function App() {


  return (
    <>
      <div className="container">
        <div className="today">
          <div className="up">
            <h2>TODAYS  FOCUS</h2>
            <h3>:</h3>
          </div>
          <div className="h">
            <h1>1.8</h1>
            <h4>/ 6H</h4>
          </div>

        </div>
        <div className="task">
          <div className="up">
            <h2>COMPLETED TASKS</h2>
            <h3>:</h3>
          </div>
          <div className="h">
            <h1>2</h1>
            <h4>/ 5H</h4>
          </div>
        </div>


        <div className="paid">

          <div className="up">
            <h2>PAID INVOICES</h2>
            <h3>:</h3>
          </div>
          <div className="paid-down">
            <div className="med">
              <h1>24</h1>
              <h4>/ 32</h4>
            </div>
            <div className="down">
              <p className='tot'>TOTAL</p>
              <p className='count'>$6.000 / 12.000</p>
            </div>

          </div>

        </div>
        <div className="balance">

          <div className="balance-tit">
            <h2>TOTAL BALANCE (BTC)</h2>
            <div className="date">
              <p>7D</p>
              <p>30D</p>
              <p style={{ backgroundColor: "gray", textAlign: "center", height: "20px", width: "30px" }}>5M</p>
              <p>12M</p>
            </div>
          </div>
          <div className="total-balance">
            <div className="balance-total">
              <h1>1.592</h1>
            </div>
            <div className="bar-chart">
              <div className="bar" style={{ height: "20%", backgroundColor: " rgb(201, 211, 155)" }}></div>
              <div className="bar" style={{ height: "30%", backgroundColor: " rgb(201, 211, 155)" }}></div>
              <div className="bar" style={{ height: "60%", backgroundColor: " rgb(75, 116, 166)" }}></div>
              <div className="bar" style={{ height: "50%", backgroundColor: " rgb(201, 211, 155)" }}></div>
              <div className="bar" style={{ height: "40%", backgroundColor: " rgb(201, 211, 155)" }}></div>
            </div>
          </div>
        </div>





        <div className="fast">
          <div className="up">
            <h2>MJ FAST HOURS</h2>
            <h3>:</h3>
          </div>
          <div className="paid-down1">
            <div className="med1">
              <h1>24</h1>
              <h4>/ 32</h4>
            </div>
            <div className="down">
              <p className='tot'>LATEST WORKS</p>

            </div>
            <div className="images">
              <img src="img/img1.jpg" alt="Image 1" />
              <img src="img/img2.jpg" alt="Image 2" />
              <img src="img/img3.jpg" alt="Image 3" />
              <img src="img/img4.jpg" alt="Image 4" />
              <img src="img/img5.jpg" alt="Image 5" />
              <img src="img/img6.jpg" alt="Image 6" />
            </div>
          </div>




        </div>
        <div className="effect">
          <div className="effect-top">
            <h2>AESTHETIC- <br />USABILITY <br /> EFFECT</h2>
            <p>USERS OFTEN PERCEIUE <br /> AESTHETICALLY PLEASING DESIGN AS <br />
              DESIGN THAT MORE USEABLE
            </p>
          </div>
          <div className="effect-circle">
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
          </div>
        </div>
        <div className="api">
          <h2>CHATGPT API USAGE</h2>
          <div className="use">
            <h1>
              5.01
            </h1>
            <h3> / $18.00</h3>
          </div>
          <div className="thin-line"></div>
        </div>






        <div className="work">
          <div className="circle">

            <div className="inner-circle">
              <h1>7.89</h1>
              <p>WORK-LIFE BALANCE</p>

            </div>
          </div>

        </div>


        <div className="custom">
          <h3 style={{ color: "white", backgroundColor: "black", height: "30px", width: "30px", fontSize: "25px" }}>&#8599;</h3>
          <div className="custom-top">
            <h2>CUSTOM <br /> DASHBOARD</h2>
            <h4>10/ 20 TEMPLATES</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
