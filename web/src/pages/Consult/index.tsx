import React, { useEffect, useState, FormEvent } from 'react'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import MapIcon from "../../components/Map_marker/MapIcon";

import { Point } from '../Modal'

import api from '../../services/api'
 
import Sidebar from '../../components/Sidebar'
import SelectConsult from '../../components/Select_consult'

import './styles.css'

function Consult(){

  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

  const [points, setPoints] = useState([]);

  const [state, setState] = useState('');

  async function searchPoints(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('points', {
      params: {
        state,
      }
    });

    setPoints(response.data)
    console.log(points)
  }


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude])
    })
  }, []);

  return (
    <div className="consult-container">
      <div className="consult-content">
        <Sidebar
          title="Selecione uma denúncia no mapa para mais detalhes!"
        >
          <div className="area-search">
            <form className="form-search" onSubmit={searchPoints}>
              <SelectConsult
                name="state"
                value={state}
                onChange={(e) => { setState(e.target.value) }}
                options={[
                  { value: 'Acre', label: 'Acre' },
                  { value: 'Alagoas', label: 'Alagoas' },
                  { value: 'Amapá', label: 'Amapá' },
                  { value: 'Amazonas', label: 'Amazonas' },
                  { value: 'Bahia', label: 'Bahia' },
                  { value: 'Ceará', label: 'Ceará' },
                  { value: 'Distrito Federal', label: 'Distrito Federal' },
                  { value: 'Espírito Santo', label: 'Espírito Santo' },
                  { value: 'Goiás', label: 'Goiás' },
                  { value: 'Maranhão', label: 'Maranhão' },
                  { value: 'Mato Grosso', label: 'Mato Grosso' },
                  { value: 'Mato Grosso do Sul', label: 'Mato Grosso do Sul' },
                  { value: 'Minas Gerais', label: 'Minas Gerais' },
                  { value: 'Pará', label: 'Pará' },
                  { value: 'Paraíba', label: 'Paraíba' },
                  { value: 'Paraná', label: 'Paraná' },
                  { value: 'Pernambuco', label: 'Pernambuco' },
                  { value: 'Piauí', label: 'Piauí' },
                  { value: 'Rio de Janeiro', label: 'Rio de Janeiro' },
                  { value: 'Rio Grande do Norte', label: 'Rio Grande do Norte' },
                  { value: 'Rio Grande do Sul', label: 'Rio Grande do Sul' },
                  { value: 'Rondônia', label: 'Rondônia' },
                  { value: 'Roraima', label: 'Roraima' },
                  { value: 'Santa Catarina', label: 'Santa Catarina' },
                  { value: 'São Paulo', label: 'São Paulo' },
                  { value: 'Sergipe', label: 'Sergipe' },
                  { value: 'Tocantins', label: 'Tocantins' },
                ]}
              />

              <div className="btn-selected-state">
                <button type="submit">
                  Pesquisar
                </button>
              </div>
            </form>
          </div>
        </Sidebar>

      </div>
      <div className="area-map">
        <div id="mapid_consult">
          <Map center={initialPosition} zoom={15} style={{ width: '100%', height: '100%' }}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {points.map((point: Point) => {
              return <Marker
                key={point.id}
                icon={MapIcon}
                position={[point.latitude, point.longitude]}>
                <Popup closeButton={false} minWidth={380} maxWidth={380} minHeight={300} maxHeight={400} className="map-popup" >
                  <img src={point.image_url} alt=""/> 
                  <h1> Detalhes da Denúncia </h1>
                  <p> <span>Denunciante:</span> {point.name}</p>
                  <p> <span>Email:</span> {point.email}</p> 
                  <p> <span>Data:</span> {point.date} </p>
                  <p> <span>Horário:</span> {point.horario} </p>  
                  <p> <span>Observação:</span> <br/> {point.observacao} </p>
                </Popup>
              </Marker>
            })}

          </Map>
        </div>
      </div>
    </div>
  );
}

export default Consult;