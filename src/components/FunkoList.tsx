import { FunkoPop } from '@/types/types'
import FunkoCard from './FunkoCard'
import { fetchFunkos } from '@/lib/data'

const FunkoList = async () => {
  const funkos = await fetchFunkos()

  return (
    <div className='grid grid-cols-4 gap-4 py-8'>
      {funkos?.map((funko) => {
        return (
          <FunkoCard
            funko={funko}
            key={funko.id}
          />
        )
      })}
    </div>
  )
}
export default FunkoList
