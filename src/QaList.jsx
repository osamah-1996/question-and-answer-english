import React from 'react'

const QaList = ({data, clearOneQuestion}) => {
  return (
    <div className='mt-3'>
      <div className="accordion" id="accordionExample">
       {
        data.length >= 1 ? (data.map((value, index, array) => {
          return (
            <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${index}`} aria-expanded="true" aria-controls={`collapseOne${index}`}>
                {value.q}
              </button>
            </h2>
            <div id={`collapseOne${index}`} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body d-flex justify-content-start align-items-center">
                  <div>
                    {value.a}
                  </div>
                  <button onClick={() => clearOneQuestion(value.id)} className='btn-color px-4 mx-4'>Delete</button>
              </div>
            </div>
        </div>
          )
        })) :<h2 className='fs-4 text-center py-5'>No Question Right Now</h2>
       }
      </div>
    </div>
  )
}

export default QaList