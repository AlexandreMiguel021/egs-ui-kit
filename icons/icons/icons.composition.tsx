import React, { CSSProperties, useState } from 'react'
import { icons } from './iconsList'

const Grid = {
  display: 'Grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  gap: 24
} as CSSProperties

const Container = {
  padding: '24px 8px',
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
} as CSSProperties

const Icon = {
  backgroundColor: '#f84600',
  color: 'white',
  padding: 12,
  display: 'flex',
  borderRadius: '100%'
} as CSSProperties

const Li = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'sans-serif',
  gap: 6
} as CSSProperties

const Input = {
  padding: 8,
  border: '2px solid #f84600',
  outline: 'none',
  borderRadius: 8,
  fontSize: 16,
  margin: 'auto'
} as CSSProperties

export const allIcons = () => {
  const [value, setValue] = useState('')
  const iconsTerm = icons.filter((icon) =>
    icon.name.toLocaleLowerCase().includes(value)
  )
  const iconList = value ? iconsTerm : icons

  const handleSearch = (e) => {
    setValue(e.target.value.toLocaleLowerCase())
  }

  return (
    <div style={Container}>
      <input
        style={Input}
        type="search"
        placeholder="Buscar Icone"
        value={value}
        onChange={handleSearch}
      />
      <ul style={Grid}>
        {iconList.map(({ icon, id, name }) => (
          <li style={Li} key={id}>
            <span>{name}</span>
            <div style={Icon}>{icon}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
