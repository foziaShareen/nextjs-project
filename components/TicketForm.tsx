"use client"
import { ticketSchema } from '@/ValidationSchemas/tickets'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { Input } from './ui/input'
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css";
import { Select, SelectItem,SelectContent, SelectTrigger, SelectValue } from './ui/select'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import axios from 'axios'

 
type TicketFormData=z.infer<typeof ticketSchema>


const TicketForm = () => {
    const[isSubmitting,setIsSubmitting]=useState(false)
    const[error,setError]=useState("")
    const router=useRouter()

    const form = useForm<TicketFormData>({
        resolver: zodResolver(ticketSchema)
    })
    async function onSubmit(values:z.infer<typeof ticketSchema>) {
        try{

setIsSubmitting(true)
setError("")
await axios.post('/api/tickets',values)
setIsSubmitting(false)
router.push('/tickets')
router.refresh()
        }
        catch(err){
            setError("Something went wrong")
            setIsSubmitting(false)
        }
    }
    return (
        <div className='rounded-md w-full p-4 border'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-8'>
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                       <FormItem>
                       <FormLabel>Title</FormLabel>
                       <FormControl>
                           <Input placeholder="Ticket  Title here.." {...field} />
                       </FormControl>
                       </FormItem>
                    )}
                        />
                        <Controller name="description" control={form.control} render={({ field }) =>
                         (<SimpleMDE placeholder="Ticket  Description here.." {...field}/>)}
                        />
                        

                 

                        <div className='flex w-full space-x-4'>
                  <FormField  control ={form.control}name="status" render={({field})=>(
                    <FormItem>  
                        <FormLabel>Status</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="status"/>
                            </SelectTrigger> 
                        </FormControl>

                            <SelectContent>
                                <SelectItem value="OPEN">Open</SelectItem>
                                <SelectItem value="CLOSED">Closed</SelectItem>
                                <SelectItem value="STARTED">Started</SelectItem>
                            </SelectContent>
                       
                        </Select>
                       
                    </FormItem>
                )}
                />
 

 <FormField  control ={form.control}name="priority" render={({field})=>(
                    <FormItem>  
                        <FormLabel>Priority</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="priority"/>
                            </SelectTrigger> 
                        </FormControl>

                            <SelectContent>
                                <SelectItem value="LOW">low</SelectItem>
                                <SelectItem value="HIGH">high</SelectItem>
                                <SelectItem value="MEDIUM">medium</SelectItem>
                            </SelectContent>
                       
                        </Select>
                       
                    </FormItem>
                )}
                />
                    </div>   
                    <Button type='submit' disabled={isSubmitting}>Submit</Button>  
                </form>
            </Form>
        </div>
    )
}

export default TicketForm
