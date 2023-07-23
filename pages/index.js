import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div class="container mx-auto flex flex-wrap px-7 flex-col md:flex-row items-center">
       <Hero>
       </Hero>
    </div>
  )
}
