import { useState } from 'react';
import axios from 'axios';

export default function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/users', { name, email });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Nome"
        style={inputStyle}
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Criar Usuário</button>
    </form>
  );
}

const formStyle = {
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
};

const inputStyle = {
  flex: 1,
  padding: '0.5rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#fff',
  color: '#000',            
};

const buttonStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: '#0070f3',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};
