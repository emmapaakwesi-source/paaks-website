import type {ComponentProps} from 'react';
// Full document navigation avoids static RSC fetches and deployment build-ID mismatches.
export default function StaticLink(props:ComponentProps<'a'>){return <a {...props}/>;}
