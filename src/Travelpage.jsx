import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function Travelpage({destinations}) {
  return (
    <>
    <div style={{height:'5em', background:'linear-gradient(135deg,#8ec5fc,#e0c3fc)', textAlign:'center' ,alignItems:'center', alignContent:'center'}}>
   <h1 style={{textAlign:'center'}}>Explore the World 🌍</h1>
    </div>
   <div  style={{display:'flex',justifyContent:'space-between',gap:'0.5em', margin:'20px'}} >
    {destinations.map((item,index)=>(
         <Card style={{ width: '18rem',alignItems:'center'}} key={index}>
            <Card.Img variant="top" src={item.image} style={{
                height: '180px',
                objectFit: 'cover',
                transition: 'transform 0.3s'}}/>
            <Card.Title>{item.place},{item.country}</Card.Title>
             <Card.Text style={{padding:'10px'}}>{item.description}</Card.Text>
             <Button variant="primary" style={{marginBottom:'2em'}}>Learn More</Button>

         </Card>

    ))}
   
    </div>
   </>
   
  )
}

export default Travelpage