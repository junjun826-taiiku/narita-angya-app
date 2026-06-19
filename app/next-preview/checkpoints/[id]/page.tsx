import Pagee from './pagee'

type PageProps = {
  params: {
    id: string
  }
}

export default function Page({ params }: PageProps) {
  return <Pagee id={params.id} />
}
