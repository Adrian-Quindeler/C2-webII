import { useState } from 'react';
import axios from 'axios';

export default function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [published, setPublished] = useState(false);
  const [authorId, setAuthorId] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/posts', {
      title,
      content,
      published,
      authorId,
    });
    setTitle('');
    setContent('');
    setPublished(false);
    setAuthorId(0);
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Título"
        style={inputStyle}
      />
      <input
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Conteúdo"
        style={inputStyle}
      />
      <input
        type="number"
        value={authorId}
        onChange={e => setAuthorId(Number(e.target.value))}
        placeholder="ID do Autor"
        style={inputStyle}
      />
      <label style={checkboxLabel}>
        <input
          type="checkbox"
          checked={published}
          onChange={e => setPublished(e.target.checked)}
        />
        Publicado
      </label>
      <button type="submit" style={buttonStyle}>Criar Post</button>
    </form>
  );
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '0.75rem',
  marginBottom: '1.5rem',
};

const inputStyle = {
  padding: '0.5rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  backgroundColor: '#fff',
  color: '#000',
};

const checkboxLabel = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  fontSize: '0.9rem',
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