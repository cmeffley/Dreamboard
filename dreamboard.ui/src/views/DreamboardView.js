import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import DreamCard from '../components/DreamCard';
import DreamForm from '../components/DreamForm';

export function DreamboardView({ allDreams, setAllDreams }) {
  const [openForm, setOpenForm] = useState(false);

  const OpenClick = () => {
    setOpenForm(!openForm);
  }

  return (
    <div>
      <div>
        <Button onClick={OpenClick}>Add A new Dream</Button>
        <div>
          {openForm && <DreamForm
            formTitle='Create New Dreamboard' 
            setAllDreams={setAllDreams}
            openForm={openForm}
            setOpenForm={setOpenForm}
          />
          }
        </div>
        <br />
        <div id='cardDiv'>
          {allDreams.map((dreamInfo) => (
            <DreamCard 
              key={dreamInfo.id}
              {...dreamInfo}
              setAllDreams={setAllDreams}
              openForm={openForm}
              setOpenForm={setOpenForm}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

DreamboardView.propTypes = {
  allDreams: PropTypes.array,
  setAllDreams: PropTypes.func
};

export default DreamboardView;
