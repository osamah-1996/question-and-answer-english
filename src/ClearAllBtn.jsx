import React from 'react'

const ClearAllBtn = ({data, clearAllQuestions}) => {
  
  return (
    <div className='py-2'>
      {
        data.length >= 1 ?(<button onClick={() => clearAllQuestions()} className='btn-color w-100'>Clear All</button>):null
      }
      
    </div>
  )
}

export default ClearAllBtn