"use client"
import { ticketSchema } from '@/ValidationSchemas/tickets'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { Input } from './ui/input'
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css";
import { Select, SelectItem,SelectContent, SelectTrigger, SelectValue } from './ui/select'
 
type TicketFormData=z.infer<typeof ticketSchema>


const TicketForm = () => {
    const form = useForm<TicketFormData>({
        resolver: zodResolver(ticketSchema)
    })
    async function onSubmit(values:z.infer<typeof ticketSchema>) {
        console.log(values)
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
                </form>
            </Form>
        </div>
    )
}

export default TicketForm
