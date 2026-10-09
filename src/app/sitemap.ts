import type {MetadataRoute} from 'next';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return ['', '/privacy', '/referrals', '/products','/products/sachet','/products/dispenser','/products/empty-bottle','/quality','/delivery','/corporate','/distributors','/about','/faq','/contact'].map(path=>({url:`https://paakspurifiedwater.com${path}`,changeFrequency:'monthly' as const,priority:path===''?1:0.7}));}
