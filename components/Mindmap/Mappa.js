import React, { useEffect, useRef, useState } from 'react'
import styles from './mappa.module.css'
import Image from 'next/image';
import centerBubble from '../../public/center-bubble.svg';
import logo from '../../public/logo.png'
import {motion} from 'framer-motion'
import Congratulations from '../Congratulations/Congratulations'


function Mappa() {
    const [submitForm, setSubmitForm] = useState(false);
    const [formData, setFormData] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();   
      setSubmitForm(true)
      console.log(formData);
    }

    if(submitForm){
      return (
        <Congratulations />
      )
    }
    
    return (
      
      <motion.section className={styles.mindmapContainer} transition={{ duration: 1 }} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} >
        <div className={styles.headlineContainer}>
            <h1>Mappa Mentale</h1>
            <h2>LA MENTE CHE RIESCE AD ALLAGARSI NON ORNA MAIN ALLA DIMENSIONE PRECEDENTE</h2>
            <h4 className={styles.tertiaryHeadline}>ALBERT EINSTEIN</h4>
        </div>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <Image className={styles.centerBubble} src={centerBubble} alt="mindmap" width={350} height={212} />
          <SectionContainer sectionName="consequenza" setFormData={setFormData}>
            <FieldInput setFormData={setFormData} name="consequenza1" label="consequenza" />
            <FieldInput setFormData={setFormData} name="consequenza2" label="consequenza" />
            <FieldInput setFormData={setFormData} name="consequenza3" label="consequenza" />
        </SectionContainer>
        <SectionContainer sectionName="equivalenza" setFormData={setFormData}>
            <FieldInput setFormData={setFormData} name="equivalenza1" label="equivalenza" />
            <FieldInput setFormData={setFormData} name="equivalenza2" label="equivalenza" />
            <FieldInput setFormData={setFormData} name="equivalenza3" label="equivalenza" />
        </SectionContainer>
        
        <SectionContainer sectionName="opposto" setFormData={setFormData}>
            <FieldInput setFormData={setFormData} name="opposto1" label="opposto" />
            <FieldInput setFormData={setFormData} name="opposto2" label="opposto" />
            <FieldInput setFormData={setFormData} name="opposto3" label="opposto" />
        </SectionContainer>
        
        <button className={styles.btnSubmit} type="submit">creare una mappa mentale</button>
        </form>
        <div className={styles.logoContainer}>
          <Image alt="Logo Vast" className={styles.logo} src={logo} width={188} height={64}></Image>
        </div>
      </motion.section>
    );
}

const SectionContainer = ({ sectionName, children, setFormData }) => {
    // const [sectionData, setSectionData] = useState({});
    
    // useEffect(() => {
    //   setFormData((prevFormData) => ({
    //     ...prevFormData,
    //     [sectionName]: sectionData,
    //   }));
    // }, [sectionData, sectionName, setFormData]);
    
    return (
      <fieldset className={styles.sectionContainer}>
        <legend className={styles.sectionContainerHeadline}>{sectionName}</legend>
        {children}
      </fieldset>
    );
  };
  
  const FieldInput = ({ name, label, type = "text", setFormData, ...rest }) => {
    const [value, setValue] = useState("");
  
    const handleChange = (e) => {
      setValue(e.target.value);
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: e.target.value,
      }));
    };
  
    return (
      <div className={styles.inputContainer}>
        {/* <label htmlFor={name}>{label}</label> */}
        <input className={styles[label]} id={name} placeholder={label} name={name} type={type} value={value} onChange={handleChange} {...rest} />
      </div>
    );
  };

export default Mappa