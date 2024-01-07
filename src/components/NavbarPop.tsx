'use client'
import { NavLink } from '@/types/types'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'

const AVATAR_URL = 'https://avatars.githubusercontent.com/u/91371538?v=4'

const MENU_ITEMS: NavLink[] = [
  {
    label: 'Añadir',
    href: '/add',
  },
  {
    label: 'Colección',
    href: '/collection',
  },
]

export default function NavbarPop() {
  return (
    <div>
      <div className='container max-w-screen-xl py-4'>
        <NavigationMenu>
          <NavigationMenuList>
            {MENU_ITEMS.map(({ label, href }) => (
              <NavigationMenuItem key={label}>
                <Link
                  href={href}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    type='link'
                    //className={navigationMenuTriggerStyle()}
                  >
                    {label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}
