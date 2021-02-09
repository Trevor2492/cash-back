import './App.css';

function App() {

  return (
    <div className="App">

      <div className="cash-back">
        <div>20<sup className="percent">%</sup></div>
        <div className="cash-back2">
          <div>CASH</div>
          <div>BACK</div>
        </div>
      </div>

      <div className="join">On all purchases when you join our membership</div><br />

      <div className="and">
        <hr></hr>
        <div>AND</div>
        <hr></hr>
      </div><br />

      <div className="membership">
        <img src="https://via.placeholder.com/250?text=Gift+Card+Image" alt=""></img>
        <div className="month">Get the cost of your membership back as a $35 Gift Card each month</div>
      </div>
      
      <div className="lower">
        <div className="how-to-setup">
          How to Setup
            <div className="setup">
              <div className="list">
                <img src="https://via.placeholder.com/50x50" alt=""></img>
                <div>Download the Breeze app and sign up</div>
              </div>
              <div className="list">
                <img src="https://via.placeholder.com/50x50" alt=""></img>
                <div>Join our membership and connect <br />your bank account</div>
              </div>
              <div className="list">
                <img src="https://via.placeholder.com/50x50" alt=""></img>
                <div>Scan to make a payment, earn cashback!</div>
              </div>
            </div>
            <div className="search">
              Search "Breeze Memberships" to download
              <div className="icons">
                <img src="https://via.placeholder.com/200x50?text=Google+Play+Logo" alt=""></img>
                <img src="https://via.placeholder.com/200x50?text=App+Store+Logo" alt=""></img>
              </div>
            </div>
        </div>
        <img src="https://via.placeholder.com/250x400?text=iPhone+Image" alt=""></img>
      </div>

    </div>
  );
}

export default App;
