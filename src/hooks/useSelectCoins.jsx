import { useState } from 'react'
import { Label, Select } from '../components/styled/styledComponents'

const useSelectCoins = (label, span, options) => {
  const [state, setState] = useState('')
  const selectCoins = () => (
    <>
      <Label>{label}<span> {span} </span></Label>

      <Select
        value={state}
        onChange={e => setState(e.target.value)}
      >
        <option value='' disabled>Select</option>
        {options.map(option => (
          <option
            key={option.id}
            value={option.id}
          >{option.name}
          </option>
        ))}

      </Select>
    </>
  )

  return [state, selectCoins]
}

export default useSelectCoins
