export const bottomNavBarStyles = theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: 'rgb(4, 17, 34)',
    height:'8.5vh'
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
    transition:'.8s'
  },
  backdrop: {
    zIndex:'100'
  },
  footer: {
    display: 'block',
    margin: '0 auto',
    paddingTop: '20px'
  }
});
