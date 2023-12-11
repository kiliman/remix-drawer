import { teams } from '~/components/navigation'

import { json, type LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params
  const team = teams.find(t => t.id === Number(id))!
  return json({ team })
}

export default function Component() {
  const { team } = useLoaderData<typeof loader>()
  return (
    <div>
      <h1 className="text-2xl font-bold">Team: {team.name}</h1>
    </div>
  )
}
