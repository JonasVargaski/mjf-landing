'use client'

import { useId } from 'react'
import { IMaskInput, IMaskInputProps } from 'react-imask'
import {
  Controller,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form'
import { cn } from '@/lib/utils'

type TFormFieldsProps<TFieldValues extends FieldValues = FieldValues> =
  UseControllerProps<TFieldValues, FieldPath<TFieldValues>> &
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'value' | 'min' | 'max'
    > & {
      label?: string
      helperText?: string
      mask?: IMaskInputProps<HTMLInputElement>['mask']
    }

export function InputFormField<TFieldValues extends FieldValues = FieldValues>({
  name,
  id,
  control,
  defaultValue,
  helperText,
  className,
  mask,
  ...props
}: TFormFieldsProps<TFieldValues>) {
  const _id = useId()

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <div className={cn('grid gap-1', className)}>
          <IMaskInput
            id={id || _id}
            aria-describedby={id || _id}
            mask={mask as any}
            inputRef={ref}
            type="text"
            autoCapitalize="none"
            autoCorrect="off"
            onAccept={(_value, _maskInputEvent, inputEvent) =>
              field.onChange(inputEvent)
            }
            className={cn(
              'flex h-11 w-full text-black rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
              className,
            )}
            {...props}
            {...field}
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
