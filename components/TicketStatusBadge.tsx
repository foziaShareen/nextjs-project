import { Status } from '@prisma/client'

import React from 'react'
import { Badge } from './ui/badge';
interface Props {
  status:Status
}
const statusMap :Record<Status,{label:string;color:"bg-red-400" | "bg-blue-400" | "bg-green-400"}> = {
  "OPEN": { label: 'Open', color: 'bg-red-400' },
  "CLOSED": { label: 'Closed', color: 'bg-blue-400' },
  "STARTED": { label: 'started', color: 'bg-green-400' },
  
}

const PriorityStatusBadge = ({status}:Props) => {
    return (
        <Badge className={`${statusMap[status].color} text-background hover:${statusMap[status].color}`}>
          {statusMap[status].label}
        </Badge>
    )
}

export default PriorityStatusBadge
