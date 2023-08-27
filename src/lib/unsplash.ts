import { UnsplashResponse } from '@/interfaces/unsplash-response'
import axios, { AxiosResponse } from 'axios'

const clientId = 'Vx98KXnQ4o5PD0FhXTBTBbo-mbl29QXXTpcxlDxQoFs'

type SearchPhotoRequest = {
  params: {
    query: {
      searchTerm: string
    }
  }
}

export const searchPhoto = async ({
  params,
}: SearchPhotoRequest): Promise<AxiosResponse<UnsplashResponse>> => {
  return axios.get(
    `https://api.unsplash.com/search/photos?page=1&query=${params.query.searchTerm}&client_id=${clientId}`,
  )
}
