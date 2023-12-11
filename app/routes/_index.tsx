import { redirect } from '@remix-run/node'
import { type MetaFunction, type LoaderFunctionArgs } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export async function loader({ request }: LoaderFunctionArgs) {
  return redirect('/signin')
}

export default function Index() {
  return null
}
