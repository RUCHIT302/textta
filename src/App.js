
import { useState } from 'react';
import Navbar from './componet/Navbar';
import Textforms from './componet/Textforms';




function App() {
  const [mode, setmode] = useState('light');




  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';

    }

  }
  return (
    <>
      <Navbar title="Textta" aboutText="about Textta" mode={mode} toggleMode={toggleMode} />
      {/*<Btn/>*/}
      {/*<Alert alert="Wecome to the textta"/>*/}
      <div className="container">
        <Textforms heading="Enter the text" mode={mode} />
      </div>

    </>

  );
}

export default App;
