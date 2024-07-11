import React from 'react'

const AffichForm = ({ formData }) => {
    return (
      <div>
        <h2>Données du Formulaire Soumises</h2>
        <p>Nom: {formData.nom}</p>
        <p>Prénom: {formData.prenom}</p>
        <p>Date de Naissance: {formData.dateNaissance ? formData.dateNaissance.toLocaleDateString() : ''}</p>
        <p>Email: {formData.email}</p>
        <p>Niveau d'Étude: {formData.niveauEtude ? formData.niveauEtude.label : ''}</p>
      </div>
      
    );
  };
  
  export default AffichForm;