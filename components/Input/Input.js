import React from 'react'
import styles from './input.module.css'
import {useForm} from 'react-hook-form'
import Error from '../InputError/Error'




function Input({id,type,register,label, errors}) {

  return (
    <div className={styles.inputContainer}>
        <label htmlFor={id}>{label}</label>
        <input {...register(id, {required:true, min: 0})} autoComplete='off' id={id} type={type} />
        <Error errors={errors} id={id} />
    </div>
  )
}

export default Input