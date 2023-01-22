import './App.css';
import {Button, TextField} from "@mui/material";
import simple_jsonrpc from "simple-jsonrpc-js";
import {useState} from "react";
import { u32, Enum } from "scale-ts"

const HTTP_NODE_URL = " http://127.0.0.1:9944";
const jrpc = simple_jsonrpc.connect_xhr(HTTP_NODE_URL);

function toHex(bytes) {
  return bytes.reduce((output, elem) =>
        (output + ('0' + elem.toString(16)).slice(-2)),
    '');
}

const Call = Enum({
  SetValue: u32,
});

function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  const sendExtrinsic = () => {
    const encodedExtrinsic = Call.enc({
      tag: "SetValue",
      value: Number(amount),
    });

    jrpc.call('author_submitExtrinsic', [toHex(encodedExtrinsic)]).then(function(res) {
      console.log("response:", res);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <p> Send Tokens</p>
      </header>
      <section>
        <div className="Inputs">
          <div className="Input">
            <TextField onChange={(e) => setFrom(e.target.value)}
             value={from}
             id="outlined-basic"
             label="From"
             variant="outlined"
            />
          </div>
          <div className="Input">
            <TextField
              onChange={(e) => setTo(e.target.value)}
              value={to}
              id="outlined-basic"
              label="To"
              variant="outlined"
            />
          </div>
          <div className="Input">
            <TextField
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              id="outlined-basic"
              label="Amount"
              variant="outlined"
            />
          </div>
        </div>
        <div className="Button-send" onClick={() => sendExtrinsic()}>
          <Button variant="contained" color="success">Send</Button>
        </div>
      </section>
    </div>
  );
}

export default App;
