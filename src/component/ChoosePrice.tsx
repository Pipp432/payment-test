import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'

function ChoosePrice({ setPrice, name }: { name: string, setPrice: Dispatch<SetStateAction<{ customDonation: number }>> }) {
  const [currentPrice, setCurrentPrice] = useState(10)
  const selectPriceHandler = (price: number) => {
    setPrice({ customDonation: price })
    setCurrentPrice(price)
  }
  return (<>
    <div className='price-container'>
      <button className='price' onClick={(e: FormEvent) => { e.preventDefault(); selectPriceHandler(10) }}>
        $10
      </button>

      <button className='price' onClick={(e: FormEvent) => { e.preventDefault(); selectPriceHandler(20) }}>
        $20
      </button>

      <button className='price' onClick={(e: FormEvent) => { e.preventDefault(); selectPriceHandler(30) }}>
        $30
      </button>
    </div>
    <input hidden name='customDonation' readOnly value={currentPrice} />
  </>
  )
}

export default ChoosePrice
