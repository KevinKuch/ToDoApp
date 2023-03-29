import './ListTaches.scss';
import Tache from './Tache';
import React from 'react';

export default function ListTaches({ajoutTache, setAjoutTache, filtreTache}) {

    function supprimerTache(id) {
        setAjoutTache(ajoutTache.filter(tache => tache.id !== id));
    };

    function cocherFiniTache(id) {
        setAjoutTache(ajoutTache.map(tache => {
                if (tache.id === id) {
                    return {
                        ...tache, fait: !tache.fait
                    }
                }
                return tache;
            })
        );
    };

    
    return (
        <div className="ListTaches">
            <ul className="list-container">
            {
                ajoutTache.length > 0 ?

                    ajoutTache.filter(tache => filtreTache === "completed" ? 
                    tache.fait : filtreTache === "actives" ? 
                    !tache.fait : true)
                    .map(tache => (
                    <Tache 
                        key={tache.id} 
                        {...tache}
                        ajoutTache={ajoutTache} 
                        setAjoutTache={setAjoutTache}
                        supprimerTache={supprimerTache}
                        cocherFiniTache={cocherFiniTache} 
                    />
                ))

                : <p className="no-taches">Aucune tâche</p>
            }
            </ul>
        </div>
    );
    
}

