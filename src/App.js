import './App.css';
import {Button, TextField} from "@mui/material";
import simple_jsonrpc from "simple-jsonrpc-js";

let headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
}

let jrpc = simple_jsonrpc.connect_xhr('http://127.0.0.1:9944', headers);

function App() {
  const sendExtrinsic = (n) => {
    // wscat -c 127.0.0.1:9944 -x '{"jsonrpc":"2.0", "id":1, "method":"author_submitExtrinsic", "params": ["0004000000"]}'
   jrpc.call('author_submitExtrinsic', ['0004000000']).then(function(res) {
      console.log("res:", res);
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
