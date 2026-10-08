'use client';
import { useEffect, useRef, useState } from 'react';
import { X, MessageCircle } from 'lucide-react';

type Props = { open: boolean; onClose: () => void; notice?: string };
export default function OrderDialog({ open, onClose, notice }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [product, setProduct] = useState('19L dispenser refill');
  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (open && !element.open) element.showModal();
    if (!open && element.open) element.close();
  }, [open]);
  return <dialog ref={dialog} className="order-dialog" onCancel={onClose} onClose={onClose} aria-labelledby={notice ? 'notice-title' : 'order-title'} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <button className="close" aria-label="Close dialog" onClick={onClose}><X /></button>
    {notice ? <><h2 id="notice-title">Coming soon</h2><p>{notice}</p><button className="primary" onClick={onClose}>GOT IT</button></> : <>
      <p className="form-eyebrow">PURE WATER. TRUSTED SERVICE.</p>
      <h2 id="order-title">Let’s arrange your water</h2>
      <p>Send an enquiry to PAAKS on WhatsApp. The team will confirm pricing, delivery availability and your order.</p>
      <form onSubmit={event => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const message = `Hello PAAKS, I would like to enquire about water delivery.\nName: ${data.get('name')}\nProduct: ${product}\nQuantity: ${data.get('quantity')}\nDelivery area: ${data.get('area')}\nNotes: ${data.get('notes') || 'None'}`;
        window.open(`https://wa.me/233244025199?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
      }}>
        <label>Your name<input name="name" autoComplete="name" required maxLength={100} /></label>
        <label>Product<select value={product} onChange={event => setProduct(event.target.value)}><option>19L dispenser refill</option><option>500ml sachet water (bags)</option><option>Event or corporate supply</option></select></label>
        <div className="form-row"><label>Quantity<input name="quantity" type="number" min="1" max="10000" step="1" defaultValue="1" required /></label><label>Delivery area<input name="area" autoComplete="address-level2" placeholder="e.g. Tamale" required maxLength={150}/></label></div>
        <label>Additional details<textarea name="notes" rows={2} maxLength={500} placeholder="Preferred date, landmark or delivery instructions"/></label>
        <button type="submit" className="primary"><MessageCircle size={18}/> CONTINUE TO WHATSAPP</button>
        <small>Opens WhatsApp with your enquiry. Your message is sent only when you choose to send it there.</small>
      </form>
    </>}
  </dialog>;
}
