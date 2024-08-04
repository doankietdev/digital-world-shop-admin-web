import { DocumentTitle, Error } from '~/components'

function PageNotFound() {
  return (
    <>
      <DocumentTitle title="Page Not Found" />
      <Error code={404} title="Page Not Found" />
    </>
  )
}

export default PageNotFound
