import React, { useState, useEffect } from 'react';
import './ViewPost.css';
import { useParams, Link, useHistory } from 'react-router-dom';
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

const ViewPost = () => {

    const{postId} = useParams();
    const [post,setPost] = useState({});
    useEffect( ()=> {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
        
    },[]);
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const viewPostStyle = {
      padding:'50px',
      border:'5px solid white',
      backgroundColor:'rgb(218, 222, 224)',
    }
    
    return (
        <div style={viewPostStyle} className="viewPost">
            <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Post Details:
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Id : {post.id}
                  </Typography>
                  <br/>
                  <Typography variant="h5" component="h2">
                    User Id: {post.userId}
                    </Typography>
                    <br/>
                    <Typography variant="h5" component="h2">
                    Title: {post.title}
                    </Typography>
                    <br/>
                    <Typography variant="h5" component="h2">
                    Body: {post.body}
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

export default ViewPost;