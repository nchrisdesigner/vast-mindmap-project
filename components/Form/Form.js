import React, { useEffect, useRef, useState } from 'react'
import styles from './form.module.css'
import Image from 'next/image'
import logo from '../../public/logo.png'
import {useForm} from 'react-hook-form'
import Mindmap from '../Mindmap/Mindmap'
import Loading from '../Loading/Loading'
import {motion} from 'framer-motion'
import Input from '../Input/Input'
import Mappa from '../Mindmap/Mappa'



function Form() {
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [width, setWidth] = useState(0);
  const breakpoint = 700;

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  }
  
  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return window.removeEventListener("resize", () => setWidth(window.innerWidth))
  }, [width]);
  


  const {register, formState: {errors}, handleSubmit} = useForm();
  const onSubmit = (data) =>{
    console.log(data);
    setIsValid(true)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if(isLoading){
    return(
      <Loading isLoading={isLoading} />
    )
  }

  if(!isValid){
    return (
      
      <motion.div transition={{ duration: 1 }} initial={{ opacity: 0 }} animate={{ opacity: 1}} className={styles.container}>
        <h1 className={styles.primary}>Benvenuti al <span className={styles.bold}>Museo Galileo</span></h1>
        <h2 className={styles.secondary}>Goditi la tua visita al nostro museo</h2>
        <div className={styles.boldline}></div>
  
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)} >  
          <Input id="name" register={register} type="text" label="Il nome del visitatore" errors={errors} />
          <Input id="age" register={register} type="number" label="L'età del visitatore" errors={errors} />
          <Input id="school" register={register} type="text" label="Il nome della scuola" errors={errors} />
          <Input id="level" register={register} type="text" label="Livello educativo" errors={errors} /> 
          <button className={styles.submitBtn} type="submit">Benvenuto</button>
  
        </form>
  
        <Image alt="Logo Vast" className={styles.logo} src={logo} width={188} height={64}></Image>
      </motion.div> 
    )

  }

  return (
    width > breakpoint ? <Mappa /> : <Mindmap />
  )
  
}

export default Form