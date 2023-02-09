// import React, { useEffect, useRef, useState } from 'react'
// import styles from './form.module.css'
// import Image from 'next/image'
// import logo from '../../public/logo.png'
// import {useForm} from 'react-hook-form'
// import Mindmap from '../Mindmap/Mindmap'
// import Loading from '../Loading/Loading'
// import {motion} from 'framer-motion'
// import Input from '../Input/Input'
// import Mappa from '../Mindmap/Mappa'



// function Form() {
//   const [isValid, setIsValid] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [width, setWidth] = useState(0);
//   const breakpoint = 700;

//   const handleWindowResize = () => {
//     setWidth(window.innerWidth);
//   }
  
//   useEffect(() => {
//     handleWindowResize();
//     window.addEventListener("resize", () => setWidth(window.innerWidth));

//     return window.removeEventListener("resize", () => setWidth(window.innerWidth))
//   }, [width]);
  


//   const {register, formState: {errors}, handleSubmit} = useForm();
//   const onSubmit = (data) =>{
//     console.log(data);
//     setIsValid(true)
//   }

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//   }, []);

//   if(isLoading){
//     return(
//       <Loading isLoading={isLoading} />
//     )
//   }

//   if(!isValid){
//     return (
      
//       <motion.div transition={{ duration: 1 }} initial={{ opacity: 0 }} animate={{ opacity: 1}} className={styles.container}>
//         <h1 className={styles.primary}>Benvenuti al <span className={styles.bold}>Museo Galileo</span></h1>
//         <h2 className={styles.secondary}>Goditi la tua visita al nostro museo</h2>
//         <div className={styles.boldline}></div>
  
//         <form className={styles.form} onSubmit={handleSubmit(onSubmit)} >  
//           <Input id="name" register={register} type="text" label="Il nome del visitatore" errors={errors} />
//           <Input id="age" register={register} type="number" label="L'età del visitatore" errors={errors} />
//           <Input id="school" register={register} type="text" label="Il nome della scuola" errors={errors} />
//           <Input id="level" register={register} type="text" label="Livello educativo" errors={errors} /> 
//           <button className={styles.submitBtn} type="submit">Benvenuto</button>
  
//         </form>
  
//         <Image alt="Logo Vast" className={styles.logo} src={logo} width={188} height={64}></Image>
//       </motion.div> 
//     )

//   }

//   return (
//     width > breakpoint ? <Mappa /> : <Mindmap />
//   )
  
// }

// export default Form

import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import styles from './form.module.css'
import Image from 'next/image'
import logo from '../../public/logo.png'
import {useForm} from 'react-hook-form'
import Mindmap from '../Mindmap/Mindmap'
import Loading from '../Loading/Loading'
import {motion} from 'framer-motion'
import Input from '../Input/Input'
import Mappa from '../Mindmap/Mappa'
//import express from 'express'

function Form() {
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [width, setWidth] = useState(0);
  const breakpoint = 700;

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  }
  
  const ref = useRef(null);
  var router = useRouter();
  var variables = router.query["variables"];
  if (typeof variables !== 'undefined') {
    var params = variables.split("'");
    var id = params[0];
    var datetime = params[1].split(" ");
    var date = datetime[0].split("=")[1];
    var time = datetime[1].substring(0,datetime[1].length-3);;
    var visitor = params[2].split("=")[1];
    var noofparticipants = params[3].split("=")[1];
    var educationlevel = params[4].split("=")[1];
  }

 // const app = express()
 // app.listen(8800, ()=> {
 //   console.log("Connected")
 // })

  
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
          <Input ref={ref} id="name" register={register} type="text" label="Il nome del visitatore" errors={errors} iname="name" />
          <Input id="date" register={register} type="date" label="Data del visitatore" errors={errors} defvalue={date} iname="date" />
          <Input id="time" register={register} type="time" label="Tempo del visitatore" errors={errors} defvalue={time} iname="time" />
          <Input id="school" register={register} type="text" label="Il nome della scuola" errors={errors} defvalue={visitor} iname="school" />
          <Input id="educlevel" register={register} type="text" label="Livello educativo" errors={errors} defvalue={educationlevel} iname="educlevel" /> 
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
