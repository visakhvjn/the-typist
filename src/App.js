/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Phrase } from './components/Phrase';
import { quotes } from './config/constants';

function App() {

  const [typedContent, setTypedContent] = useState('');
  const [accuracy, setAccuracy] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [lorem, setLorem] = useState('');

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * quotes.length);

    setLorem(quotes[randomNumber].text + quotes[randomNumber + 1].text + quotes[randomNumber + 2].text);
    setIsLoading(false);

  }, []);

  useEffect(() => {
    updateAccuracy();
  }, [typedContent.length])

  const typeHandler = (e) => {
    setTypedContent(e.target.value);
  }

  const updateAccuracy = () => {

    if (isNaN(typedContent.length) || !typedContent.length) {
      return;
    }

    let correct = 0;

    for (let i = 0; i < typedContent.length; i++) {
      if (lorem.charAt(i) === typedContent.charAt(i)) {
        correct = correct + 1;
      }
    }

    const ratio = parseInt(correct/typedContent.length * 100);

    setAccuracy(ratio);
  }

  return (
    <div className="App">
      <div className='header'>
        <h1 className='label'>The Typist</h1>
        <p className='subLabel'>A programmer's life ...</p>
      </div>
      {isLoading ? <div className='content'>Please wait</div> : <div className='content'>
        <h4 className='label'>Accuracy: {accuracy}% | CPM: 0</h4>
        <Phrase original={lorem} typed={typedContent}/>
        <input className='inputBox' onKeyUp={typeHandler} autoFocus={true} onBlur={({ target }) => target.focus()} />
      </div>}
    </div>
  );
}

export default App;
