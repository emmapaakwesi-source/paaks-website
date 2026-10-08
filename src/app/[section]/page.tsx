import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ContentPage} from '../site-content';
const sections=['products','quality','delivery','corporate','distributors','about','faq','contact'];
export const dynamicParams=false;
export function generateStaticParams(){return sections.map(section=>({section}))}
export async function generateMetadata({params}:{params:Promise<{section:string}>}):Promise<Metadata>{const {section}=await params;const titles:Record<string,string>={products:'Our Products',quality:'Quality & Purification',delivery:'Delivery & Services',corporate:'Corporate & Event Supply',distributors:'Become a Distributor',about:'Our Story',faq:'Frequently Asked Questions',contact:'Contact Us'};return {title:`${titles[section]||'PAAKS'} | PAAKS Purified Water`}}
export default async function Page({params}:{params:Promise<{section:string}>}){const {section}=await params;if(!sections.includes(section))notFound();return <ContentPage section={section}/>}
