import React from 'react'
import Image from 'next/image'
import styles from './loading.module.css'
import logo from '../../public/vast-loading.png'
import mappa from '../../public/mindmap-loading.png'
import {motion} from 'framer-motion'


function Loading({isLoading}) {
  return (
    <motion.div transition={{ duration: 2 }} animate={{ opacity: 0 }} initial={{ opacity: 1 }}  className={styles.container}>
        {/* <motion.h1 initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 1 }} className={styles.primary}>Welcome to <span className={styles.bold}>Museo Galileo</span></motion.h1> */}
        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 1 }} >
        <Image src={logo} alt="vast logo" width={442} height={151} />
        </motion.div>
        {/* <Image src={mappa} alt="mindmap" width={440} height={78} /> */}
        
    </motion.div>
  )
}

export default Loading