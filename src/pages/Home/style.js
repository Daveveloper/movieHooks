import {makeStyles} from '@material-ui/styles';


const centeredObj = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export default makeStyles({
  container : {
    ...centeredObj,
    height: '100vh',
    flexDirection: 'column',
  },
  cardContainer: {
    ...centeredObj,
    flexDirection: 'column',
    width: 400,
    height: 200,
    padding: '2rem'
  },
  titleGridContainer: {
    ...centeredObj
  },
  title: {
    fontSize: '3rem'
  },
  textFieldSearch: {
    width: '90%'
  },
  buttonsContainer: {
    marginTop: '1rem'
  },
  searchButton: {
    marginLeft: '.5rem'
  },
  movieIcon: {
    fontSize: '4rem'
  }
})
