import {createStore } from 'redux';
import CoachImage from './components/assets/Gentlemen.jpg';
import CoachAvatar from './components/assets/the-coach.jpg';

const posts = [
    {
        name: 'The Coach',
        photo: CoachAvatar,
        nickname: '@I_am_the_coach',
        date: new Date().toLocaleString(),
        text: 'Kids stab, girls shout, boys punch. Grown-ups fight with their heads!',
        image: CoachImage,
    }
]

const initialView = {
   posts: []
}

const reducer = (state = initialView, action) => {
 switch(action.type) {
     case 'add-post':
         return {
             ...state,
             posts
         };
         case 'new-post':
             return {
                 ...state,
                 posts: posts.concat(posts.push(action.payload))
             };
             default: 
             return state;
 }

}

export const loadPost = () => (
    {
        type: 'add-post'
    }
) 

export const newPost = (post) => (
    {
        type: 'new-post',
        payload: post
    }
)

const store = createStore(reducer);

export default store;

