import React, { useState } from 'react'
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Button
} from 'reactstrap';
import { addDream, updateDream } from '../data/Dreamdata';

export function DreamForm({
  formTitle,
  setEditing,
  setAllDreams,
  openForm,
  setOpenForm,
  ...dreamInfo }) {
  const [newDream, setNewDream] = useState({
    name: dreamInfo?.name || '',
    image: dreamInfo?.image || '',
    id: dreamInfo?.id
  });

  const handleInputChanges = (e) => {
    setNewDream((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (dreamInfo.id) {
      updateDream(newDream.id, newDream).then((response) => setAllDreams(response));
      setEditing(false);
    } else {
      addDream(newDream).then((response) => setAllDreams(response));
      setOpenForm(!openForm);
    }
  };

  return (
    <div>
      {formTitle}
      <Form
        autoComplete='off'
        onSubmit={handleClick}
      >
        <Input 
          placeholder='Name of Dream'
          name='name'
          value={newDream.name}
          onChange={handleInputChanges}
          required
        />
        <Input 
          placeholder='Add an Image URL'
          name='image'
          value={newDream.image}
          onChange={handleInputChanges}
          required
        />
        <Button color='danger' type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

DreamForm.propTypes = {
  dreamInfo: PropTypes.object,
  setAllDreams: PropTypes.func,
  formTitle: PropTypes.string,
  setEditing: PropTypes.func,
  openForm: PropTypes.bool,
  setOpenForm: PropTypes.func
};


export default DreamForm;
