import React, {ChangeEvent, FC, useCallback, useMemo} from 'react'
import {useFormContext, useFormState} from 'react-hook-form-mui'
import {CreateSnippet} from '@/data/snippet'
import {TextField} from '@mui/material'

export const SnippetFileField: FC = () => {
  const {register, setValue, clearErrors,} = useFormContext<CreateSnippet>()

  const {errors} = useFormState<CreateSnippet>()

  const codeErrors = useMemo(() => errors['code'], [errors])

  const {name, required} = register('code')

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0]
    file.text().then(code => {
      clearErrors('code')
      setValue('code', code)
    })
  }, [clearErrors, setValue])

  return (
    <TextField
      name={name}
      required={required}
      onChange={handleChange}

      error={codeErrors !== undefined}
      helperText={codeErrors?.message}

      type="file"
      label="File"

      fullWidth
      variant="outlined"
    />
  )
}
