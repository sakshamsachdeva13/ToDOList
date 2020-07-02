import React, { Component } from 'react'
import ItemModal from '../Modal/Modal'
import { Button } from 'react-bootstrap'
class List extends Component {

    constructor(props) {
        console.log("List.js::: Constructor")
        super(props)
        this.state = {
            todoTask: [],
            inputValue: "",
            userEmail: "",
            currentUser: null,
            
            modalState: null
        }
    }

    // shouldComponentUpdate() {
    //     console.log("List.js:::: shouldComponentUpdate")
    // }

    componentWillMount() {
        console.log("List.js::: ComponentWillMount")
    }

    static getDeriveStateFromProps(props, state) {
        // compare props or state 

        console.log("List.js :::: getderivedState from props.")
    }

    componentDidMount() {
        console.log("List.js :::: ComponentDidMount")
        const currUser = localStorage.getItem("CurrentUserEmail")
        const currentUserTask = localStorage.getItem(currUser);
        let newArray = []
        if (currentUserTask) {
            newArray = currentUserTask.split(',')
        }
        console.log(newArray)
        this.setState({ currentUser: currUser, todoTask: newArray })
    }

    componentDidUpdate() {
        console.log("List.js::::: componentDidUpdate")
    }
    inputChangeHandler = (event) => {
        console.log(this.state.inputValue)
        const value = event.target.value;
        this.setState({ inputValue: value })
    }

    addTask = () => {
        const inputvalue = this.state.inputValue;
        const todoTask = [...this.state.todoTask];
        todoTask.push(inputvalue);
        localStorage.setItem(this.state.currentUser, todoTask)
        this.setState({
            todoTask: todoTask,
            inputValue: ""
        })
    }

    deleteItems = (taskName) => {
        const currentState = [...this.state.todoTask];
        let index = -1;
        for (let i in currentState) {
            if (currentState[i] === taskName) {
                index = i;
                break;
            }
        }

        currentState.splice(index, 1);
        localStorage.setItem(this.state.currentUser, currentState)
        this.setState({
            todoTask: currentState
        })

    }
    handleClose = () => this.setState({ showModal: false })
    handleShow = (todoTask) => this.setState({ showModal: true, modalState: todoTask })

    render() {


        const list = this.state.todoTask.map((eachElement, i) => {
            return (
                <>
                    <li>{eachElement}</li>
                    <button onClick={() => this.deleteItems(eachElement)}>Delete</button>
                    <Button variant="primary" onClick={() => this.handleShow(eachElement)}>
                        Launch demo modal
                    </Button>
                </>)
        })
        return (
            <div>
                <ItemModal
                    show={this.state.showModal}
                    handleClose={this.handleClose}
                    text={this.state.modalState} />
                <h1> Hi , {this.state.currentUser}</h1>
                <input onChange={this.inputChangeHandler} value={this.state.inputValue} />
                <button onClick={this.addTask}>Save</button>
                <div>
                    <ul>
                        {this.state.todoTask.length > 0 ? list : <p>no element available</p>}
                    </ul>
                </div>
            </div >)
    }
}


export default List