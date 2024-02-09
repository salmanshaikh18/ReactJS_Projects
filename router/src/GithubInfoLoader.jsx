import React from 'react'

const GithubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/salmanshaikh18')
    return response.json()
}

export default GithubInfoLoader