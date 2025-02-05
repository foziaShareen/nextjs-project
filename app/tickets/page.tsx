import DataTable from '@/components/DataTable'
import React from 'react'

import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

const prisma = new PrismaClient()

const Tickets = async() => {
    const tickets = await prisma.ticket.findMany()
    return (
        <div>
            <Link href="/tickets/new" className={buttonVariants({variant:"default"})}>New Ticket</Link>
        <DataTable tickets={tickets} />
        </div>
    )
}

export default Tickets
