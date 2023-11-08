import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError()
  return (
    <div>
      <h2>Покорнейше прошу простить, но что то пошло не так...</h2>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
