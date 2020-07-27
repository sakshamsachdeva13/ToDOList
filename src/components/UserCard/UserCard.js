import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import classes from './UserCard.module.css'
import { Link } from 'react-router-dom'
import CheckBox from '../CheckBox/CheckBox'
const UserCard = () => {


    const [Users, setUser] = useState([
        {
            name: "saksham sachdeva",
            email: "saksham5sachdeva@gmail.com",
            position: "Intern",
            description: "some description",
            checkedState: false
        },
        {
            name: "soma bose",
            email: "soma@gmail.com",
            position: "Intern",
            description: "some description",
            checkedState: false
        },
        {
            name: "Vishal yadav",
            email: "Vishal@gmail.com",
            position: "Intern",
            description: "some description",
            checkedState: false
        },
        {
            name: "yashaswi Sinha",
            email: "yashaswi@gmail.com",
            position: "peon",
            description: "khair jaane do",
            checkedState: false
        },
        
    ]

    )

    const [ComparingList, setComparingList] = useState([])


    const setUserHandler = (userEmail) => {
        for (let i in Users) {
            if (Users[i].email === userEmail) {
                localStorage.setItem("CurrentUserEmail", userEmail)
            }
        }
    }


    const onCheckHandler = (index) => {
        // it gets all Users from state 
        const currUser = [...Users];
        // curr users mai se jon sa change krna hai vo 
        const userToAdd = { ...currUser[index] };

        // user object mai chqnge krta hai 
        userToAdd.checkedState = !userToAdd.checkedState;

        // ccurrent comparing vali list lata hai 
        const currComparingList = [...ComparingList];

        // agar mera current action list se nikaalne vala hai or length hai 3 se zada to return ho jaega
        if (currComparingList.length >= 3 && userToAdd.checkedState) {
            alert("Can't add more than 3 bande")
            return;
        }

        // agar current action comparing list mai insert karega to ye vala code chlega
        if (userToAdd.checkedState) {
            // compare list mai add hoga
            currComparingList.push(userToAdd);
        }
        else {
            let idx = -1;
            // index nikalenge konsa remove krna hai 
            for (let i in ComparingList) {
                if (ComparingList.email === userToAdd.email) {
                    idx = i;
                    break;
                }
            }
            // usko array se remove karenge 
            currComparingList.splice(idx, 1);
        }

        // state set kr denge current change object kr sath
        setComparingList(currComparingList);
        currUser[index] = userToAdd;
        setUser(currUser)
    }


    const removeCardHandler = (index) => {

        const currComparingList = [...ComparingList];

        for (let i in Users) {
            if (Users[i].email === currComparingList[index].email) {
                const currUSers = [...Users];
                const userTochange = { ...currUSers[i] };
                userTochange.checkedState = !userTochange.checkedState;
                currUSers[i] = userTochange;
                setUser(currUSers);
                break;
            }
        }
        currComparingList.splice(index, 1);

        setComparingList(currComparingList);
    }

    const removeAll = () => {
        const currUser = [...Users];
        for(let i in currUser)
        {
            currUser[i].checkedState = false
        }
        setUser(currUser);
        setComparingList([])
    }
    console.log(ComparingList)
    const UserList = Users.map((eachUser, index) => {

        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <CheckBox
                        checked={eachUser.checkedState}
                        changeHandler={() => onCheckHandler(index)}
                        label="Add to Compare" />
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
                    <Button onClick={() => setUserHandler(eachUser.email)} variant="primary"><Link style={{ color: "#fff" }} to="/Todo">Some Text</Link></Button>
                </Card.Body>
            </Card>
        )
    })

    const ComparingListCards = ComparingList.map((eachUser, index) => {

        return (
            <Card style={{ width: '18rem' }}>
                <span onClick={() => removeCardHandler(index)}>X</span>
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
                </Card.Body>
            </Card>
        )
    })
    return (
        <div className={classes.container}>
            <h1>All Users</h1>
            <div className={classes.cardBody}>
                {UserList}
            </div>
            <div className={classes.compairBox}>
                {ComparingListCards}
                <button>Compare</button>
                <button onClick = {removeAll}>Remove All</button>
            </div>
            
            <div className = {classes.position}></div>

        </div>

    )
}


export default UserCard