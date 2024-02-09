import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)

    if (!user) return <h1>Plese Login!</h1>
    console.log(user)

    return <h1>Welcome {user.username}</h1>
}

export default Profile