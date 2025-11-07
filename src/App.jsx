import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Sample from './pages/Sample'
// import Button from './pages/Button1'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Myclassexample from './pages/Myclassexample'
// import Counter from './pages/Counter'
// import Automatic_counter from './pages/Automatic_counter'
// import Stopwatch from './pages/Stopwatch'
// import User_list from './pages/User_list'
// import Mounted from './pages/Mounted'
// import Date from './pages/Currenttime'
import Travelpage from './Travelpage';

function App() {
  // const [count, setCount] = useState(0)
  // const student="anoushima";
  // const course="python";


  const destinations=[
    {place:'Eiffel Tower',country:'France',image:'https://www.theinvisibletourist.com/wp-content/uploads/2022/02/featured_215.jpg',description:' Eiffel Tower is a symbol of love, though its original purpose was not to represent romance,It has become an iconic symbol of love and romance due to its romantic setting in Paris'},
    {place:'Louvre Museum',country:'France',image:'https://www.oxfordshiremind.org.uk/app/uploads/2020/06/WFW-2-1024x682-1.jpg',description:'  the worlds most visited art museum, home to iconic masterpieces like the Mona Lisa, Venus de Milo, and the Winged Victory of Samothrace'},
    {place:'Disney Land',country:'France',image:'https://media.architecturaldigest.com/photos/621e2b8a0dfcde70e6b201e0/1:1/w_1707,h_1707,c_limit/SB_2614-HDR-scaled.jpeg',description:'  a magical experience for visitors of all ages. The park is full of detailed attractions, shows, and parades that bring beloved Disney stories to life. '},
    {place:'Notre-Dame Cathedral ',country:'France',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaWSozETXjFTc38DtGbWpzPF-ck4KOHDrxQ&s',description:' The cathedrals breathtaking stained glass windows, elaborate stone carvings, and soaring spires, which reach heights of over 100 meters'},

  ]

  return (
    <>
     {/* <Sample name="anoushima"/>
      
      {/* <h1> FATE OF OPHELIA</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat impedit necessitatibus explicabo rerum corporis adipisci voluptatem ratione alias distinctio quibusdam culpa optio temporibus, dicta, vitae architecto consequatur vero obcaecati incidunt!</p>
      <Sample /> */}
      {/* <Button /> */}
      {/* <Myclassexample name={student} course={course}/> */}
      {/* <Myclassexample score={60} ispassed={false} /> */}
      {/* <Sample/> */}
      {/* <Counter isloggedin={true}/> */}
      {/* <Counter name="rahul" age={20} course="mern"/>
      <Automatic_counter/>
      <Stopwatch/>
      <User_list/>
      <Mounted/> */}
      {/* <Date/>  */}
      <Travelpage destinations={destinations}/>
      

      

      
    </>
  )
}

export default App
