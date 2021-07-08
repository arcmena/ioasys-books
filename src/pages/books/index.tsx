import useAuth from 'hooks/useAuth'

export default function Books() {
  const { user } = useAuth()

  return (
    <div>
      <h1>books</h1>
      <p>hello{user?.name}</p>
    </div>
  )
}
