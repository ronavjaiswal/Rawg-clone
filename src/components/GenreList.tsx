import useData from '@/hooks/useData'
import useGenres, { Genre } from '@/hooks/useGenres'
import { li, ul } from 'framer-motion/client'
import React from 'react'

const GenreList = () => {
  
   const {data} = useGenres()

    return (
    <ul>
        {data.map(data => <li key = {data.id}>{data.name}</li>)}
    </ul>
  )
}

export default GenreList