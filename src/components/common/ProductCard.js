import React from 'react'

export default function ProductCard({values}) {
  return (
    <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
      <h3 className="uk-card-title">{ values? values.name: "No disponible" }</h3>
      <p>Costo: { values ? values.precio: "No disponible" }</p>
    </div>
  )
}
