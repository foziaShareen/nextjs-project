import { NextRequest } from "next/server";
import { ticketSchema } from "@/ValidationSchemas/tickets";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST(request:NextRequest) {
    const body = await request.json();
    console.log(body);
    const validation = ticketSchema.safeParse(body);
    if (!validation.success) {
        return new Response(JSON.stringify(validation.error), { status: 400 });
    }

    const newTicket = await prisma.ticket.create({
        data: {...body}
    });
    return new Response(JSON.stringify(newTicket), { status: 201 });
}