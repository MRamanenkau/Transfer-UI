import './App.css';
import {Button, TextField} from "@mui/material";

function App() {
  const sendExtrinsic = (n) => {
    console.log(n);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p> Send Tokens</p>
      </header>
      <section>
        <div className="Inputs">
          <div className="Input">
            <TextField id="outlined-basic" label="From" variant="outlined" />
          </div>
          <div className="Input">
            <TextField id="outlined-basic" label="To" variant="outlined" />
          </div>
          <div className="Input">
            <TextField id="outlined-basic" label="Amount" variant="outlined" />
          </div>
        </div>
        <div className="Button-send" onClick={() => sendExtrinsic(1233)}>
          <Button variant="contained" color="success">Send</Button>
        </div>
      </section>
    </div>
  );
}

export default App;
