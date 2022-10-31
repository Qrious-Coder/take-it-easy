import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
// import { getItemList } from '../../_actions'
import { ADD_NEW_ITEM } from '../../_actions'


const ItemListPage = () => {
  const dispatch = useDispatch()
  const [formData, setFormData]  = useState({
    type:'',
    itemName:'',
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  //* ------------------ fetch ***/
  const Add = (e, formData) => {
    e.preventDefault()
   
    // dispatch( getItemList(formData) )
    dispatch({
      type: ADD_NEW_ITEM,
      payload: {type: formData.type, itemName: formData.itemName}
    })
  }

  return (
    <>
      <form onSubmit={ e => Add(e)}>
        <div>
          <label>Item Type</label>
            <input
              name='type' 
              value={ formData.type }
              placeholder='Enter item type...'
              onChange = { e => handleChange(e)} 
            />
        </div>
        <div>
          <label>item name</label>
            <input
              name='itemName' 
              value={ formData.itemName }
              placeholder='Enter item name... '
              onChange = { e => handleChange(e)} 
            />
        </div>
        <button type='submit' >ADD NEW ITEM</button>
      </form>


    </>
  )
}

export default ItemListPage