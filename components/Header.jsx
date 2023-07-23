import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '../assets/Logo.png'

function Header() {
    return (
        <div>
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-4 px-1 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        {/* logo side */}

                        <Image src={Logo} width={50} height={50} alt=" " />
                        <span class="ml-3 text-xl">Fudo</span>
                    </a>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={'/'}>
                            <button type="button" class="mbtn btn-primary position-relative">
                                Home
                            </button>
                        </Link>
                        <Link href={'items'}>
                            <button type="button" class="mbtn btn-primary p-3 m-3 position-relative">
                                Menu
                            </button>
                        </Link>
                        <Link href={'/'}> 
                            <button type="button" class="mbtn m-3 btn-primary position-relative">
                                Contact 
                            </button>
                        </Link>

                        <Link href={'Cart'}> 
                            <button type="button" class="mbtn btn-primary position-relative">
                                 Cart  
                            </button>
                        </Link>
                        
                    </nav>

                    <button type="button" class="mbtn btn-primary position-relative">
                        Profile
                        <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                            
                        </span>
                    </button>

                </div>
            </header>
        </div>
    )
}

export default Header