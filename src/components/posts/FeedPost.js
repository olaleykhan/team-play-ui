import React from 'react';
import { Container, FlexboxGrid, Col, Panel, Placeholder } from 'rsuite';

function feedPost({ post }) {
    const { Paragraph } = Placeholder;
    // console.log(post)
    return (
        // below is a ternery operator that is not on a single line
        post? <div>
            <Container>
                <FlexboxGrid justify="center" >
                    <FlexboxGrid.Item className="" componentClass={Col} colspan={20} md={12} >
                        <Panel header={post.title} bordered color="green">

                            <p>{post.article}</p>
                            <p> posted by {post.authorUserName} </p>
                            <p>Created at {post.createdAt.seconds}</p>
                            <Paragraph />
                        </Panel>
                    </FlexboxGrid.Item>
                </FlexboxGrid>

            </Container>

        </div>:null
    )
}

export default feedPost
