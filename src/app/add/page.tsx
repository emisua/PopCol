'use client'
import { addFunkoToCollection } from '../../lib/actions'
import { AddForm } from '@/components/AddForm'

export default function AddPage() {
  return (
    <div className='w-96 mx-auto py-8'>
      <h1 className='font-bold text-xl mb-4 text-neutral-300'>
        Aumenta tu colección
      </h1>
      {/* <form
        className='flex flex-col gap-4'
        action={addFunkoToCollection}
      >
        <Input
          label='Nombre'
          type='text'
          variant='flat'
          name='name'
        />
        <Input
          label='Id'
          type='text'
          variant='flat'
          name='funkoId'
        />
        <Input
          label='Colección'
          type='text'
          variant='flat'
          name='collection'
        />
        <Input
          label='Url imagen'
          type='text'
          variant='flat'
          name='urlimg'
        />
        <Input
          label='Cuánto te ha costado'
          type='text'
          variant='flat'
          name='prize'
        />
        <div className='flex gap-4'>
          <Button
            className='w-full'
            color='danger'
            size='lg'
            onClick={() => router?.back()}
          >
            Cancelar
          </Button>
          <Button
            className='w-full'
            color='success'
            size='lg'
            type='submit'
          >
            Crear
          </Button>
        </div>
      </form> */}
      <AddForm />
    </div>
  )
}
