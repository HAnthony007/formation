"use client"
import { siteConfig } from '@/configs/site.conf'
import { Dropdown, MenuProps } from 'antd'
import Link from 'next/link'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from '../ui/navigation-menu'
import { Button } from '../ui/button'
import { ToggleTheme } from '../toggleTheme'
import { MenuIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useAuthStore } from '@/stores/AuthStore'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { AvatarFallback, AvatarImage, Avatar } from '../ui/avatar'
import { toast } from 'sonner'
import { useUser } from '@/hooks/useAllUser'
import { useEffect } from 'react'

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
            <Link className='max-w-md w-svw text-center' href="/student/courses">Cours</Link>
        )
    }
]

export default function Navbar() {
    const pathname = usePathname()
    const router = useRouter()
    const { user, updateUser } =useUser()

    useEffect(()=>{
        updateUser()
    }, [user])

    const { logout, user: authUser} = useAuthStore()

    const handleLogout = () => {
        toast.success("Log Out successfully")
        logout()
        router.push('/login')        
    }
    return (

        <nav className="sticky h-full top-0 w-full z-50 border-b border-gray-200 backdrop-blur">
            <div className="max-w-screen-xl h-full flex items-center justify-between mx-auto p-4">
                <div className='flex gap-8 w-full h-full items-center'>

                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/gsnPhoto.jpg" className="h-14 rounded-full" alt="GSN photo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap md:block hidden" >GSN Formation</span>
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

                <div className="flex items-center justify-center flex-1 space-x-5">
                    <ToggleTheme />
                        <span className="text-sm font-medium text-gray-700 text-center w-full text-nowrap">Points: <span id='ok'></span></span>
                        <span className="text-sm font-medium text-gray-700 text-center w-full text-nowrap">Level: {Number(authUser?.level)}</span>
                    {
                        user && pathname.includes('/student') ? (
                            <>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="secondary" size="icon" className="relative h-8 w-8 rounded-full">
                                            <Avatar className="h-9 w-9">
                                                <AvatarImage src="" />
                                                <AvatarFallback>{authUser?.firstName.toUpperCase()[0]}.{authUser?.lastName.toUpperCase()[0]}</AvatarFallback>
                                            </Avatar>
                                            <span className="sr-only">Toggle user menu</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel className="font-normal">
                                            <div className="flex flex-col space-y-1">
                                                <p className="text-sm font-medium leading-none">
                                                    {authUser?.firstName} {authUser?.lastName}
                                                </p>
                                                <p className="text-xs leading-none text-muted-foreground">
                                                    {
                                                        authUser?.email
                                                    }
                                                </p>
                                            </div>
                                        </DropdownMenuLabel>

                                        <DropdownMenuSeparator />

                                        <DropdownMenuItem onClick={() => router.push(`/${authUser?.role.toLocaleLowerCase()}/profile`)}>
                                            Your profile
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem onClick={handleLogout}>
                                            <Button variant="ghost" >
                                                Logout
                                            </Button>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </>
                        ) : 
                            !pathname.includes("/login") && !pathname.includes("/signup") && (
                                <>
                                    <Link href="/signup" className="items-center justify-center h-full">
                                        <Button >Sign up</Button>
                                    </Link>

                                    <Link href="/login" className="items-center justify-center h-full">
                                        <Button variant='outline' type='button'>
                                            Log In
                                        </Button>
                                    </Link>
                                </>
                            )
                    }



                    <Dropdown menu={{ items }}
                    >
                        <button className='md:hidden'>
                            {/* <Hamburger /> */}
                            <MenuIcon />
                        </button>
                    </Dropdown>
                </div>

            </div>
        </nav>


    )
}