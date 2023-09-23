import { Montserrat,Unica_One,Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
export const unica_one=Unica_One({
    subsets: ['latin'],
    display: 'swap',
    weight:["400"]
})
 
export const clash_display = localFont({
    src: [
      {
        path: './fonts/ClashDisplay-Bold.woff2',
        style: 'bold',
        weight:"700"
      },
      {
        path: './fonts/ClashDisplay-Semibold.woff2',
        style: 'semibold',
        weight:"600"
      },
      {
        path: './fonts/ClashDisplay-Regular.woff2',
        style: 'normal',
      },
      {
        path: './fonts/ClashDisplay-Medium.woff2',
        style: 'medium',
      },
      {
        path: './fonts/ClashDisplay-Extralight.woff2',
        style: 'light',
      },
      {
        path: './fonts/ClashDisplay-light.woff2',
        style: 'light',
      },
    ],
  })