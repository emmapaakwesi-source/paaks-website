'use client';
import { useEffect, useRef, useState, useId } from 'react';
import { X, MessageCircle } from 'lucide-react';

type Props = { open: boolean; onClose: () => void; notice?: string; initialProduct?: string };
export default function OrderDialog({ open, onClose, notice, initialProduct }: Props) {
  const titleId = useId();
  const dialog = useRef<HTMLDialogElement>(null);
  const [product, setProduct] = useState('19L dispenser refill');
  useEffect(() => { if (open && !notice && initialProduct) setProduct(initialProduct); }, [open, notice, initialProduct]);
  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (open && !element.open) element.showModal();
    if (!open && element.open) element.close();
  }, [open]);
  const partnership = product === 'Distributor partnership';
  const bulk = product === 'Event or corporate supply';
  const informational = ['Quality report request','Bottled water availability','Dispenser service enquiry'].includes(product);
  return <dialog ref={dialog} className="order-dialog" onCancel={onClose} onClose={onClose} aria-labelledby={titleId} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <button className="close" aria-label="Close dialog" onClick={onClose}><X /></button>
    {notice ? <><h2 id={titleId}>PAAKS information</h2><p>{notice}</p><button className="primary" onClick={onClose}>GOT IT</button></> : <>
      <p className="form-eyebrow">PURE WATER. TRUSTED SERVICE.</p>
      <h2 id={titleId}>{partnership?'Let’s discuss a partnership':bulk?'Request a supply quote':informational?'Ask the PAAKS team':'Let’s arrange your water'}</h2>
      <p>Send an enquiry to PAAKS on WhatsApp. The team will confirm pricing, delivery availability and your order.</p>
      <form onSubmit={event => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const message = `Hello PAAKS, I would like to make an enquiry.\nName: ${String(data.get('name')).trim()}\nEnquiry: ${product}\nQuantity: ${data.get('quantity') || 'To be discussed'}\nDelivery area: ${String(data.get('area') || 'Not supplied').trim()}\nBusiness: ${data.get('company') || 'Not supplied'}\nPreferred date: ${data.get('date') || 'To be confirmed'}\nSupply frequency: ${data.get('frequency') || 'Not supplied'}\nNotes: ${data.get('notes') || 'None'}`;
        window.open(`https://wa.me/233244025199?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
      }}>
        <label>Your name<input name="name" autoComplete="name" required maxLength={100} placeholder="Your full name" /></label>
        <label>Enquiry type<select name="product" value={product} onChange={event => setProduct(event.target.value)}><option>19L dispenser refill</option><option>500ml sachet water (bags)</option><option>Event or corporate supply</option><option>Dispenser service enquiry</option><option>Distributor partnership</option><option>Quality report request</option><option>Bottled water availability</option></select></label>
        {(partnership||bulk)&&<label>Business or organisation<input name="company" autoComplete="organization" required={partnership} maxLength={150} placeholder="Business / organisation name"/></label>}
        <div className={!partnership&&!informational?'form-row':'form-row single'}>{!partnership&&!informational&&<label>Quantity<input name="quantity" type="number" min="1" max="10000" step="1" defaultValue="1" required /></label>}<label>{partnership?'Business location':informational?'Location (optional)':'Delivery area'}<input name="area" autoComplete="address-level2" placeholder="e.g. Tamale" required={!informational} maxLength={150}/></label></div>
        {bulk&&<div className="form-row"><label>Preferred date<input name="date" type="date"/></label><label>Supply frequency<select name="frequency"><option>One-off / event</option><option>Weekly</option><option>Monthly</option><option>To be discussed</option></select></label></div>}
        <label>{partnership?'Products, expected volume and business details':'Additional details'}<textarea name="notes" rows={2} maxLength={500} placeholder="Preferred date, landmark or delivery instructions"/></label>
        <button type="submit" className="primary"><MessageCircle size={18}/> CONTINUE TO WHATSAPP</button>
        <small>Opens WhatsApp with your enquiry. Your message is sent only when you choose to send it there.</small>
      </form>
    </>}
  </dialog>;
}
