'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../page.css';

const LoginForm = () => {
  const [company_name,setCompany_name] = useState('');
  const [employee_name,setEmployee_name] = useState('');
  const [employee_familyName,setEmployee_familyName] = useState('');
  const [employee_phoneNumber,setEmployee_phoneNumber] = useState('');
  const [errorMsg,setErrorMsg] = useState('');
  const router = useRouter();

  const onChangeHandler = (e) => {
    switch(e.target.name){
      case 'company_name':
        setCompany_name(e.target.value);
        break;
      case 'employee_name':
        setEmployee_name(e.target.value);
        break;
      case 'employee_familyName':
        setEmployee_familyName(e.target.value);
        break;
      case 'employee_phoneNumber':
        setEmployee_phoneNumber(e.target.value);
        break;
    }
  }

/*
  const login = async(e) => {
    e.preventDefault();
    if(!company_name || !employee_name || !employee_familyName || !employee_phoneNumber) {
        setErrorMsg('empty field !');
        return;
    }

    setTimeout(() => {
      setErrorMsg('');
    },'1000')

    try {
      const response = await fetch('http://localhost:5000/api/auth/login',
        {method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ company_name,employee_name,employee_familyName,employee_phoneNumber}),
        });

        if(!response.ok) {
          throw new Error('Login Failed!')
        }
        const data = await response.json();
        router.push('/welcome');
    } catch (error) {
      console.log('error')
    }
  }
*/
  return (
      <div className='container'>
      {errorMsg && (
        <div className='error_div'>
          <p>{errorMsg}</p>
        </div>
      )}
        <form className='Loginform'>
          <input type='text' placeholder='الشركة' name='company_name' value={company_name} onChange={onChangeHandler}/>
          <input type='text' placeholder='الاسم' name='employee_name' value={employee_name} onChange={onChangeHandler}/>
          <input type='text' placeholder='اللقب' name='employee_familyName' value={employee_familyName} onChange={onChangeHandler}/>
          <input type='text' placeholder='رقم الهاتف' name='employee_phoneNumber' value={employee_phoneNumber} onChange={onChangeHandler}/>
          <button className='log_btn'>
            تسجيل    
          </button>
        </form>
      </div>
  )
}

export default LoginForm