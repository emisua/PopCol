/* eslint-disable @next/next/no-img-element */
'use client'
import { FunkoPop } from '@/types/types'
import { useState } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const FunkoCard = ({ funko }: { funko: FunkoPop }) => {
  const { img, name, collection, funkoId, prize } = funko
  const [clickedFunko, setClickedFunko] = useState<FunkoPop>()

  return (
    <>
      <Card className='max-w-md mx-auto relative overflow-hidden'>
        <img
          alt='Product Image'
          className='w-full object-cover z-10 aspect-square'
          height={500}
          src={img}
          width={500}
        />
        <CardContent className='p-4 relative z-10'>
          <h2 className='text-xl font-semibold mb-2'>{name}</h2>
          <p className='text-gray-500 dark:text-gray-400 mb-4'>{collection}</p>
          <Button className='w-full'>View More</Button>
        </CardContent>
      </Card>
    </>
  )
}
export default FunkoCard
