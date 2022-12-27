import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Modal, Button, Form } from "react-bootstrap";

import events from "./events";


const AddEventModal = () => {
    const [show, setShow] = useState(false);
    const [eventTitle, setEventTitle] = useState("")
    const [eventDate, setEventDate] = useState("");
    
    const [totalEvent,setTotalEvent] =useState(events)
    //hide show modal
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    //fetcing input value
    const handleChangeDate = (e) =>setEventDate(e.target.value)
    const handleChangeTitle = (e) => setEventTitle(e.target.value)
    
    const onSubmit = (e) => {
        e.preventDefault();
        alert(eventTitle + ""+eventDate)
        handleClose();
    }
    return(
        <>
    <Button variant="btn btn-outline-success mt-3" onClick={handleShow}> Create Event</Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
          <Form onSubmit={onSubmit}>
             <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Event Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter event title"
                    value={eventTitle} onChange={handleChangeTitle}
                />
            </Form.Group>
                            
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Event Date</Form.Label>
                <Form.Control type="date"
                value={eventDate}
                onChange={handleChangeDate}
                 />
             </Form.Group>
        
            <Modal.Footer>
            <Button variant="success" type="submit">Submit</Button>
            </Modal.Footer>
        </Form>
          </>
        </Modal.Body>
      </Modal>
        </>
    )
}

export default AddEventModal