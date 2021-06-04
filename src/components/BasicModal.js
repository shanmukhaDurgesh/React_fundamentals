import React, { useState } from 'react'
import Modal from 'react-modal'
import NewFormik from '../formik/NewFormik'
import { FaAirbnb } from "react-icons/fa"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

Modal.setAppElement('#root')
toast.configure()
function BasicModal(){
    const [open,setOpen] = useState(false)
    const notify = () => {
        toast('Hello')
    }
    return(
        <>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <Modal isOpen={open} onRequestClose={() => setOpen(false)} shouldCloseOnOverlayClick={true}
        style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '#efefefbf',
            },
            content: {
              position: 'absolute',
              color:'#230069',
              top: '100px',
              left: '400px',
              right: '400px',
              bottom: '200px',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px',
              boxShadow:'1px 1px 21px 5px #efefef'
            }
          }}>
            <h2><FaAirbnb /> Header</h2>
            <p>Modal Body</p>
            <NewFormik />
            <button onClick={notify}>notify</button>
            <button onClick={() => setOpen(false)}>Close</button>
        </Modal>
        </>
    )
}
export default BasicModal