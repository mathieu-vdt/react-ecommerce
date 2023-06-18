import React, { useEffect, useState } from 'react';
import { deleteUser, changePassword, getUserByToken } from '../api/user';

const MyAccount = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  let user_id;
  const getUser = async () => {
   
    const UserByToken = await getUserByToken();
    user_id = UserByToken.id
    
  };
  getUser();

  const handleDeleteAccount = async () => {
    try {
      await deleteUser();
      localStorage.removeItem('jwtToken');
    } catch (error) {
      console.error('Erreur lors de la suppression du compte', error);
    }
  };

  const handleUpdatePassword = async () => {
    try {
      // Appeler la fonction pour mettre à jour le mot de passe
      await changePassword(user_id, newPassword);
      // Réinitialiser les champs du formulaire ou effectuer d'autres actions si nécessaire
      setNewPassword('');
    } catch (error) {
      console.error('Erreur lors de la mise à jour du mot de passe', error);
    }
  };

  return (
    <div>
      <h2>Mon compte</h2>
      <h3>Supprimer mon compte</h3>
      <button onClick={handleDeleteAccount}>Supprimer le compte</button>

      <h3>Modifier le mot de passe</h3>

      <label htmlFor="newPassword">Nouveau mot de passe:</label>
      <input type="password" id="newPassword" value={newPassword} onChange={e => setNewPassword(e.target.value)} />

      <button onClick={handleUpdatePassword}>Mettre à jour le mot de passe</button>
    </div>
  );
};

export default MyAccount;
