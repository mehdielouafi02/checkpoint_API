import { Card } from 'react-bootstrap';
export default function UserCard({UserList}) {
   
   
    
   

    return (
        <div>  
        <Card border="warning" style={{ width: '18rem', margin:"8px" }}>
    <Card.Header>User Name: {UserList.username}</Card.Header>
    <Card.Body>
      <Card.Title>{UserList.name}</Card.Title>
      <Card.Text>
       <h5 style={{color:" #ff8b3d"}}>Email:</h5> <h6> {UserList.email}</h6>
      </Card.Text>
    </Card.Body>
  </Card>

        </div>
    )
    
}