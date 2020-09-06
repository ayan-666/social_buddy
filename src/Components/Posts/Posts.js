import React from 'react';
import './Posts.css';
import Typography from '@material-ui/core/Typography';
import {useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


const Posts = (props) => {
    
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const {id,title,body} = props.post;
    const history = useHistory();
    const handlePost = () => {
        history.push(`/post/${id}`)
    }
    const handleComment = () => {
      history.push(`/comment/${id}`)
  }
    const postStyle = {
        padding:'50px',
        border:'5px solid white',
        backgroundColor:'rgb(218, 222, 224)',
    }
    return (
        <div style={postStyle}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Id  : {id}
                    </Typography>
                    <br/>
                    <Typography variant="h5" component="h2">
                    Post Title  : {title}
                    </Typography>
                    
                </CardContent>
                <CardActions>
                <Button variant="contained" color="primary" onClick={ () => handlePost(id)}>View Post</Button>
                <br/>
                <Button variant="contained" color="primary" onClick={ () => handleComment(id)}>View All Comment</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Posts;