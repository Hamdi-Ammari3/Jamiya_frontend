'use client'

import '../../page.css';
import { useState } from 'react';

const Fees = () => {

  const [first_name,setFirst_name] = useState('');
  const [last_name,setLast_name] = useState('');
  const [phone_number,setPhone_number] = useState('');
  const [message,setMessage] = useState('');

  const onChangeHandler = (e) => {
    switch (e.target.name){
      case 'first_name':
        setFirst_name(e.target.value);
        break;
      case 'last_name':
        setLast_name(e.target.value);
        break;
      case 'phone_number':
        setPhone_number(e.target.value);
        break;
    }
  }

  const subscribtion = async(e) => {
    e.preventDefault();
    if(!first_name || !last_name || !phone_number) {
      setMessage('الرجاء التاكد من الفراغات');
      return;
    }
    try {
      const response = await fetch('https://jamiya-backend-1.onrender.com/api/users',
        {method: 'POST',
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify({first_name,last_name,phone_number}),
      })
    } catch (error) {
      console.log('error')
    }
    setMessage('تم تسجيلك')
  }

  return (
    <div className="container">
        <div className="text-part">
          <h1 className='text-header'>
            التسجيل في الخدمة
          </h1>
          <form className='text-form' onSubmit={subscribtion}>
            <input type='text' name='first_name' placeholder='الاسم' value={first_name} onChange={onChangeHandler} />
            <input type='text' name='last_name' placeholder='اللقب' value={last_name} onChange={onChangeHandler}/>
            <input type='text' name='phone_number' placeholder='رقم الهاتف' value={phone_number} onChange={onChangeHandler}/>
            <button>تسجيل</button>
          </form>
          {
            message && (
              <div className='message-text'>
                <h3>{message}</h3>
              </div>
            )    
          }
        </div>
    </div>
  )
}

export default Fees;