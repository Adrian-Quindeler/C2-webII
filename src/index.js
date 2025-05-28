"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = require("../generated/prisma");
const path_1 = __importDefault(require("path"));
const prisma = new prisma_1.PrismaClient();
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'index.html'));
});
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});
// USER:
// CREATE
app.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name } = req.body;
    try {
        const user = yield prisma.user.create({
            data: { email, name },
        });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ error: 'Erro ao criar usuário' });
    }
}));
// READ All
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma.user.findMany();
    res.json(users);
}));
// READ one
app.get('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const user = yield prisma.user.findUnique({ where: { id } });
    if (user)
        res.json(user);
    else
        res.status(404).json({ error: 'Usuário não encontrado' });
}));
// UPDATE
app.put('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const { email, name } = req.body;
    try {
        const user = yield prisma.user.update({
            where: { id },
            data: { email, name },
        });
        res.json(user);
    }
    catch (error) {
        res.status(400).json({ error: 'Erro ao atualizar usuário' });
    }
}));
// DELETE
app.delete('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        yield prisma.user.delete({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        res.status(400).json({ error: 'Erro ao deletar usuário' });
    }
}));
// POST
// CREATE
app.post('/posts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content, published, authorId } = req.body;
    try {
        const post = yield prisma.post.create({
            data: { title, content, published, authorId },
        });
        res.status(201).json(post);
    }
    catch (error) {
        res.status(400).json({ error: 'Erro ao criar post' });
    }
}));
// READ All
app.get('/posts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield prisma.post.findMany();
    res.json(posts);
}));
// READ one
app.get('/posts/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const post = yield prisma.post.findUnique({ where: { id } });
    if (post)
        res.json(post);
    else
        res.status(404).json({ error: 'Post não encontrado' });
}));
