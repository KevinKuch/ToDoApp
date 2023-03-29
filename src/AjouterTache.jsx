import './AjouterTache.scss';
import React from 'react';
import { styled } from '@mui/material/styles';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Button from '@mui/material/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ButtonAjouter = styled(Button)({
    borderBlockStyle: 'dotted',
    borderColor: '#666',
    color: '#c2c2c2',
    '&:hover': {
      backgroundColor: '#666',
      borderColor: '#666',
      color: '#fff',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#666',
      borderColor: '#666',
    },
    '&:focus': {
      color: '#fff',
      backgroundColor: '#666',
      boxShadow: '0 0 0 0.2rem #666',
    },
  });

 
  

export default function AjouterTache({tache, setTache, soumettreTache, notify}) {
    
    function inputTexte(event) {
        setTache(event.target.value);
        // console.log(event.target.value);
    };

    return (
    <div className="AjouterTache">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
      <form className="form" onSubmit={soumettreTache}>
          <input className="form_input" value={tache} onChange={inputTexte} type="text" name="text-taches" placeholder="Ajouter un To Do?" />
          <ButtonAjouter variant="outlined">
              <AddTaskIcon fontSize="large" onClick={soumettreTache}>Ajouter</AddTaskIcon>
          </ButtonAjouter>
      </form>
    </div>
    );


}
