export const centerPaneStyles = {
   root: {
     flexGrow:1,
     height:'100vh',
     overflowY:'scroll',
     '&::-webkit-scrollbar': {
       display:'none'
     },
     overflowX:'hidden',
   },
   container:{
     marginBottom:'17.5vh'
   },
   todo: {
     height: '70px',
     backgroundColor: 'rgb(242, 255, 248)',
     borderBottom: '1px solid #e6e6e6',
     padding: '1rem',
     color: 'rgb(11, 45, 73)'
   },
   title: {
     marginRight:'auto'
   },
   checkBox: {
     paddingRight: '1rem'
   },
   chevron: {
     cursor: 'pointer'
   },
   chevronSelected: {
     cursor: 'pointer',
     backgroundColor: 'white'
   }
};
