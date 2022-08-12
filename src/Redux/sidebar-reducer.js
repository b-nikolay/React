
let initialState = {
  users: [
    {
      name: 'Mike',
      src: 'https://images.unsplash.com/photo-1658225595905-7bd75d10a265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Andry',
      src: 'https://images.unsplash.com/photo-1657299156568-c94580e20fb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Alex',
      src: 'https://images.unsplash.com/photo-1658137377207-c9bea7240457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
  ]
}

const  sidebarReducer =  (state = initialState) => {

  return state; 
} 

export default sidebarReducer;