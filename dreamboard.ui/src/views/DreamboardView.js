import React from 'react'
import PropTypes from 'prop-types';
import DreamCard from '../components/DreamCard';

export function DreamboardView({ allDreams }) {

  return (
    <div>
      <h1>Dreamboard</h1>
      <div>
        {allDreams.map((dreamInfo) => (
          <DreamCard 
            key={dreamInfo.id}
            {...dreamInfo}
          />
        ))}
      </div>
    </div>
  )
}

DreamboardView.propTypes = {
  allDreams: PropTypes.array
}

export default DreamboardView;
