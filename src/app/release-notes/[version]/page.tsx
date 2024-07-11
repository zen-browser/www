'use client'

import { useParams } from 'next/navigation'

export default function() {
  const params = useParams<{ version: string }>()
  const { version } = params;

  return (
    <div>
      <h1>{version}</h1>
    </div>
  )
}
