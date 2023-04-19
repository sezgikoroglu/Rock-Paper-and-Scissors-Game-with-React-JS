import React from 'react';
import { useState } from 'react';
import Modal from './Modal';

const Footer = () => {
  const [showModal,setShowModal]=useState(false)

  return (
    <>
    <div className='footer'> 
        <button onClick={()=>setShowModal(true)}>Rules</button>
    </div>
    {
      showModal && <Modal closeModal={()=>{
        setShowModal(false)
      }}></Modal>
    }
    </>
  )
}

export default Footer