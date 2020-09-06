import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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

const ViewComment = () => {
   

    const{commentId} = useParams();

    const [comment,setComment] = useState({});
    useEffect( ()=> {
        fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then(res=>res.json())
        .then(data=>setComment(data))
        
    },[]);
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const viewCommentStyle = {
        padding:'50px',
        border:'5px solid white',
        backgroundColor:'rgb(218, 222, 224)',
    }
    return (
        <div style={viewCommentStyle}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Comment Details:
                    </Typography>
                    <Typography variant="h5" component="h2">
                    Id : {comment.id}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    Post Id : {comment.postId}
                    </Typography>
                    <Typography variant="body2" component="p">
                    Name: {comment.name}
                    </Typography>
                    <br/>
                    <Typography variant="body2" component="p">
                    Email: {comment.email}
                    </Typography>
                    <br/>
                    <Typography variant="body2" component="p">
                    Body: {comment.body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/`}><Button variant="contained" color="secondary">
                      Back 
                    </Button></Link>
                </CardActions>
                
            </Card>
        </div>
    );
};

export default ViewComment;