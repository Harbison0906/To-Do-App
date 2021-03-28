import { useState } from 'react';
import { setConstantValue } from 'typescript';

const useForm = () => {

  const [state, useState] = useState({});

  const handleChange = e => {
    setState(state => ({ ...state, [e.target.name]: e.target.value }))
  }

  return [state, handleChange];

}

export default useForm