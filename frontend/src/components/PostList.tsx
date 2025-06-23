// PostList.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  content: string;
  published: boolean;
  authorId: number;
}

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts').then(res => setPosts(res.data));
  }, []);

  return (
    <ul style={listStyle}>
      {posts.map(post => (
        <li key={post.id} style={itemStyle}>
          <h3 style={{ margin: 0 }}>{post.title}</h3>
          <p style={{ margin: '0.5rem 0' }}>{post.content}</p>
          <small>
            <strong>Status:</strong> {post.published ? '✅ Publicado' : '📝 Rascunho'}<br />
            <strong>Autor ID:</strong> {post.authorId}
          </small>
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
  background: '#f0f0f0',
  color: '#000', 
  padding: '1rem',
  borderRadius: '6px',
  marginBottom: '0.75rem',
};
