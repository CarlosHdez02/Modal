
import './App.css'
import Modal from './components/Modal'
import React from 'react'

function App() {
  const [openModal, setOpenModal] = React.useState<boolean>(false);


  return (
    <>
     <h1>Hey, welcome to modal page, click on the button</h1>
     <button onClick={ ()=> setOpenModal(true) }>Click me </button>
     { openModal  && <Modal closeModal={ ()=> setOpenModal(false)}/>}
    </>
  )
}

export default App
