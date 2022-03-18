import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAnnonce } from '../redux/actions/User'
import { Spinner } from "react-bootstrap";

function ListAnnonce() {
    const dispatch=useDispatch()
    const annonce=useSelector((state)=>state.userReducer.user)
    console.log(annonce)
    const load=useSelector((state)=>state.userReducer.load)
    useEffect(() => {
      dispatch(getAnnonce())
    }, [dispatch])
    
  return (
    <div>
        {/* hahahahah */}
      {load?<Spinner animation="border" />: annonce.map((el)=> <h1> {el.annoncementOwner}</h1>)}
    </div>
  )
}

export default ListAnnonce