'use client';
import { useEffect, useRef, useState, useId } from 'react';
import { X, MessageCircle } from 'lucide-react';

type Props = { open: boolean; onClose: () => void; notice?: string; initialProduct?: string };
export default function OrderDialog({ open, onClose, notice, initialProduct }: Props) {
  const titleId = useId();
  const form = useRef<HTMLFormElement>(null);
  const [prepared, setPrepared] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  const dialog = useRef<HTMLDialogElement>(null);
  const [product, setProduct] = useState('19L dispenser refill');
  const [supplyProduct, setSupplyProduct] = useState('19L dispenser refills');
  const clearPrepared = () => { setPrepared(''); setCopyStatus(''); };
  const clearValidity = () => { form.current?.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input,textarea').forEach(input => input.setCustomValidity('')); };
  useEffect(() => { clearValidity(); form.current?.querySelector('textarea')?.setCustomValidity(''); clearPrepared(); }, [product, supplyProduct]);
  useEffect(() => { if (open) { form.current?.reset(); clearValidity(); clearPrepared(); setSupplyProduct('19L dispenser refills'); if (!notice && initialProduct) setProduct(initialProduct); } }, [open, notice, initialProduct]);
  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (open && !element.open) element.showModal();
    if (!open && element.open) element.close();
  }, [open]);
  const partnership = product === 'Distributor partnership';
  const bulk = ['Corporate supply','Event water supply'].includes(product);
  const delivery = product === 'Delivery enquiry';
  const flexibleSupply = bulk || delivery;
  const mixedSupply = flexibleSupply && supplyProduct === 'Mixed supply';
  const informational = ['Quality report request','Bottled water availability','Dispenser service enquiry','Dispenser machine cleaning'].includes(product);
  return <dialog ref={dialog} className="order-dialog" onCancel={onClose} onClose={onClose} aria-labelledby={titleId} onClick={event => { const rect=event.currentTarget.getBoundingClientRect(); if(event.target===event.currentTarget && (event.clientX<rect.left || event.clientX>rect.right || event.clientY<rect.top || event.clientY>rect.bottom)) onClose(); }}>
    <button className="close" aria-label="Close dialog" onClick={onClose}><X /></button>
    {notice ? <><h2 id={titleId}>PAAKS information</h2><p>{notice}</p><button className="primary" onClick={onClose}>GOT IT</button></> : <>
      <p className="form-eyebrow">PURE. SAFE. TRUSTED.</p>
      <h2 id={titleId}>{partnership?'Let’s discuss a partnership':bulk?'Request a supply quote':informational?'Ask the PAAKS team':'Let’s arrange your water'}</h2>
      <p>Send an enquiry to PAAKS on WhatsApp. The team will confirm pricing, delivery availability and your order.</p>
      <form ref={form} onChange={clearPrepared} onSubmit={event => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        for (const field of ['name','area','company']) { const input=event.currentTarget.elements.namedItem(field) as HTMLInputElement | null; if(input?.required && !input.value.trim()) { input.setCustomValidity('Please enter a value.'); input.reportValidity(); return; } } 
        const message = `Hello PAAKS, I would like to make an enquiry.\nName: ${String(data.get('name')).trim()}\nEnquiry: ${product}\nSupply product: ${flexibleSupply ? supplyProduct : product}\nQuantity: ${data.get('quantity') ? `${data.get('quantity')} ${product === '500ml sachet water (bags)' ? 'bags (30 × 500ml)' : product === '19L dispenser refill' ? '19L refills' : product === 'Empty 19L bottle enquiry' ? 'empty 19L bottles' : supplyProduct === '500ml sachet water (bags)' ? 'bags (30 × 500ml)' : '19L refills'}` : 'To be discussed'}\nDelivery area: ${String(data.get('area') || 'Not supplied').trim()}\nBusiness: ${data.get('company') || 'Not supplied'}\nPreferred date: ${data.get('date') || 'To be confirmed'}\nSupply frequency: ${data.get('frequency') || 'Not supplied'}\nReferral code: ${String(data.get('referral')||'Not supplied').trim().toUpperCase()}\nNotes: ${data.get('notes') || 'None'}`;
        if(mixedSupply && !String(data.get('notes')||'').trim()){const notes=event.currentTarget.elements.namedItem('notes') as HTMLTextAreaElement;notes.setCustomValidity('Please specify the number of bags and refills.');notes.reportValidity();return;}
        setPrepared(message);
        window.open(`https://wa.me/233596531880?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
      }}>
        <label>Your name<input name="name" onInput={event=>event.currentTarget.setCustomValidity('')} autoComplete="name" required maxLength={100} placeholder="Your full name" /></label>
        <label>Enquiry type<select name="product" value={product} onChange={event => setProduct(event.target.value)}><option>19L dispenser refill</option><option>500ml sachet water (bags)</option><option>Empty 19L bottle enquiry</option><option>Delivery enquiry</option><option>Corporate supply</option><option>Event water supply</option><option>Dispenser machine cleaning</option><option>Dispenser service enquiry</option><option>Distributor partnership</option><option>Quality report request</option><option>Bottled water availability</option></select></label>
        {flexibleSupply&&<label>Supply product<select name="supplyProduct" value={supplyProduct} onChange={event=>setSupplyProduct(event.target.value)}><option>19L dispenser refills</option><option>500ml sachet water (bags)</option><option>Mixed supply</option></select></label>}
        {(partnership||bulk)&&<label>Business or organisation<input name="company" onInput={event=>event.currentTarget.setCustomValidity('')} autoComplete="organization" required={partnership} maxLength={150} placeholder="Business / organisation name"/></label>}
        <div className={!partnership&&!informational&&!mixedSupply?'form-row':'form-row single'}>{!partnership&&!informational&&!mixedSupply&&<label>{(product === '500ml sachet water (bags)' || flexibleSupply && supplyProduct === '500ml sachet water (bags)') ? 'Number of bags (30 sachets each)' : product === 'Empty 19L bottle enquiry' ? 'Number of empty bottles' : 'Number of 19L refills'}<input name="quantity" type="number" min="1" max="10000" step="1" defaultValue="1" required /></label>}<label>{partnership?'Business location':informational?'Location (optional)':'Delivery area'}<input name="area" onInput={event=>event.currentTarget.setCustomValidity('')} autoComplete="address-level2" placeholder="e.g. Tamale" required={!informational} maxLength={150}/></label></div>
        {bulk&&<div className="form-row"><label>Preferred date<input name="date" type="date" min={new Date().toISOString().slice(0,10)}/></label><label>Supply frequency<select name="frequency" key={product} defaultValue={product==='Event water supply'?'One-off / event':'To be discussed'}><option>One-off / event</option><option>Weekly</option><option>Monthly</option><option>To be discussed</option></select></label></div>}
        <label>Referral code (optional)<input name="referral" maxLength={30} pattern="[A-Za-z0-9-]{3,30}" autoCapitalize="characters" spellCheck={false} placeholder="Your referrer’s code"/><small>Use a code issued by PAAKS. Our team checks eligibility before confirming your order.</small></label>
        <label>{mixedSupply?'Number of sachet bags and 19L refills':partnership?'Products, expected volume and business details':'Additional details'}<textarea name="notes" onInput={event=>event.currentTarget.setCustomValidity('')} required={mixedSupply} rows={2} maxLength={500} placeholder={product==='Dispenser machine cleaning'?'e.g. Countertop dispenser, 2 machines, preferred cleaning date':product==='Empty 19L bottle enquiry'?'e.g. Dispenser model, cap requirements and delivery landmark':product==='500ml sachet water (bags)'?'e.g. 5 bags for a gathering, preferred date and delivery landmark':'e.g. Bottle exchange details, preferred date and delivery landmark'}/></label>
        <button type="submit" className="primary"><MessageCircle size={18}/> CONTINUE TO WHATSAPP</button>
        <small>Opens WhatsApp with your enquiry. Your message is sent only when you choose to send it there. <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy &amp; external services</a></small>
      </form>
      {prepared&&<div className="enquiry-fallback"><p role="status">Your enquiry is prepared. Send it in WhatsApp to contact PAAKS.</p><a className="btn" href={`https://wa.me/233596531880?text=${encodeURIComponent(prepared)}`} target="_blank" rel="noopener noreferrer">Open WhatsApp</a><button className="btn secondary" type="button" onClick={async()=>{try{await navigator.clipboard.writeText(prepared);setCopyStatus('Enquiry copied.');}catch{setCopyStatus('Select and copy the enquiry below.');}}}>Copy enquiry</button><label>Prepared enquiry<textarea readOnly value={prepared} rows={5}/></label><small role="status">{copyStatus}</small></div>}
    </>}
  </dialog>;
}
