import React, { useState } from 'react';
import { question } from './data';

const QaInputForm = ({ updateItems, notify, data }) => {
    const [userNewQu, setUserNewQu] = useState('');
    const [userNewAn, setUserNewAn] = useState('');

    //Add new Items
    const AddNewItem = () => {
        if (userNewQu.trim() === '' || userNewAn.trim() === '') {
            notify("Fields cannot be empty", "Error");
            return;
        }

        question.push({ id: Math.random(), q: userNewQu, a: userNewAn });
        setUserNewQu('');
        setUserNewAn('');
        updateItems();
        notify("Question Has Been Added", "Success");
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-5'>
                    <input
                        value={userNewQu}
                        onChange={(e) => setUserNewQu(e.target.value)}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder='Enter a Question Here...'
                    />
                </div>
                <div className='col-sm-5'>
                    <input
                        value={userNewAn}
                        onChange={(e) => setUserNewAn(e.target.value)}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail2"
                        placeholder='Enter an Answer Here...'
                    />
                </div>
                <div className='col-sm-2'>
                    <button onClick={AddNewItem} type="submit" className="btn-color w-100">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default QaInputForm;
