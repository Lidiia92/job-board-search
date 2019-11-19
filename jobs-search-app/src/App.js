import React, {useState, useEffect} from 'react';
import User from './components/User';
import './App.css';

//user data
import userData from './data/user';

function App() {

  const [user, setUser] = useState({})

  useEffect(() => {
    setUser({...userData})
  }, []);

  return (
    <div className="App">
      <User user={user}/>
    </div>
  );
}

export default App;
