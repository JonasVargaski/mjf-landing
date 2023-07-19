'use client'

import { useId } from 'react'

import {
  Controller,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form'
import { cn } from '@/lib/utils'

type TFormFieldsProps<TFieldValues extends FieldValues = FieldValues> =
  UseControllerProps<TFieldValues, FieldPath<TFieldValues>> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
      label?: string
      helperText?: string
    }

export function TextAreaFormField<
  TFieldValues extends FieldValues = FieldValues,
>({
  name,
  id,
  control,
  defaultValue,
  helperText,
  className,
  ...props
}: TFormFieldsProps<TFieldValues>) {
  const _id = useId()

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <div className={cn('grid gap-1', className)}>
          <textarea
            id={id || _id}
            autoCapitalize="none"
            autoCorrect="off"
            aria-describedby={id || _id}
            className={cn(
              'flex w-full text-black resize-none rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
              className,
            )}
            {...field}
            {...props}
          />
          {!!(error?.message || helperText) && (
            <p id={id || _id} className="pl-1 text-sm">
              {error?.message || helperText}
            </p>
          )}
        </div>
      )}
    />
  )
}
