import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './RemplirFormStyles.css';
import AffichForm from '../AfficherFormulaire/AffichForm';

// Options pour la liste déroulante du niveau d'étude
const educationLevels = [
  { value: 'baccalaureat', label: 'Baccalauréat' },
  { value: 'licence', label: 'Licence' },
  { value: 'master', label: 'Master' },
  { value: 'doctorat', label: 'Doctorat' },
];
const RemplirForm = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        dateNaissance: null,
        email: '',
        niveauEtude: null,
      });
      const [showFormData, setShowFormData] = useState(false);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleDateChange = (date) => {
        setFormData({ ...formData, dateNaissance: date });
      };
    
      const handleSelectChange = (selectedOption) => {
        console.log('Selected Option:', selectedOption);
        setFormData({ ...formData, niveauEtude: selectedOption });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Validation des champs du formulaire
    const { nom, prenom, dateNaissance, email, niveauEtude } = formData;
    if (!nom || !prenom || !dateNaissance || !email || !niveauEtude) {
      toast.error('Veuillez remplir tous les champs du formulaire.');
      return;
    }

        // Afficher une alerte de soumission réussie
        toast.success('Soumission réussie!'); 
        setShowFormData(true);
        // Réinitialiser les champs du formulaire après soumission
        
      };
      const customStyles = {
        singleValue: (provided) => ({
          ...provided,
          color: '#ffb777', // Couleur rouge de la police pour l'option choisie
          fontWeight: 'bold', // Texte en gras pour l'option choisie
          fontStyle: 'italic', // Texte en italique pour l'option choisie
        }),
      };
     
      return (
        <div className='container'>
          <ToastContainer />
          {!showFormData ? (
        <>
          <h2>Formulaire Utilisateur</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Nom:
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Prénom:
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Date de Naissance:
                <DatePicker
                  selected={formData.dateNaissance}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Sélectionner une date"
                />
              </label>
            </div>
            <div>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Niveau d'Étude:
                <Select
                  components={makeAnimated()}
                  value={formData.niveauEtude}
                  onChange={handleSelectChange}
                  options={educationLevels}
                  isClearable
                  isSearchable
                  placeholder="Sélectionner ou écrire un niveau d'étude"
                   classNamePrefix="react-select"
                   styles={customStyles}
                />
              </label>
            </div>
            <button  type="submit">Soumettre</button>
          </form>
          </>
      ) : ( <AffichForm formData = {formData}/>
    )}
        </div>
      );
    }

export default RemplirForm