"use client"
import { siteConfig } from '@/configs/site.conf'
import { Dropdown, MenuProps } from 'antd'
import Link from 'next/link'
import { Hamburger } from '../icons/iconApp'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '../ui/navigation-menu'
import { Button } from '../ui/button'
import { ToggleTheme } from '../toggleTheme'

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link className='max-w-md w-svw text-center ' href="/">Acceuil</Link>
        )
    },
    {
        key: '2',
        label: (
            <Link className='max-w-md w-svw text-center' href="/cours">Cours</Link>
        )
    }
]
export default function Navbar() {


    return (

        <nav className="sticky h-full top-0 w-full z-50 border-b border-gray-200 backdrop-blur">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <div className='flex gap-8 w-full h-full items-center'>

                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/gsnPhoto.jpg" className="h-14" alt="GSN photo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">GSN Formation</span>
                    </Link>
                    <NavigationMenu className='hidden md:block'>
                        <NavigationMenuList>
                            {
                                siteConfig.homeNav.map(({ label, href }) => (
                                    <NavigationMenuItem key={label}>
                                        <Link href={href} legacyBehavior passHref>
                                            <a className={`text-xl text-foreground ${navigationMenuTriggerStyle()}`}>
                                                {label}
                                            </a>
                                        </Link>
                                    </NavigationMenuItem>
                                ))
                            }
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="flex space-x-3 ">
                    <ToggleTheme />
                    <Link href="/signup" className="items-center justify-center h-full">
                            <Button >Sign up</Button>
                    </Link>

                    <Link href="/login" className="items-center justify-center h-full">
                        <Button variant='outline'>
                                Log In
                        </Button>
                    </Link>



                    <Dropdown menu={{ items }}
                    >
                        <button className='md:hidden'>
                            <Hamburger />
                        </button>
                    </Dropdown>
                </div>

            </div>
        </nav>


    )
}