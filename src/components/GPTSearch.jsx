import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BANNER_IMG } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
          src={BANNER_IMG}
          alt="banner"
        />
      </div>
        <GPTSearchBar/>
        <GPTMovieSuggestions/>
    </div>
  )
}

export default GPTSearch