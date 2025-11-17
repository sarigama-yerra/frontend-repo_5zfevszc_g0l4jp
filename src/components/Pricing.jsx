import { useEffect, useMemo, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL

export default function Pricing() {
  const [qty, setQty] = useState(1)
  const [address, setAddress] = useState({ country: 'Germany', city: 'Berlin', postal_code: '10115', street: 'Alexanderplatz 1' })
  const [calc, setCalc] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const canDec = qty > 1
  const canInc = qty < 20

  const payload = useMemo(() => ({ quantity: qty, address }), [qty, address])

  async function fetchPricing() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${BACKEND}/api/calculate-pricing`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error(`Bad response ${res.status}`)
      const data = await res.json()
      setCalc(data)
    } catch (e) {
      setError(e.message || 'Failed to fetch pricing')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPricing()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qty, address.country, address.city])

  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <h3 className="text-lg font-semibold text-gray-900">Select quantity</h3>
          <div className="mt-4 flex items-center gap-4">
            <button onClick={() => canDec && setQty(qty - 1)} className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 text-xl">-</button>
            <div className="text-2xl font-bold w-12 text-center">{qty}</div>
            <button onClick={() => canInc && setQty(qty + 1)} className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 text-xl">+</button>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600">Country</label>
              <input value={address.country} onChange={(e) => setAddress(a => ({ ...a, country: e.target.value }))} className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">City</label>
              <input value={address.city} onChange={(e) => setAddress(a => ({ ...a, city: e.target.value }))} className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Postal code</label>
              <input value={address.postal_code} onChange={(e) => setAddress(a => ({ ...a, postal_code: e.target.value }))} className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Street</label>
              <input value={address.street} onChange={(e) => setAddress(a => ({ ...a, street: e.target.value }))} className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
          </div>

          <button onClick={fetchPricing} className="mt-6 w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700">Recalculate</button>
          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <h3 className="text-lg font-semibold text-gray-900">Summary</h3>
          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <div className="flex justify-between"><span>Product price</span><span>€{calc?.product_price?.toFixed?.(2) ?? '—'}</span></div>
            <div className="flex justify-between"><span>Quantity</span><span>{calc?.quantity ?? '—'}</span></div>
            <div className="flex justify-between"><span>Subtotal</span><span>€{calc ? calc.subtotal.toFixed(2) : '—'}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>€{calc ? calc.shipping_cost.toFixed(2) : '—'}</span></div>
            <div className="flex justify-between font-semibold"><span>Total</span><span>€{calc ? calc.total.toFixed(2) : '—'}</span></div>
            <div className="pt-2 text-xs text-gray-500">{calc?.shipping_rule}</div>
          </div>

          <button disabled={!calc} className="mt-6 w-full rounded-lg bg-emerald-600 py-3 font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed">
            Pay with PayPal (server-side)
          </button>
          <p className="mt-2 text-xs text-gray-500">Buttons coming next. Backend order creation is ready.</p>
        </div>
      </div>
    </section>
  )
}
