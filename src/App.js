
import React, { useState, useEffect } from 'react'
import AppComp from './AppComp'
import { useFetchData } from './lib/api'

export default function App() {
  const [data, isFetched] = useFetchData()
  const [opened, setOpened] = useState(false)
  const [search, setSearch] = useState('')
  const [songs, setSongs] = useState([])
  const [selectedSong, setSelectedSong] = useState('')

  useEffect(() => {
    setSongs([...data])
  }, [data])

  const filterSearch = (str) => {
    const filtered = songs.filter(song => song.song.toLowerCase().includes(str.toLowerCase()))
    setSongs(filtered)
  }
  
  const toggleSelector = (e) => setOpened(!opened)
  const handleSearch = (e) => {
    setSearch(e.target.value)
    e.target.value.length > 3 && filterSearch(e.target.value)
    e.target.value.length <= 3 && setSongs([...data])
  }
  const resetSearch = (e) => {
    setSearch('')
    setSongs([...data])
  }

  const keyHandler = (e) => {
    e.preventDefault()
    let next

    switch(e.code) {
      case "ArrowUp":
        //up case
        next = e.target.previousSibling
        next && next.classList.add('selected')
        next && next.focus()
        next && setSelectedSong(next.innerText)
      break;

      case "ArrowDown":
        //down case
        next = e.target.nextSibling
        next && next.classList.add('selected')
        next && next.focus()
        next && setSelectedSong(next.innerText)
      break;

      case "Tab":
        //tab case
        next = e.target.nextSibling
        next && next.classList.add('selected')
        next && next.focus()
        next && setSelectedSong(next.innerText)
      break;

      case "Escape":
        //escape case
        setOpened(false)
      break;

      default: return; 
    }
  }

  return <AppComp {...{
    opened,
    songs,
    search,
    handleSearch, 
    resetSearch,
    selectedSong,
    isFetched,
    toggleSelector,
    keyHandler,
  }} />
}
