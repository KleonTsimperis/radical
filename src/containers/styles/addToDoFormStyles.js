export const addToDoFormStyles = theme => ({
  root: {
    flexGrow: 1,
    position:'absolute',
    bottom:'20%',
    right:'20%',
    left:'20%',
    zIndex:'2000'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:'100%',
    height:'50%',
    backgroundColor: 'rgb(184, 239, 213)',
  },
  textarea: {
    width:'90%',
    borderRadius:'5px',
    backgroundColor: '#dde6d3',
    '&:focus':{
      outline:'none'
    }
  },
  submitTodo: {
    fontSize:'1.3rem',
    margin:'5px',
    marginTop:'20px',
    borderRadius: '5px',
    boxShadow: '1px 3px 5px #0c6310',
    cursor:'pointer',
    outline: 'none',
    color:'white',
    backgroundColor:'rgb(85, 220, 156)',
    marginRight: 'auto',
    marginLeft: 0,
    border:'none',
    padding:'10px',
    transition: '0.3s',
    textShadow: '2px 2px 4px #000000',
    width:'90%',
    height:'100%',
    letterSpacing:'3px',
    '&:hover': {
      backgroundColor:'#0a4f1a',
      transform:'translateY(.5vh)'
    }
  }
});
