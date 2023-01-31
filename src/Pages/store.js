import { configureStore, createSlice } from "@reduxjs/toolkit";




const cart = createSlice({
  name: 'cart',
  initialState: [
    {
      id: 'prod-01',
      img: process.env.PUBLIC_URL+'/images/box.png',
      imgName: "box_01",
      gradient: "to top, #3A7EC2, #E2E5CB",
      textColor: "#EF63E1",
      textShadow: "rgba(205, 212, 239, 0.25) 1px 0 10px",
      fontFamily: "Spoqa Han Sans Neo Bold",
      name: 'Epic Box',
      price: 2400,
      totalPrice: 2400,
      probability: [10, 15, 20, 20, 20, 15],
      count: 1
    },
    {
      id: 'prod-02',
      img: process.env.PUBLIC_URL+'/images/box.png',
      imgName: "box_02",
      gradient: "to top, #6D6B4D, #E5E9DB",
      textColor: "#F9DCB0",
      textShadow: "rgba(184, 127, 233, 0.5) 1px 0 10px",
      fontFamily: "Spoqa Han Sans Neo Bold",
      name: 'Legend Box',
      price: 1200,
      totalPrice: 1200,
      probability: [3, 10, 15, 15, 15, 42],
      count: 1
    }
  ],
  reducers: {
    addCount(state, action) {
      const index = state.findIndex((i) => {return i.id === action.payload})
      state[index].count++
    },
    subCount(state, action) {
      const index = state.findIndex((i) => {return i.id === action.payload})
      if(state[index].count > 1) {
        state[index].count--
      }
    },
    deleteItem(state, action) {
      const index = state.findIndex((i) => {return i.id === action.payload})
      state.splice(index, 1)
    },
    calulateTotalPrice(state, action) {
      const index = state.findIndex((i) => {return i.id === action.payload})
      state[index].totalPrice = state[index].price * state[index].count
    },
    addItem(state, action) {
      const index = state.findIndex((i) => {return i.id === action.payload.id})
      if (index > -1 ) {
        state[index].count++
      } else {
        state.push(action.payload)
      }      
    }
  }
})

export const { addCount, subCount, deleteItem, calulateTotalPrice, addItem } = cart.actions

export default configureStore({
  reducer: {
    cart: cart.reducer
  }
})