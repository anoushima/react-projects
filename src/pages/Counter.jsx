import React,{useEffect, useState} from 'react'

function Counter(props) {
    const [count, setCount]=useState(0);
    const [color, setColor]=useState("white")
    const [text, settext]=useState("")
    const [light, setlight]=useState(false)
   

    const handleclick=()=>{
        alert("button is clicked")
    }

    const [text1,settext1]=useState("");
    const handlechange=(e)=>{
        console.log(e.target.value);
        settext1(e.target.value);
    };

    const[users,setusers]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setusers(data));
    },[])

    const [count1,setCount1]=useState(0);
    useEffect(()=>{
        document.title=`you clicked ${count1} times`;
    },[count1]);


    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log("timer running..");
        },1000);
    })


   
    // function increase(){
    //     setCount(count+1);
    // }
    // function decrease(){
    //     setCount(count-1);
    // }
    // function reset(){
    //     setCount(0);
    // }
  return (
    <>

    

    <div style={{textAlign:'center',marginTop:'40px'}}>
        <h2>counter:{count1}</h2>
        <button onClick={()=>setCount1(count1+1)}>Increment</button>
    </div>

    <div style={{textAlign:'center'}}>
        <h2>user list</h2>
        <ul style={{listStyleType:'none',padding:'0'}}>
            {users.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>

    <div>
        <input type="text" placeholder='type something' onChange={handlechange} />
        <p>You typed:{text1}</p>
    </div>
    
   
    {props.isloggedin?<h2>welcome</h2>:<h2>please login</h2>}

    

    <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">Name:{props.name}</h5>
    <p className="card-text">Age:{props.age}</p>
    <p className="card-text">Course:{props.course}</p>

    
  </div>
</div>

    <button onClick={handleclick}>click</button>


    <h1 style={{textAlign:'center'}}>Counter app</h1>
    <p style={{textAlign:'center',fontSize:'2rem', fontWeight:'bold'}}>count:{count}</p>
    <div style={{display:'flex', gap:'2rem',justifyContent:'center'}}>
    <button onClick={()=>setCount(count+1)}style={{
        height:'3rem',
        width:'6rem',
        border:'none',
        borderRadius:'10px',
        backgroundColor:'#f679f4ff'
    }}
        >Increment</button>
    <button onClick={()=>setCount(count-1)}style={{
        height:'3rem',
        width:'6rem',
        border:'none',
        borderRadius:'10px',
        backgroundColor:'#967bf6ff'
    }}>Decrement</button>
    <button onClick={()=>setCount(0)}style={{
        height:'3rem',
        width:'6rem',
        border:'none',
        borderRadius:'10px',
        backgroundColor:'#f67979ff'
    }}>Reset</button>
    </div>

    <div style={{
        height:'20vh',
        width:'20vw',
        border:'1px solid black',
        borderRadius:'10px',
        marginTop:'1rem',        
        margin:'2rem auto',
        backgroundColor:color,
       
    }}>
       
    </div>
     <div style={{display:'flex', gap:'2rem',justifyContent:'center'}}>
            <button onClick={()=>setColor("#db1313ff")} style={{
        height:'3rem',
        width:'6rem',
        border:'none',
        borderRadius:'10px',
        backgroundColor:'#db1313ff'
    }}>red</button>
            <button onClick={()=>setColor("#270472ff")} style={{
        height:'3rem',
        width:'6rem',
        border:'none',
        borderRadius:'10px',
        backgroundColor:'#270472ff'
    }}>blue</button>
            <button onClick={()=>setColor("#0e8a27ff")}style={{
        height:'3rem',
        width:'6rem',
        border:'none',
        borderRadius:'10px',
        backgroundColor:'#0e8a27ff'
    }}>green</button>
            
        </div>


        <div>
            <input type="text" name="" id="inputbox"  onChange={(e) => settext(e.target.value)}/>
            <p>{text}</p>
        </div>


        <div>
            <h2>light{light?"is on":"is off"}</h2>
            <button onClick={()=>setlight(!light)}
                
                >light</button>
        </div>






    </>
  )
}

export default Counter