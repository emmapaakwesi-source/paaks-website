import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ProductPage} from '../../site-content';
export const dynamicParams=false;
export function generateStaticParams(){return [{product:'sachet'},{product:'dispenser'}]}
export async function generateMetadata({params}:{params:Promise<{product:string}>}):Promise<Metadata>{const {product}=await params;const description=product==='sachet'?'PAAKS 500ml sachet water, supplied in bags of 30. Enquire about quantities and delivery in Tamale.':'PAAKS 19L dispenser water for homes and workplaces. Ask about refills, empty bottles and regular supply.';return {description,alternates:{canonical:`/products/${product}`},openGraph:{images:[{url:'/imagery/dispenser-label-v3.webp',width:1200,height:1200}],title:product==='sachet'?'500ml Sachet Water | PAAKS':'19L Dispenser Water | PAAKS',description,url:`/products/${product}`},twitter:{title:product==='sachet'?'500ml Sachet Water | PAAKS':'19L Dispenser Water | PAAKS',description},title:`${product==='sachet'?'500ml Sachet Water':'19L Dispenser Water'} | PAAKS Purified Water`}}
export default async function Page({params}:{params:Promise<{product:string}>}){const {product}=await params;if(!['sachet','dispenser'].includes(product))notFound();return <ProductPage product={product}/>}
