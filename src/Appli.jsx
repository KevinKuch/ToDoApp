import './Appli.scss';
import AjouterTache from './AjouterTache';
import ListTaches from './ListTaches';
import BtnControle from './BtnControle';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Appli() {
  const [tache, setTache] = useState("");
  const [ajoutTache, setAjoutTache] = useState(() => JSON.parse(localStorage.getItem('ToDoApp')) || []);
  const [filtreTache, setFiltreTache] = useState("toutes");

  useEffect(() => localStorage.setItem('ToDoApp', JSON.stringify(ajoutTache)), [ajoutTache]);

  function soumettreTache(e) {
    e.preventDefault();
    //Ajout un toast pour notifier l'utilisateur si l'input est vide
    const notify = () => toast("Veuillez entrer une tâche");
    
    if (tache === "") {
        return notify();
    };
    setAjoutTache([...ajoutTache, 
        {
            id: "tache_" + crypto.randomUUID(),
            texte: tache, 
            fait: false, 
            dateAjouter: new Date().getTime()
        }
    ]);
    setTache("");
};



  return (
    <div className="Appli">
      <header>
        <img src="checklist.png" alt="checklist-icone" />
        <h1>To Do App</h1>
      </header>
      <AjouterTache 
      tache={tache} 
      setTache={setTache} 
      ajoutTache={ajoutTache} 
      setAjoutTache={setAjoutTache}
      soumettreTache={soumettreTache}
  
      />
      
      <ListTaches 
      ajoutTache={ajoutTache} 
      setAjoutTache={setAjoutTache} 
      filtreTache={filtreTache}/>

      <BtnControle ajoutTache={ajoutTache} 
      setAjoutTache={setAjoutTache} 
      filtreTache={filtreTache} 
      setFiltreTache={setFiltreTache}/>
    </div>
  );
}
