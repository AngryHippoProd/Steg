import './App.css';
import { FormControl, InputLabel , Input,
         Card, } from '@mui/material';
import Jello from './upload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Steganography
      </header>
      <FormControl className="form-container">
        <InputLabel>Image Upload</InputLabel>
      </FormControl>
      <Jello></Jello>
    </div>
  );
}

export default App;
