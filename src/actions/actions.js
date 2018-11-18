import * as ACTION from './actionTypes'

export const fetchTodos = value => ({
  type: ACTION.FETCH_TODOS,
  payload: value,
  propuserId: 'userId'
});

export const fetchUsers = value => ({
  type: ACTION.FETCH_USERS,
  payload: value
});

export const mergeUsersTodos = () => ({
  type: ACTION.MERGE
});

export const handleIsSelected = value => dispatch =>
  dispatch({
    type: ACTION.ISSELECTED,
    payload: value,
    propIsSelected: 'isSelected',
    propToggling: 'isToggling'
  });

export const toggleTodo = value => dispatch =>
  dispatch({
    type: ACTION.TOGGLETODO,
    payload: value,
    propToggling: 'isToggling',
    propisEditingUser: 'isEditingUser'

  });

export const handleSearchTerm = value => dispatch =>
    dispatch({
      type: ACTION.HANDLESEARCHTERM,
      payload: value
    })

export const handleTextTerm = value => dispatch =>
    dispatch({
      type: ACTION.HANDLETEXTTERM,
      payload: value
    })

export const formSubmit = (value,e) => dispatch => {
  e.preventDefault();
  dispatch({
    type: ACTION.FORMSUBMIT,
    propCompleted: 'completed',
    payload: value
  })
}

export const handleCloseSnackBar = () => dispatch =>
  dispatch({
    type: ACTION.HANDLECLOSESNACKBAR,
  })


export const clearField = () => dispatch =>
  dispatch({
    type: ACTION.CLEARFIELD
  })

export const addTodo = () => dispatch =>
  dispatch({
    type: ACTION.ADDTODO,
    propIsToggling: 'isToggling',
    propisEditingUser: 'isEditingUser'
  })

export const submitTodo = value => dispatch =>
  dispatch({
    type: ACTION.SUBMITTODO,
    payload: value
  })

export const completedWithoutComment = value => dispatch =>
  dispatch({
    type: ACTION.COMPLETEDWITHOUTCOMMENT,
    payload: value,
    propCompleted: 'completed',
    propTitle: 'title',
    propId: 'id'
  })

export const isEditingUser = () => dispatch =>
  dispatch({
    type: ACTION.ISEDITINGUSER,
    propisEditingUser: 'isEditingUser',
    propisSelected: 'isSelected'
  })

export const handleUserEdits = (value,user) => dispatch =>
  dispatch({
    type: ACTION.HANDLEUSEREDITS,
    payload: value,
    user
  })

// export const addingComment = value => dispatch =>
//   dispatch({
//     type: ACTION.ADDINGCOMMENT,
//     payload: value
//   })


export const error = value => ({
  type: ACTION.ERROR,
  payload: value
});
