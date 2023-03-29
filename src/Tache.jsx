import './Tache.scss';
import React from 'react';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconButton from '@mui/material/IconButton';
import { useSpring, animated } from '@react-spring/web'


export default function Tache({id, texte, fait, dateAjouter, supprimerTache, cocherFiniTache}) {

    // transition from top to bottom
    const animList = useSpring({
        from : {opacity: 0, transform: 'translate3d(0, -40px, 0)'},
        to : {opacity: 1, transform: 'translate3d(0, 0px, 0)'}      
      })

    
    return (
        <animated.div style={animList}className="Tache">
            <IconButton onClick={() => cocherFiniTache(id)} style={{color: "#666"}}>
                <CheckCircleOutlineOutlinedIcon  color={fait ? "success" : ""} fontSize='large' />
                {/* Finit */}
            </IconButton>

            <li className={fait ? "tacheFait" : "tacheNonFait"}>
                {texte}
            </li>
            <p className={fait ? "tacheFait" : "tacheNonFait"}>{new Date(dateAjouter).toLocaleString('fr', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
                })}
            </p>
            
            <IconButton onClick={() => supprimerTache(id)} style={{color: "#666"}}>
                <HighlightOffIcon fontSize='large' color={fait ? "error" : ""} />
                {/* Poubelle */}
            </IconButton>
            
        </animated.div>
    );
}