import React from 'react'; // Importing React
import { useContext as useContextFromReact } from 'react'; // Importing useContext from React with a different name
import userContext from '../Context/UserContext'; // Importing userContext from your project

function Profile() {
    const { user } = useContextFromReact(userContext); // Using useContext from React with the new name

        if(!user)return <div>please login</div>

        return <div>Welcome {user.username}</div>
}

export default Profile