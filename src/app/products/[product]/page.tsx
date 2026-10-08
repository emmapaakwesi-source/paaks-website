import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ProductPage} from '../../site-content';
export const dynamicParams=false;
export function generateStaticParams(){return [{product:'sachet'},{product:'dispenser'}]}
export async function generateMetadata({params}:{params:Promise<{product:string}>}):Promise<Metadata>{const {product}=await params;return {title:`${product==='sachet'?'500ml Sachet Water':'19L Dispenser Water'} | PAAKS Purified Water`}}
export default async function Page({params}:{params:Promise<{product:string}>}){const {product}=await params;if(!['sachet','dispenser'].includes(product))notFound();return <ProductPage product={product}/>}
