import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(1);

  const handleCounter = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1 style={{ padding:20, backgroundColor: 'red' }}> 
        {counter}
      </h1>  
      
      <button onClick={handleCounter}>Alo</button>
    </div>
  );
}

// ------------------------- setState Callback

function AppSetCallback() {
  const [counter, setCounter] = useState(1);

  const handleCounter = () => {
    setCounter(prevState => prevState + 1);
    setCounter(prevState => prevState + 1);
    setCounter(prevState => prevState + 1);
  }

  return (
    <div>
      <h1 style={{ padding:20, backgroundColor: 'red' }}> 
        {counter}
      </h1>  
      
      <button onClick={handleCounter}>Alo</button>
    </div>
  );
}

// ------------------------- initState Callback

function AppInitCallback() {
  const [user, setUser] = useState({
    'name': 'Vstorm',
    'age': 15,
    'des': 'VStorm Pro'
  });

  const handleUser = () => {
    setUser({
      ...user,
      'adress': 'Quang Ngai, VN'
    })
  }

  return (
    <div>
      <h1 style={{ padding:20, backgroundColor: 'red' }}> 
        {JSON.stringify(user)}
      </h1>  
      
      <button onClick={handleUser}>update User</button>
    </div>
  );
}

// ----------------------------- 30.Random Gift
const gifts = [
  'CPU i9',
  'RAM 32GB RGB',
  'RGB Keyboard'
]

function AppRandomGift() {
  const [gift, setGift] = useState("Chưa có phần thưởng");

  const handleGift = () => {
    setGift(gifts.at(Math.floor(Math.random() * gifts.length)));
    // console.log(Math.floor(Math.random() * gifts.length));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>{gift}</h1>
      <button onClick={handleGift}>Lấy thưởng</button>
    </div>
  );
}

// ----------------------------- 30.TwoWayBinding-Form

function Form_TwoWayBinding() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleRegister = () => {
    console.log({
      name: name,
      email: email
    })
  }

  return (
    <div style={{ padding: 20 }}>
      <input
        onChange={e => setName(e.target.value)}
        placeholder='Đăng nhập'
      />
      <input
        onChange={e => setEmail(e.target.value)}
        placeholder='Email'
      />

      <button onClick={handleRegister}>
        Register
      </button>
    </div>
  )
}


// ----------------------------- 30.TwoWayBinding-Radio
const lists = [{
    id: 1,
    name: 'HTML, CSS'
  }, {
    id: 2,
    name: 'JavaScript'
  }, {
    id: 3,
    name: 'ReactJS'
  }
];

function Radio_TwoWayBinding() {
  const [idChecked, setIdChecked] = useState(1);

  // console.log(idChecked)

  const handleRegister = () => {
    console.log("submit", idChecked);
  }

  return (
    <div style={{ padding: 20 }}>
      {
        lists.map(list => (
          <div key={list.id}>
            <input
              // name='checkName'
              checked={idChecked === list.id}

              onChange={()=> setIdChecked(list.id)}
              type='radio'
            />
            {list.name}
          </div>
        ))
      }

      <button onClick={handleRegister}>
        Submit
      </button>
    </div>
  )
}

// ----------------------------- 30.TwoWayBinding-CheckBox
const list2s = [{
    id: 1,
    name: 'HTML, CSS'
  }, {
    id: 2,
    name: 'JavaScript'
  }, {
    id: 3,
    name: 'ReactJS'
  }
];

function Checkbox_TwoWayBinding() {
  const [listIdChecked, setlistIdChecked] = useState([1, 3]);

  // console.log(listIdChecked.sort());

  const handleRegister = () => {
    console.log(listIdChecked.sort())
  }

  const handleCheckBox = (id) => {
    setlistIdChecked(prev => {
      if(listIdChecked.includes(id))
        return prev.filter(c => c != id)
      else
        return [...prev, id]
    });
  }

  return (
    <div style={{ padding: 20 }}>
      {
        list2s.map(list => (
          <div key={list.id}>
            <input
              checked={listIdChecked.includes(list.id)}
              onChange={() => handleCheckBox(list.id)}
              type='checkbox'
            />
            {list.name}
          </div>
        ))
      }

      <button onClick={handleRegister}>
        Submit
      </button>
    </div>
  )
}

// export default App;
// export default AppSetCallback;
// export default AppInitCallback;
// export default AppRandomGift;
// export default Form_TwoWayBinding;
// export default Radio_TwoWayBinding;
export default Checkbox_TwoWayBinding;
