import { useSelector } from 'react-redux'
import { Photo } from '../axios'
import { Layout, PhotoContainer } from '../components'
import { RootState } from '../redux/store'

interface Props {}

const Photos: React.FC<Props> = () => {
  const photos: Photo[] = useSelector<RootState, Photo[]>((state: RootState) => state.photos)
  return (
    <Layout headTitle='Photos'>
      <section className='mt-28 grid grid-cols-1 justify-items-center items-start lg:justify-items-start gap-y-10 md:gap-y-14 md:gap-x-10 md:grid-cols-2 lg:grid-cols-3'>
        {photos.map((photo: Photo, index: number) => (
          <PhotoContainer key={index} url={photo.url} />
        ))}
      </section>
    </Layout>
  )
}

export default Photos
