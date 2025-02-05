import DataTable from '@/components/DataTable'
import React from 'react'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const Tickets = async() => {
    const tickets = await prisma.ticket.findMany()
    return (
        <div>
        <DataTable tickets={tickets} />
        </div>
    )
}

export default Tickets
