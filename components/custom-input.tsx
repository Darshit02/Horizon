import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from '@/components/ui/form'
import { Control, FieldPath, Form } from 'react-hook-form'
import { authFormSchema } from '@/lib/utils'
import { z } from 'zod'
import { Input } from '@/components/ui/input'

const formSchema = authFormSchema('sign-up')

interface CustomInputProps {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string
}

const CustomInput = ({ control, name, label, placeholder }: CustomInputProps) => {
    return (
        <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <div className="form-item">
            <FormLabel className="form-label">
              {label}
            </FormLabel>
            <div className="flex w-full flex-col">
              <FormControl>
                <Input
                  {...field}
                  placeholder={placeholder}
                  className="input-class"
                  type ={name === 'password' ? 'password' : 'text'}
                />
              </FormControl>
              <FormMessage className="form-message mt-2" />
            </div>
          </div>
        )}
      />
    )
}

export default CustomInput