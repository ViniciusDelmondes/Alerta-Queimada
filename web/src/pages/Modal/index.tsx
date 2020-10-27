import React from 'react'

interface Params {
  point_id: number;
}

export interface Point {
  id: number;
  image: string;
  image_url: string;
  name: string;
  email: string;
  date: string;
  horario: string;
  observacao: string;
  latitude: number;
  longitude: number;
}

interface Data {
    point: {
      point_id: Params;
      id: number;
      image: string;
      name: string;
      email: string;
      date: string;
      horario: string;
      observacao: string;
    }
} 

export interface PointProps{
  point: Point;
}

const Model: React.FC<PointProps> = ({...point}) => {
  return (
    <div>
      Model
    </div>
  )
}

export default Model;