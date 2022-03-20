import React, { useState } from 'react'
import PropTypes from 'prop-types';
import {
  Card,
  CardTitle,
  CardImg,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import DreamForm from './DreamForm';
import { deleteDream } from '../data/Dreamdata';

export function DreamCard({ setAllDreams, ...dreamInfo }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleClick = (buttonType) => {
    switch (buttonType) {
      case 'edit':
        setModal((prevState) => !prevState);
        break;
      case 'delete':
        deleteDream(dreamInfo.id).then(setAllDreams);
        break;
      default:
        console.warn('always learning');
    }
  };

  return (
    <div id="cardContainer">
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Dream</ModalHeader>
        <ModalBody>
          <DreamForm 
            {...dreamInfo}
            setModal={setModal}
            setAllDreams={setAllDreams}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
      <Card id='card'>
        <CardTitle>{dreamInfo.name}</CardTitle>
          <CardBody>
          <CardImg id='cardImage' src={dreamInfo.image} alt={dreamInfo.name}/>
          <br />
          <Button id='editButton' onClick={() => handleClick('edit')}>Edit</Button>
          <Button id='deleteButton' onClick={() => handleClick('delete')}>Delete</Button>
          </CardBody>
      </Card>
    </div>
  )
}

DreamCard.propTypes = {
  dreamInfo: PropTypes.object,
  setAllDreams: PropTypes.func
};

export default DreamCard;
