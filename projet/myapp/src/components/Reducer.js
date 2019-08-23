const initialState = { user: [{ name: 'GERMAIN' }] }

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHOOSE_USER':
      return {
        user: [state.user, action.name],
      };
    case 'ADD_USER':
        return {
        user: [...state.user, action.name],
        };
    case 'DELETE_USER':
        return {
        user: state.user.filter(p => p.name !== action.name.name),
        };
    default:
      return state;
  }
}

export function chooseUser(name) {
    return {
      type: 'CHOOSE_USER',
      name,
    };
  }


export function addUser(name) {
    return {
      type: 'ADD_USER',
      name,
    };
  }
  
  export function deleteUser(name) {
    return {
      type: 'DELETE_USER',
      name,
    };
  }