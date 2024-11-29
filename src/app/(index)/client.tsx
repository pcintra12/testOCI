'use client'

import React from 'react';

import { get, set } from './db';

export default function PageUsersMap() {
  const [valor, setValor] = React.useState('');
  const [processing, setProcessing] = React.useState('');
  React.useEffect(() => {
    (async () => {
      setProcessing('obtendo valor');
      setTimeout(async () => {
        const valor = await get();
        setValor(valor);
        setProcessing('ok');
      }, 500);
    })();
  }, [])

  try {
    return (
      <>
        <div>
          {processing}
        </div>
        <div>
          valor: {valor}
        </div>
        <button onClick={() => set((new Date()).toString())}>
          gravar atual
        </button>
      </>
    );
  } catch (error) {
    console.log('erro', error);
  }
}