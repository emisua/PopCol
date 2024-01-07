export interface FunkoPop {
  id?: number
  funkoId: number | null
  name: string
  collection: string
  img?: string
  prize: string
  ticket?: string
  buyDate?: string
}

export interface NavLink {
  label: string
  href: string
}

export interface AddedFunko {
  name: string
  funkoId: number | null
  collection: string
  urlimg: string
  prize: string
  buyDate: Date
}
