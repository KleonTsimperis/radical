export const searchBarStyles = {
  input: {
    borderRadius: '8px',
    height: '36px',
    width: '100%',
    backgroundColor: 'rgb(86, 105, 125)',
    borderWidth: '1px',
    textIndent:'20%',
    fontSize:'1.4rem',
    '&:focus': {
      outline: 'none'
    },
    boxShadow: 'rgba(0, 0, 0, 0.5) 1px 1px 1px 0px inset, rgba(0, 0, 0, 0.1) 1px 1px 1px 0px inset, rgba(0, 0, 0, 0.1) 1px 1px 1px 0px inset'
  },
  div: {
    position: 'relative',
  },
  search: {
    position: 'absolute',
    left:10,
    top:6,
    cursor: 'pointer'
  },
  cancel: {
    position: 'absolute',
    right:10,
    top:6,
    cursor: 'pointer'
  }
};
