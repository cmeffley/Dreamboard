import React from 'react'
import PropTypes from 'prop-types';
import DreamCard from '../components/DreamCard';
import DreamForm from '../components/DreamForm';

export function DreamboardView({ allDreams, setAllDreams }) {

  return (
    <div>
      <div>
        {allDreams.map((dreamInfo) => (
          <DreamCard 
            key={dreamInfo.id}
            {...dreamInfo}
          />
        ))}
        {allDreams.map((dreamInfo) => (
          <DreamForm
            key={dreamInfo.id}
            {...dreamInfo}
            setAllDreams={setAllDreams}
          />
        ))}
      </div>
    </div>
  )
}

DreamboardView.propTypes = {
  allDreams: PropTypes.array,
  setAllDreams: PropTypes.func
};

export default DreamboardView;
