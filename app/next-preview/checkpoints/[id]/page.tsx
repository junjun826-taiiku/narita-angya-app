import Pagee from './pagee'

type PageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { id } = await params
  return <Pagee id={id} />
}

