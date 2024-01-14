const cartItems = [
    {id:1, name: 'A', price: 30, quantinty: 2},
    {id:2, name: 'B', price: 10, quantinty: 3},
    {id:3, name: 'C', price: 50, quantinty: 1}
  ]
   
  // const itemDetails = cartItems.map((item) => (item))
  const itemDetails = cartItems.map(({name}) => (name))
   
  console.log(itemDetails)