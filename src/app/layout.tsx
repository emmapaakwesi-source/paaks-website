import type {Metadata} from 'next';
import {SiteShell} from './site-content';
import './globals.css';
export const metadata:Metadata={title:'PAAKS Purified Water | Pure Water. Trusted Service.',description:'Sachet water, 19L dispenser refills, workplace supply and delivery enquiries. PAAKS Purified Water, based in Tamale, Northern Ghana.',icons:{icon:'/brand/paaks-official-logo.webp',apple:'/brand/paaks-official-logo.webp'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>}
