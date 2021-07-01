import React, {useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const AddMovie = ({addFn}) => {     //props
    const [show, setShow] = useState(false)
    const toggle = () => {
        setShow(!show)
    } 
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rate, setRate] = useState("")
    const [posterUrl, setPosterUrl] = useState("")

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleRate = (e) => {
        setRate(e.target.value)
    }
    const handlePoster = (e) => {
        setPosterUrl(e.target.value)
    }

    const handleMovie = () => {
        let newMovie = {
            title,
            description,
            rate,
            posterUrl
        }
        addFn(newMovie)
    }
    //props.addFn
    return (
        <>
      <Button variant="primary" onClick={() => toggle()} >
        add movie
      </Button>

      <Modal
        show={show}
        // onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="enter the title" value={title} onChange={(e) => handleTitle(e)} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="enter the description" value={description} onChange={(e) => handleDescription(e)} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Rate</Form.Label>
            <Form.Control type="text" placeholder="enter the rate" value={rate} onChange={(e) => handleRate(e)} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Poster Url</Form.Label>
            <Form.Control type="text" placeholder="enter the image link" value={posterUrl} onChange={(e) => handlePoster(e)} />
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => toggle()} >
            Close
          </Button>
          <Button variant="primary" onClick={() => handleMovie()} >Save</Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default AddMovie
