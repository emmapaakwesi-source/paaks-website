import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'PAAKS Purified Water | Delivered with Excellence',description:'PAAKS Purified Water — sachet water, dispenser refills and delivery enquiries in Tamale and Northern Ghana.',icons:{icon:'/brand/paaks-official-logo.webp',apple:'/brand/paaks-official-logo.webp'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
