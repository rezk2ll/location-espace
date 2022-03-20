import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAnnonce } from '../redux/actions/User'
import { Spinner } from "react-bootstrap";

function ListAnnonce() {
    const dispatch=useDispatch()
    const user=useSelector((state)=>state.userReducer.user)
    // console.log(user)
    const load=useSelector((state)=>state.userReducer.load)
    useEffect(() => {
      dispatch(getAnnonce())
    }, [])
    
  return (
    <div>
        {/* hahahahah */}
      {load?<Spinner animation="border" />: user.map((el)=> <h1> {el.annoncementOwner}</h1>)}
    </div>
  )
}

export default ListAnnonce