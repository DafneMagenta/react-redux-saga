import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getUsers} from '../redux/actions/users';
import Card from './CardComponent'

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const loading = useSelector(state => state.users.loading)
    const error = useSelector(state => state.users.error)

    useEffect(() => {
        if(!users.length && !error) dispatch(getUsers())
    }, [dispatch, error, users])
    
    return (
        <>
            {users.loading && <p>Loading...</p>}
            {users.length === 0 && !users.loading && <p>No users available</p>}
            {error && !loading && <p>{error}</p>}
            {users.length > 0 && users.map((user) => (
                <Card key={user.id} user={user}></Card>
            ))}
        </>
    )
}

export default Users