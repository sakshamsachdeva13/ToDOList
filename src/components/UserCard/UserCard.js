import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import classes from './UserCard.module.css'
import { Link } from 'react-router-dom'
const UserCard = () => {

    const [Users, setUser] = useState([
        {
            name: "saksham sachdeva",
            email: "saksham5sachdeva@gmail.com",
            position: "Intern",
            description: "some description"
        },
        {
            name: "soma bose",
            email: "soma@gmail.com",
            position: "Intern",
            description: "some description"
        },
        {
            name: "Vishal yadav",
            email: "Vishal@gmail.com",
            position: "Intern",
            description: "some description"
        }])



        const setUserHandler = (userEmail) => {
                for(let i in Users)
                {
                    if(Users[i].email === userEmail)
                    {
                        localStorage.setItem("CurrentUserEmail" , userEmail )
                    }
                }
        }

    const UserList = Users.map((eachUser) => {




        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{eachUser.name}</Card.Title>
                    <Card.Text>
                        {eachUser.email}
                    </Card.Text>
                    <Card.Text>
                        {eachUser.position}
                    </Card.Text>
                    <Card.Text>
                        {eachUser.description}
                    </Card.Text>
                    <Button onClick = {() =>  setUserHandler(eachUser.email)}variant="primary"><Link style = {{color : "#fff"}} to= "/Todo">Some Text</Link></Button>
                </Card.Body>
            </Card>
        )
    })

    return (
        <div className = {classes.container}>
            <h1>All Users</h1>
            <div className={classes.cardBody}>
                {UserList}
            </div>
        </div>

    )
}


export default UserCard