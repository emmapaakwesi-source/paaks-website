import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ProductPage} from '../../site-content';
const products = {
  sachet: {title:'500ml Sachet Water',description:'PAAKS 500ml sachet water, supplied in bags of 30. Enquire about quantities and delivery in Tamale.',image:'sachet-bag-v2',width:1000,height:1200},
  dispenser: {title:'19L Dispenser Water',description:'PAAKS 19L dispenser water for homes and workplaces. Ask about refills and regular supply.',image:'dispenser-label-v3',width:1200,height:1200},
  'empty-bottle': {title:'Empty 19L Dispenser Bottles',description:'Buy empty 19L dispenser bottles from PAAKS. Enquire about stock, pricing, delivery and compatibility. Water refills are sold separately.',image:'empty-dispenser-v1',width:1186,height:1326},
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
