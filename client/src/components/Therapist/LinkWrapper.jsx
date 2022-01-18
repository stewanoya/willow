import { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../ThemeMUI/Theme";

export default function LinkWrapper({ link }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ThemeProvider theme={Theme}>
      <div className='modal'>
        <div>
          <Button variant='contained' color='secondary' onClick={handleShow}>
            <h4>Book</h4>
          </Button>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <iframe
              src={link}
              style={{ width: "100%", height: "400px", border: "none" }}
            />
          </Modal.Body>
          <Modal.Footer>
            <div>
              <Button
                variant='contained'
                color='secondary'
                onClick={handleClose}
              >
                <h4>Close</h4>
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </ThemeProvider>
  );
}