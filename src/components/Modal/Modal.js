import React, { useState, useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'


const ItemModal = (props) => {

    const [formValue, setFormValue] = useState("")
    const [itemDesc, setItemDesc] = useState("")

    
    useEffect(() => {
        const description = localStorage.getItem(props.text);
        if (description) {
            setItemDesc(description)
        }

    }, [props.show, props.text])


    const onChangeHandler = (event) => setFormValue(event.target.value)

    const saveChanges = () => {
        localStorage.setItem(props.text, formValue)
        setItemDesc(formValue)
        setFormValue("")
    }

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.text}</Modal.Title>
                </Modal.Header>
                <Form.Control
                    onChange={onChangeHandler}
                    type="text"
                    value={formValue}
                    placeholder="Enter Description" />
                <Modal.Body>
                    {itemDesc}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"
                        onClick={saveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>)
}


export default ItemModal