import React, { useEffect, useState, FormEvent, ChangeEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Map, TileLayer, Marker } from 'react-leaflet'
import { LeafletMouseEvent } from 'leaflet'

import api from '../../services/api'

import './styles.css'

import MapIcon from "../../components/Map_marker/MapIcon";

import Back from '../../assets/back.png'

import Input from '../../components/Input'
import Data from '../../components/Input_Data'
import Time from '../../components/Input_Time'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import Dropzone from '../../components/Dropzone'

function Form(){

  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [horario, setHorario] = useState('');
  const [state, setState] = useState('');
  const [observacao, setObservacao] = useState('');

  const [selectedFile, setSelectedFile] = useState<File>();

  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude])
    })
  }, []);

  function handleMapClick(event: LeafletMouseEvent) {
    setSelectedPosition([
      event.latlng.lat,
      event.latlng.lng
    ])
  }

  async function handleCreatePoint(e: FormEvent) {
    e.preventDefault();

    const [latitude, longitude] = selectedPosition;

    const data = new FormData();

    data.append('name', name);
    data.append('email', email);
    data.append('date', date);
    data.append('horario', horario);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('state', state);
    data.append('observacao', observacao);
    
    if(selectedFile){
      data.append('image', selectedFile);
    }

    await api.post('points', data);
 
    history.push('/sucess');
  }

  return (
    <div>
      <div className="form-container">
        <div className="form-content">
          <header>
            <div className="back">
              <Link to="/">
                <img src={Back} alt="voltar" />
              </Link>
            </div>
            <div className="title-form">
              <h1> Reportar Queimada </h1>
            </div>
          </header>
          <main className="area-form">
            <form onSubmit={handleCreatePoint}>
              <fieldset>
                <div className="first-column">
                  <legend> Preencha os campos necessários para continuar. </legend>
                  <Input
                    label="Nome completo"
                    name="name"
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                  />
                  <Input
                    label="E-mail"
                    name="email"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                  />
                  <div className="numbers-area">
                    <Data
                      label="Data"
                      name="date"
                      value={date}
                      onChange={(e) => {setDate(e.target.value)}}
                    />
                    <Time
                      label="Horário"
                      name="horario"
                      value={horario}
                      onChange={(e) => {setHorario(e.target.value)}}
                    />
                  </div>
                  <Select
                    name="state"
                    label="Estado"
                    value={state}
                    onChange={(e) => {setState(e.target.value)}}
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
                  <Textarea
                    label="Observações"
                    name="observacoes"
                    value={observacao}
                    onChange={(e) => {setObservacao(e.target.value)}}
                  />
                </div>
                <div className="second-column">
                  <legend> Aonde está ocorrendo? </legend>
                  <div id="mapid">
                    <Map center={initialPosition} zoom={15} style={{ width: '50%', height: '50%' }} onClick={handleMapClick}>
                      <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker icon={MapIcon} position={selectedPosition} />
                    </Map>
                  </div>

                  <Dropzone onFileUploaded={setSelectedFile}/>

                  <div className="btn-submit"> 
                    <button type="submit"> 
                      Cadastrar
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Form;