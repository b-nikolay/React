export const updateObjectInArray = (items, itemId, objPropName, newObject) => {
  return items.map(user => {
    if (user[objPropName] === itemId) {
      return { ...user, ...newObject }
    }
    return user
  })
} 