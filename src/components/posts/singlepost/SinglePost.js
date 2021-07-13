import React from 'react';
import { Container, FlexboxGrid, Col, Panel, Placeholder } from 'rsuite';

function SinglePost({post}) {
    if(post){
        return (
                 post? <div>
            <Container>
                <FlexboxGrid justify="center" >
                    <FlexboxGrid.Item className="" componentClass={Col} colspan={20} md={12} >
                        <Panel header={post.title} shaded >

                            <p>{post.article}</p>
                            <p> posted by {post.authorUserName} </p>
                            <p>Created at {post.createdAt.seconds}</p>
                        </Panel>
                    </FlexboxGrid.Item>
                </FlexboxGrid>

            </Container>

        </div>:null
        )

    } else return <h1 className="container center bg-green-400"> Loading...</h1>
    
}

export default SinglePost
