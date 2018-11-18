import * as ACTION from '../actions/actionTypes';

const mergeUsersById = (a1,a2) =>
    a1.map(itm =>
  ({ ...a2.find((item) =>
  (item.userId === itm.userId) && item), ...itm }));

const validate = value => {
  if(value.length===0 || value.trim()===''){
    return true;
  } else return false
}


const initialState = {
  todos:[],
  users:[],
  usersTodos:[],
  isLoading:false,
  searchTerm:'',
  textTerm:'',
  snackbarOpen:false,
  createTodoForm:false,
  updateTodoForm:false,
  formError:false,
  error:null
}

const mainReducer = ( state = initialState, action) => {
  switch (action.type){
    case ACTION.ISLOADING:
      return state = {
        ...state,
        isLoading:true
      }
    case ACTION.FETCH_TODOS:
      const arrayFetched = action.payload;
      const newArr = arrayFetched.slice();
      const arrayWithUnassignedTodo = newArr.map(item => {
        if (item.id === 1){
          return{
            ...item,
            [action.propuserId]:null
          }
        }
        return item
      })
      return state = {
        ...state,
        todos:arrayWithUnassignedTodo,
      }
    case ACTION.FETCH_USERS:
      return state = {
        ...state,
        users:action.payload
      }
    case ACTION.MERGE:{
      const todosCopy = state.todos.slice();
      const usersCopy = state.users.slice();
      return state = {
        ...state,
        usersTodos: mergeUsersById(todosCopy,usersCopy),
        isLoading:false
      }
    }
    case ACTION.ISSELECTED:
    return state = {
      ...state,
      users: state.users.map( item => {
        if (item.userId === action.payload){
          return {
            ...item,
            [action.propIsSelected]:true
          }
        } else if (item.userId !== action.payload){
          return {
            ...item,
            [action.propIsSelected]:false
          }
        }
        return item
      }),
      usersTodos: state.usersTodos.map( item => {
        if (item.userId === action.payload){
          return {
            ...item,
            [action.propIsSelected]:true
          }
        } else if (item.userId !== action.payload){
          return {
            ...item,
            [action.propIsSelected]:false,
            [action.propToggling]:false
          }
        }
        return item
      }
    )}
    case ACTION.TOGGLETODO:
    return state = {
      ...state,
      updateTodoForm: !state.updateTodoForm,
      formError: false,
      usersTodos: state.usersTodos.map( item => {
        if (item.id === action.payload){
          return {
            ...item,
            [action.propToggling]: !item[action.propToggling],
            [action.propisEditingUser]: false
          }
        }
        return {
          ...item,
          [action.propToggling]: false,
          [action.propisEditingUser]: false
        }
      })
    }
    case ACTION.HANDLESEARCHTERM:
      return state = {
        ...state,
        searchTerm:action.payload
      }
    case ACTION.HANDLETEXTTERM:
      return state = {
        ...state,
        textTerm:action.payload,
      }
    case ACTION.FORMSUBMIT:
    const error = validate(state.textTerm);
      if(!error){
        return state = {
          ...state,
          usersTodos: state.usersTodos.map( item => {
            if (item.id === action.payload){
              return {
                ...item,
                comment: state.textTerm,
                [action.propCompleted]: true,
                isToggling: false
              }
            }
            return item
          }),
          textTerm:'',
          snackbarOpen:true
        }
      } else {
        return state = {
          ...state,
          formError:true
        }
      }

    case ACTION.COMPLETEDWITHOUTCOMMENT:
      const copyUsersTodos = state.usersTodos.slice();
      const index = state.usersTodos.findIndex(item=>item.isSelected);
      const activeUser = copyUsersTodos[index];

      return state = {
        ...state,
        usersTodos: state.usersTodos.map( item => {
          if (item.id === action.payload){
            // Below this line, I'm testing if the selected todo is unassigned.
            // if unassigned I'm passing a copied object of who is currently the selected user
            // and updating the properties of the original todo
            if (item.userId === null){
              return{
                ...activeUser,
                [action.propTitle]:item.title,
                [action.propCompleted]: !item[action.propCompleted],
                [action.propId]:item.id
              }
            }

            return{
              ...item,
              [action.propCompleted]: !item[action.propCompleted],
            }
          }
          return item
        })
      }
    case ACTION.HANDLECLOSESNACKBAR:
    console.log('here')
      return state = {
        ...state,
        snackbarOpen:false
      }
    case ACTION.CLEARFIELD:
      return state = {
        ...state,
        searchTerm:''
      }
    case ACTION.ADDTODO:
      return state = {
        ...state,
        updateTodoForm: false,
        createTodoForm: !state.createTodoForm,
        formError: false,
        usersTodos: state.usersTodos.map(item=>{
          if(item.isToggling === true){
            return {
              ...item,
              [action.propIsToggling]:false
            }
          }
          if(item.isEditingUser === true){
            return {
              ...item,
              [action.propisEditingUser]:false
            }
          }
          return item
        }),
        textTerm:''
      }

    case ACTION.SUBMITTODO:
     const err = validate(state.textTerm);
     const row = state.usersTodos.slice();
     const todo = {
       userId:row[action.payload].userId,
       name:row[action.payload].name,
       nick:row[action.payload].nick,
       isSelected:true,
       isToggling:false,
       comment:'',
       image:row[action.payload].image,
       phone:row[action.payload].phone,
       title:state.textTerm,
       completed:false,
       email:row[action.payload].email,
       id:row.length + 1
     };
     if(!err){
       return state = {
         ...state,
         usersTodos: [...state.usersTodos.slice(0,action.payload), todo, ...state.usersTodos.slice(action.payload)],
         createTodoForm:false,
         snackbarOpen:true,
         formError:false,
         textTerm:''
       }
     } else {
       return state = {
         ...state,
         formError:true
       }
     }

    case ACTION.ISEDITINGUSER:
      return state = {
        ...state,
        usersTodos: state.usersTodos.map( user => {
          if(user.isSelected){
            return {
              ...user,
              [action.propisEditingUser]:!user[action.propisEditingUser],
            }
          } else {
            return {
              ...user,
              [action.propisEditingUser]:false,
              [action.propisSelected]: false
            }
          }
        })
      }

    case ACTION.HANDLEUSEREDITS:
    const user = state.usersTodos.slice();
    const userId = user[action.user].userId;
      return state = {
        ...state,
        usersTodos: state.usersTodos.map( user => {
          if(user.isEditingUser){
            return {
              ...user,
              name:action.payload
            }
          }
          return user
        }),
        users:state.users.map( user => {
          if(user.userId === userId){
            return{
              ...user,
              name: action.payload
            }
          }
          return user
        })
      }

    case ACTION.ERROR:
      return state = {
        ...state,
        error:action.payload
      }
    default:
      return state
  }
}

export default mainReducer;
