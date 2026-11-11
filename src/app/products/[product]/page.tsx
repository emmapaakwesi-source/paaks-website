import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ProductPage} from '../../site-content';
const products = {
  sachet: {title:'500ml Sachet Water in Tamale',description:'Order PAAKS 500ml sachet water in Tamale: 30 sachets per bag for homes, shops and events. Ask our team about quantities, pricing and delivery.',image:'sachet-bag-v2',width:1200,height:1200},
  dispenser: {title:'19L Dispenser Water Refills in Tamale',description:'Arrange PAAKS 19L dispenser water refills in Tamale for your home or workplace. Enquire about bottle requirements, delivery and regular supply.',image:'dispenser-label-v3',width:1200,height:1200},
  'empty-bottle': {title:'Empty 19L Dispenser Bottles in Tamale',description:'Buy empty 19L dispenser bottles from PAAKS in Tamale. Confirm stock, cap availability, dispenser compatibility and delivery. Water is sold separately.',image:'empty-dispenser-v1',width:1186,height:1326},
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
