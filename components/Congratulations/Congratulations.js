import React, { useEffect, useRef, useState } from 'react'
import styles from './congratulations.module.css'
import Image from 'next/image'
import logo from '../../public/logo.png'
import {motion} from 'framer-motion'
import mindmap from '../../public/congratulations-mindmap.svg'


function Congratulations() {
  return (
    <motion.div className={styles.container} transition={{ duration: 1 }} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
        <h1 className={styles.primaryHeadline}>Congratulazioni</h1>
        <h3 className={styles.secondaryHeadline}>Grazie per aver completato la mappa mentale</h3>

        <Image alt="Mindmap"  src={mindmap} width={364} height={247}></Image>
        <Image alt="Logo Vast" className={styles.logo} src={logo} width={125} height={42}></Image>
    </motion.div>
  )
}

export default Congratulations