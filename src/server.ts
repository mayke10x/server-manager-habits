import Fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/', async () => {
    const hasbits = await prisma.habit.findMany()

    return 'Hello World'
})

app.listen({
    port: 3333
})