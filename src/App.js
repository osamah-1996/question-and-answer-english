import React, { useState } from 'react'
import "./App.css"
import QaTitle from './QaTitle'
import QaList from './QaList'
import QaInputForm from './QaInputForm'
import ClearAllBtn from './ClearAllBtn'
import { question } from './data'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [data, setData] = useState(question)
  //Update user Data....
  const updateItems = () => {
    setData([...question])
  }
  //Clear all questions
  const clearAllQuestions = () => {
    notify('Questions are Cleared', 'Success')
    question.length = 0  
    // data.splice(0, question.length)
    setData([])
  }
  //Push the notification
  const notify = (message, type) => {
    if(type === 'Success'){
      toast.success(message)
    }
    else if(type === 'Error'){
      toast.error(message)
    }
  };
  //Clear one Question
  const clearOneQuestion = (ID) => {
    if(data.length >= 1) {
      const index = question.findIndex((q) => q.id === ID)
      question.splice(index, 1)
      setData([...question])
      notify("One Question Removed", 'Success')
    }

  }

  return (
    <div className='color-body py-5'>
      <div className='container'>
        <div className='row'>
            <div className='col-sm-4'>
              <QaTitle/>
            </div>
            <div className='col-sm-8'>
              <QaInputForm updateItems = {updateItems} notify = {notify} data = {data}/>
              <QaList data = {data} clearOneQuestion = {clearOneQuestion} />
              <ClearAllBtn data = {data} clearAllQuestions ={clearAllQuestions}/>
            </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  )
}

export default App