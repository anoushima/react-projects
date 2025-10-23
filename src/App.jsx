import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sample from './pages/Sample'
// import Button from './pages/Button1'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* <h1> FATE OF OPHELIA</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat impedit necessitatibus explicabo rerum corporis adipisci voluptatem ratione alias distinctio quibusdam culpa optio temporibus, dicta, vitae architecto consequatur vero obcaecati incidunt!</p>
      <Sample /> */}
      {/* <Button /> */}
      <Sample/>

      
    </>
  )
}

export default App
