import React, { useState } from 'react'
import PropTypes from 'prop-types';
import {
  Card,
  CardText,
  CardImg,
  CardBody,
  Button
} from 'reactstrap';
import DreamForm from './DreamForm';
import { deleteDream } from '../data/Dreamdata';

export function DreamCard({ setAllDreams, ...dreamInfo }) {
  const [editing, setEditing] = useState(false);

  const handleClick = (buttonType) => {
    switch (buttonType) {
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'delete':
        deleteDream(dreamInfo.id).then(setAllDreams);
        break;
      default:
        console.warn('always learning');
    }
  };

  return (
    <div>
      <Card>
        <CardBody>
          <CardText>{dreamInfo.name}</CardText>
          <CardImg id='cardImage' src={dreamInfo.image} alt={dreamInfo.name}/>
        </CardBody>
          <Button onClick={() => handleClick('edit')}>Edit</Button>
          <Button onClick={() => handleClick('delete')}>Delete</Button>
        {editing && <DreamForm 
          formTitle='Edit Board'
          {...dreamInfo}
          setEditing={setEditing}
          setAllDreams={setAllDreams}
        />}
      </Card>
    </div>
  )
}

DreamCard.propTypes = {
  dreamInfo: PropTypes.object,
  setAllDreams: PropTypes.func
};

export default DreamCard;
