import './BtnControle.scss';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// Custom boutton de MUI
const ButtonSupprimeToutes = styled(Button)({
  
  borderColor: '#c42929',
  color: '#c42929',
  '&:hover': {
    backgroundColor: '#c42929',
    borderColor: '#c42929',
    color: '#fff',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#c42929',
    borderColor: '#c42929',
  },
  '&:focus': {
    color: '#fff',
    backgroundColor: '#c42929',
    boxShadow: '0 0 0 0.2rem #c42929',
  },
});

const ButtonFilter = styled(Button)({
  
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

export default function BtnControle({setFiltreTache, ajoutTache, setAjoutTache}) {
  

    const afficheNbTaches = ajoutTache.filter(tache => !tache.fait).length;
   
    function afficheToutes() {
        setFiltreTache("toutes");
      }
    
    function afficheCompleted() {
      setFiltreTache("completed");
    }
    
    function afficheActives() {
      setFiltreTache("actives");
    }
      

    function supprimerToutCompleted() {
        setAjoutTache(ajoutTache.filter(tache => !tache.fait));
    }
    
    // Date de l'année
    const annee = new Date().getFullYear();


    return (
        <div className='BtnControle'>
            <footer>
                <p className="nombre-tache">{afficheNbTaches} tâche active</p>
                <div className="btn-controleur">
                <Stack direction="row" spacing={2}>
                    <ButtonFilter variant="outlined" onClick={afficheToutes}><strong>Toutes</strong></ButtonFilter>
                    <ButtonFilter variant="outlined" onClick={afficheCompleted}><strong>Complétés</strong></ButtonFilter>
                    <ButtonFilter variant="outlined" onClick={afficheActives}><strong>Actives</strong></ButtonFilter>
                </Stack>
                </div>
                <div className='supprime-all'>
                  <Stack>
                    <ButtonSupprimeToutes variant="outlined" onClick={supprimerToutCompleted}><strong>Supprime Complétés</strong></ButtonSupprimeToutes>
                  </Stack>
                </div>
                <div className="droits">
                  <p>&copy; {annee} Tous droits réservés - 4PA - TIM</p>
                  <p>Fait par Kevin Kuch</p>
                </div>
            </footer>
        </div>
    );
}