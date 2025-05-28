import express, { Express, Request, Response } from "express";
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();
const app: Express = express();
const port = 3000;

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Olá Mundo!');
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});




// USER:

// CREATE
app.post('/users', async (req: Request, res: Response) => {
  const { email, name } = req.body;
  try {
    const user = await prisma.user.create({
      data: { email, name },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar usuário' });
  }
});

// READ All
app.get('/users', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// READ one
app.get('/users/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = await prisma.user.findUnique({ where: { id } });
  if (user) res.json(user);
  else res.status(404).json({ error: 'Usuário não encontrado' });
});

// UPDATE
app.put('/users/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { email, name } = req.body;
  try {
    const user = await prisma.user.update({
      where: { id },
      data: { email, name },
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar usuário' });
  }
});

// DELETE
app.delete('/users/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    await prisma.user.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar usuário' });
  }
});




// POST

// CREATE
app.post('/posts', async (req: Request, res: Response) => {
  const { title, content, published, authorId } = req.body;
  try {
    const post = await prisma.post.create({
      data: { title, content, published, authorId },
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar post' });
  }
});

// READ All
app.get('/posts', async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
});

// READ one
app.get('/posts/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const post = await prisma.post.findUnique({ where: { id } });
  if (post) res.json(post);
  else res.status(404).json({ error: 'Post não encontrado' });
});