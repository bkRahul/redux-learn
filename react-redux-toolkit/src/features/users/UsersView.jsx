import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './usersSlice'

export const UsersView = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.users)

  return (
    <>
      <h2>Users -</h2>
      <button onClick={() => dispatch(fetchUsers())}>Fetch Users</button>
      <TableView data={data.users} loading={data.loading} error={data.error} />
    </>
  )
}

const TableView = ({ data, loading, error }) => {
  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  if (data.length)
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>
            <b>ID</b>
          </p>
          <p>
            <b>Name</b>
          </p>
          <p>
            <b>Email</b>
          </p>
        </div>
        {data.map(({ id, name, email }) => (
          <div
            style={{ display: 'flex', justifyContent: 'space-between' }}
            key={id}
          >
            <p>{id}</p>
            <p>{name}</p>
            <p>{email}</p>
          </div>
        ))}
      </>
    )
}
