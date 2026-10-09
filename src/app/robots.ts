import type {MetadataRoute} from 'next';
export const dynamic='force-static';
// Owner-private preview. Change to allow '/' when public launch is approved.
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',disallow:'/'},sitemap:'https://paakspurifiedwater.com/sitemap.xml'};}
