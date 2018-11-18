export const rightPaneStyles = {
   root: {
     flexGrow:1,
     backgroundColor: 'white'
   },
   unassigned: {
     backgroundColor: 'rgb(232, 251, 242)',
     height:'110px',
     fontSize:'1.7rem',
     fontWeight: 600,
     position:'relative'
   },
   tbd: {
     backgroundColor: 'rgb(184, 239, 213)',
     height:'110px',
     fontSize:'1.7rem',
     fontWeight: 600,
     position:'relative'
   },
   completed: {
     backgroundColor: 'rgb(85, 220, 156)',
     height:'110px',
     fontSize:'1.7rem',
     fontWeight: 600,
     position:'relative'
   },
   checkBox: {
     position:'absolute',
     top:-8,
     right:-8
   },
   gift: {
     position: 'absolute',
     top: 5,
     right: 5
   },
   userInfo: {
     backgroundColor: 'rgb(94, 111, 130)',
     color:'white',
   },
   image: {
     borderRadius: '50%',
     border: '10px solid green',
     marginTop: '1.5rem',
   },
   info: {
     margin:'.3rem',
     fontSize: '1.5rem',
     fontWeight:500
   },
   button: {
     fontSize:'1.2rem',
     borderRadius: '5px',
     boxShadow: '1px 3px 5px #0c6310',
     cursor:'pointer',
     outline: 'none',
     color:'white',
     backgroundColor:'rgb(85, 220, 156)',
     border:'none',
     padding:'10px',
     transition: '0.3s',
     textShadow: '2px 2px 4px #000000',
     width:'40%',
     height:'100%',
     letterSpacing:'3px',
     '&:hover': {
       backgroundColor:'#0a4f1a',
       transform:'translateY(.5vh)'
     }
   },
   input: {
    color: 'white',
    fontSize: '1.1rem',
    transition: '1s',
  }
};
