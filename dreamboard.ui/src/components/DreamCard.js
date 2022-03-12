import React from 'react'
import PropTypes from 'prop-types';
import {
  Card,
  CardText,
  CardImg
} from 'reactstrap';

export function DreamCard({ ...dreamInfo }) {

  return (
    <div>
      <Card>
        <CardText>{dreamInfo.name}</CardText>
        <CardImg id='cardImage' src={dreamInfo.image} alt={dreamInfo.name}/>
      </Card>
    </div>
  )
}

DreamCard.propTypes = {
  dreamInfo: PropTypes.object
}

export default DreamCard;
