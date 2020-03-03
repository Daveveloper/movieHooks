import React, {useState} from 'react';
import {Container, Typography, Card, Grid, TextField, Button} from '@material-ui/core';
import styles from './style';
import {MovieIcon} from './../../icons';

export default ({history}) => {

  const classes = styles();
  const [search, setSearch] = useState('');

  const handleChangeSearch = (e) => {
    let search = e.target.value;
    setSearch(search);
  }

  const handleClearSearch = () => {
    setSearch('');
  }

  const handleSearch = () => {
    history.push(`/results?movieName=${search}`);
  };

  return (
    <Container className={classes.container} >
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <MovieIcon className={classes.movieIcon}/>
          </Grid>
          <Grid>
            <Typography className={classes.title}>Movie finder</Typography>
          </Grid>
        </Grid>
        <TextField value={search} placeholder="Search..." onChange={handleChangeSearch} className={classes.textFieldSearch}/>
        <Grid className={classes.buttonsContainer}>
          <Button variant="outlined" onClick={handleClearSearch}>Clear</Button>
          <Button variant="contained" color="primary" onClick={handleSearch} className={classes.searchButton}>Search</Button>
        </Grid>
      </Card>
    </Container>
  );
};


