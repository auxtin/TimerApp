import React from 'react'

export default function CreateModal({open,  children, onClose }) {
  if(!open) return null;
  return (
    <div>{ children }</div>
  )
}
