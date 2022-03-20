import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listAnnouncements } from '../redux/actions/announcement'
import { Spinner } from "react-bootstrap";

function ListAnnonce() {
  const dispatch = useDispatch()
  const announcements = useSelector((state) => state.announcementReducer.announcements)
  const loaded = useSelector((state) => state.announcementReducer.loaded)

  useEffect(() => {
    dispatch(listAnnouncements())
  }, [])

  return (
    <div>
      {loaded ? announcements.map((el) => <h1> {el.annoncementOwner}</h1>) : <Spinner animation="border" />}
    </div>
  )
}

export default ListAnnonce
