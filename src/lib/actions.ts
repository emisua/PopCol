'use server'

import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { AddedFunko } from '../types/types'

export async function addFunkoToCollection(formData: FormData) {
  const { funkoId, name, collection, urlimg, prize, buyDate } = {
    funkoId: formData?.get('funkoId'),
    prize: formData?.get('prize'),
    urlimg:
      formData?.get('urlimg') ||
      'https://d2r9epyceweg5n.cloudfront.net/stores/002/773/972/products/mele-1_800x8003-removebg-preview1-5fbf74c83fe50b9e9c16879850228477-480-0.webp',
    collection: formData?.get('collection'),
    name: formData?.get('name'),
    buyDate: new Date(),
  } as AddedFunko

  console.log({ funkoId, name, collection, urlimg, prize, buyDate })

  await sql`INSERT INTO funkos (Usuario_id, Funkoid, Name, Collection, Img, Prize, ticketimg, buydate)
    VALUES ('1',${funkoId}, ${name}, ${collection}, ${urlimg}, ${prize}, 'http', ${buyDate.toISOString()})`

  revalidatePath('/collection')
  redirect('/collection')
}

export async function deleteFunkoFromCollection(id: number | undefined) {
  if (!id) return
  await sql`DELETE FROM funkos WHERE id = ${id}`

  revalidatePath('/collection')
  redirect('/collection')
}
