'use server'

import { sql } from '@vercel/postgres'
import { FunkoPop } from '@/types/types'

export async function fetchFunkos() {
  try {
    const data = await sql`SELECT * FROM funkos`
    return data.rows?.map((funko) => {
      const opcionesFecha = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        timeZone: 'Europe/Madrid',
      }
      return {
        name: funko.name,
        funkoId: funko.funkoid,
        collection: funko.collection,
        prize: funko.prize,
        img: funko.img,
        ticket: funko.ticketimg,
        buyDate: funko.buydate.toLocaleString('es-ES', opcionesFecha),
        userId: funko.Usuario_id,
        id: funko.id,
      }
    }) as FunkoPop[]
  } catch (error) {
    console.log(error)
  }
}

export async function getFunkoById(id: string) {
  try {
    const data = await sql`SELECT * FROM funkos WHERE Funkoid = ${id}`
    return data.rows
  } catch (error) {
    console.log(error)
  }
}
