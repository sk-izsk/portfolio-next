import axios, { AxiosResponse } from 'axios'
import { Informations } from './api-types'

const BASE_URL: string =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/informations'
    : 'https://izsk-portfolio-backend.herokuapp.com/informations'

const fetchInformation = async () => {
  const response: AxiosResponse<Informations> = await axios.get<any, AxiosResponse<Informations>>(
    BASE_URL,
  )

  const { data, status } = response

  return {
    data,
    status,
  }
}

export { fetchInformation }
