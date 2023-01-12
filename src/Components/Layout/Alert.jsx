import React from 'react'
import { useContext } from 'react'
import AlertContext from '../../Context/Alert/AlertContext'

function Alert() {

    const {alert} = useContext(AlertContext)

  return alert !== null && (
    <div role="alert">
      <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
      Oops!
    </div>
    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
      <p>{alert.message}</p>
    </div>
</div>
  )
}

export default Alert