import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import React from 'react';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', background: '#f9f9f9', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>Dashboard</h1>

      <section style={sectionStyle}>
        <h2>Usuários</h2>
        <UserForm />
        <UserList />
      </section>

      <section style={sectionStyle}>
        <h2>Posts</h2>
        <PostForm />
        <PostList />
      </section>
    </div>
  );
}

const sectionStyle = {
  background: '#fff',
  padding: '1.5rem',
  marginBottom: '2rem',
  borderRadius: '8px',
  color: '#333',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};
