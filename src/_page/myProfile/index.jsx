import React from 'react'
import styles from './styles.module.scss'

const MyProfile = () => {

  return (
    <div className={ styles.profileCtn }>
      <div className={ styles.header }>
        <h2>Welcom, xxx</h2>
        <button type='buttom'>Log Out</button>
      </div>
    </div>
  )
}

export default MyProfile