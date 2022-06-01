import React ,{useState} from 'react';
import { Alert, Modal} from 'react-bootstrap';


export default function AlertCustom({prop , infoObj }) {
    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
        prop();
    }


    if (show) {
        return (
          <>
            <Modal show={show} onHide={handleClose}>
              <Alert variant="success" dismissable>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <Alert.Heading>
                      Campaign successfully created{" "}
                    </Alert.Heading>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    <strong> Created with address </strong>: {infoObj.CamapignAddress}
                    <hr />
                   <p> <strong> Raised by </strong> :{infoObj.CampaignCreater} </p> 
                   <p> <strong> title </strong> : {infoObj.Tittle} </p>
                   <p> <strong> desc </strong> : <span className="d-inline-block text-truncate">
                      {infoObj.Desc}
                    </span>  </p>
                  </p>
                </Modal.Body>
              </Alert>
            </Modal>
          </>
        );
    }
}

