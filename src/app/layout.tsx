import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'PAAKS Purified Water | Delivered with Excellence',description:'PAAKS Purified Water — quality drinking water and delivery services across Northern Ghana.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
