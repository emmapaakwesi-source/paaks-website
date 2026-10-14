import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ProductPage} from '../../site-content';
const products = {
  sachet: {title:'500ml Sachet Water in Tamale',description:'Order PAAKS purified 500ml sachet water in bags of 30 for homes, shops, offices and events in Tamale. Ask about bulk quantities and delivery.',image:'sachet-bag-v2',width:1000,height:1200},
  dispenser: {title:'19L Dispenser Water Delivery in Tamale',description:'Get PAAKS 19-litre purified dispenser water for homes and offices in Tamale. Enquire about refills, regular workplace supply and delivery availability.',image:'dispenser-label-v3',width:1200,height:1200},
  'empty-bottle': {title:'Empty 19L Water Dispenser Bottles',description:'Enquire about empty 19L water dispenser bottles from PAAKS in Tamale, including stock, compatibility, pricing and delivery. Water refills sold separately.',image:'empty-dispenser-v1',width:1186,height:1326},
};
export const dynamicParams=false;
export function generateStaticParams(){return Object.keys(products).map(product=>({product}))}
export async function generateMetadata({params}:{params:Promise<{product:string}>}):Promise<Metadata>{
  const {product}=await params;
  if(!Object.hasOwn(products,product))notFound();
  const item=products[product as keyof typeof products];
  return {title:`${item.title} | PAAKS Purified Water`,description:item.description,alternates:{canonical:`/products/${product}`},openGraph:{title:`${item.title} | PAAKS`,description:item.description,url:`/products/${product}`,images:[{url:`/imagery/${item.image}.webp`,width:item.width,height:item.height}]},twitter:{title:`${item.title} | PAAKS`,description:item.description}};
}
export default async function Page({params}:{params:Promise<{product:string}>}){const {product}=await params;if(!Object.hasOwn(products,product))notFound();return <ProductPage product={product}/>}
