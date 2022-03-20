import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Spinner } from 'react-bootstrap'
import { getCurrentUser } from '../../redux/actions/User';
function Profile() {
  const dispatch = useDispatch()
  const isLoaded = useSelector(state => state.userReducer.load);
  const isAuthenticated = useSelector(state => state.userReducer.isAuth);
  const user = useSelector(state => state.userReducer.user);

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [])

  return (
    <div >
      {!isLoaded ? <Spinner animation="border" variant="primary" /> :
        <div style={{ textAlign: "center" }}>
          <h1 style={{
            fontStyle: "italic",
            marginTop: "20px",
            color: "black",
          }}> Profile Of {user.name}</h1>
          <h4> NAME: {user.name}</h4>
          <h4> EMAIL: {user.email}</h4>
          <h4> ADRESSE: {user.adresse}</h4>

        </div>}
    </div>
  )
}

export default Profile
