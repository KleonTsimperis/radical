export const todoFormStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  label: {
    color: 'rgb(11, 45, 73)',
    display: 'block',
    padding: '2px 0',
    fontSize: '.7rem'
  },
  title: {
    color: 'rgb(11, 45, 73)',
    fontWeight: 700,
  },
  comment: {
    textAlign: 'left',
    marginTop: '1rem',
    marginBottom: '.5rem',
    fontSize: '.8rem',
  },
  button: {
    width: '100%',
    backgroundColor: 'rgb(85, 220, 156)',
    borderRadius:'15px',
    height: '2rem',
    color: '#fff',
    marginTop: '1rem',
    borderWidth: 0,
    fontWeight: 600,
    cursor: 'pointer',
    '&:focus': {
      outline: 'none'
    },
    '&:active': {
      outline: 'none'
    }
  }
});
