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
} from '@/components/ui/card'

const FunkoCard = ({ funko }: { funko: FunkoPop }) => {
  const { img, name, collection, funkoId, prize } = funko
  const [clickedFunko, setClickedFunko] = useState<FunkoPop>()

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>
            #{funkoId} - {collection}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src={img!}
            alt={name}
          />
        </CardContent>
      </Card>
    </>
  )
}
export default FunkoCard
