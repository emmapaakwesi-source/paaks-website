import {Homepage} from './site-content';
const website={'@context':'https://schema.org','@type':'WebSite','@id':'https://paakspurifiedwater.com/#website',name:'PAAKS Purified Water',alternateName:'PAAKS',url:'https://paakspurifiedwater.com/',inLanguage:'en'};
export default function Home(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(website).replace(/</g,'\\u003c')}}/><Homepage/></>}
