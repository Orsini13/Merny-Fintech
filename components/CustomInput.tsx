"use client"
import { Button } from "@/components/ui/button"
import React, { useState } from 'react'

import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { FieldPath, useForm } from "react-hook-form"

import {    
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"
import { authFormSchema } from "@/lib/utils"


interface CustomInput{
    control: Control<z.infer<typeof authFormSchema>>,
    name: FieldPath<z.infer<typeof authFormSchema>>,
    label: string,
    placeholder: string
}

const CustomInput = ({ control , name, label, placeholder}: CustomInput) => {
  return (
    <div>
          <FormField
              control={control}
              name={name}
              render={({ field }) => (

                  <div className='form-item'>
                      <FormLabel className='form-label'>
                          {label}
                      </FormLabel>
                      <div className='flex w-full flex-col'>
                          <FormControl >
                              <Input
                                  placeholder={placeholder}
                                  className='input-class'
                                  type={name === 'password' ? 'password' : 'text'}
                                  {...field}
                              />
                          </FormControl>

                          <FormMessage className='form-message mt-2' />


                      </div>
                  </div>

              )}
          />

    </div>
  )
}

export default CustomInput