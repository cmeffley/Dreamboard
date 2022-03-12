import React, { useState } from 'react'
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Button
} from 'reactstrap';

export function DreamForm({ setAllDreams, ...dreamInfo }) {
  const [newDream, setNewDream] = useState({
    name: dreamInfo?.name || '',
    image: dreamInfo?.image || '',
    id: dreamInfo?.id
  })
  return (
    <div>
      <Form
        autoComplete='off'
      >
        <Input 
          placeholder='Name of Dream'
          name='name'
          value={newDream.name}
          required
        />
        <Input 
          placeholder='Add an Image URL'
          name='image'
          value={newDream.image}
          required
        />
        <Button color='danger' type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

DreamForm.propTypes = {
  dreamInfo: PropTypes.object,
  setAllDreams: PropTypes.func
};


export default DreamForm;
