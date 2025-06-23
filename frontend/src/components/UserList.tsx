import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users').then(res => setUsers(res.data));
  }, []);

  return (
    <ul style={listStyle}>
      {users.map(user => (
        <li key={user.id} style={itemStyle}>
          <strong>{user.name}</strong> <br />
          <small>{user.email}</small>
        </li>
      ))}
    </ul>
  );
}

const listStyle = {
  listStyle: 'none',
  padding: 0,
};

const itemStyle = {
  padding: '0.75rem',
  background: '#f0f0f0',
  borderRadius: '6px',
  marginBottom: '0.5rem',
};
