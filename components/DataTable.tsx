import { Ticket } from '@prisma/client'
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import TicketStatusBadge from './TicketStatusBadge'
import PriorityComponent from './PriorityComponent'
interface Props {
    tickets: Ticket[]
}

const DataTable = ({tickets}:Props) => {
    // console.log(tickets)
    return (
        <div className='w-full mt-5'>
            <div className='rounded-md sm:border'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead >ID</TableHead>
                            <TableHead >Title</TableHead>
                            <TableHead >Description</TableHead>
                            <TableHead >Status</TableHead>
                            <TableHead >Priority</TableHead>
                            <TableHead >Created At</TableHead>
                            <TableHead >Updated At</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tickets ? tickets.map((ticket)=>(
                            
                            <TableRow key={ticket.id}>
                                <TableCell>{ticket.id}</TableCell>
                                <TableCell>{ticket.title}</TableCell>
                                <TableCell>{ticket.description}</TableCell>
                                <TableCell><TicketStatusBadge status={ticket.status} /></TableCell>
                                <TableCell>
                                    <div className='flex justify-center'><PriorityComponent priority={ticket.priority} /></div></TableCell> 
                                
                                <TableCell>{ticket.createdAt.toLocaleString('en-PK',{
                                    month:'2-digit',
                                    day:'2-digit',
                                    year:'numeric',
                                    hour12:true,
                                    minute:'2-digit'

                                })}</TableCell>
                                <TableCell>{ticket.updatedAt.toLocaleString('en-PK',{
                                    month:'2-digit',
                                    day:'2-digit',
                                    year:'numeric',
                                    hour12:true,
                                    minute:'2-digit'

                                })}</TableCell>

                            </TableRow>
                            


                            )):null}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default DataTable
