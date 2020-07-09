//faker.js
//PROPS

import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

const App = ()=> {
    return(
        <div className="ui container comments">
            <ApprovalCard >
                <h4>Warning!</h4>
                <div>Are you sure?</div>
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetails author="Sam" timeAgo="Today 4:00 PM" comment="Nice blog" authorImage={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetails author="Menna" timeAgo="Yesterday 9:00 AM" comment="Yaaaay!" authorImage={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard >
                 <CommentDetails author="Alex" timeAgo="Monday 10:00 PM" comment="Great" authorImage={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));