import React from 'react';
import './input.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import newPost from '../../../store' ;
import CoachAvatar from '../../../components/assets/the-coach.jpg';
import MickeyPhoto from '../../../components/assets/mickey.jpg'
import RayPhoto from '../../../components/assets/raymond.jpg'
import FletcherPhoto from '../../../components/assets/fletcher.jpg'
import RosalindPhoto from '../../../components/assets/rosalind.jpg'
import DryEyePhoto from '../../../components/assets/dry-eye.jpg'

const Mickey = {
    name: 'Mickey Pearson',
    photo: MickeyPhoto,
    nickname: '@theboss'
}

const Ray = {
    name: 'Raymond Smith',
    photo: RayPhoto,
    nickname: '@Raymond_S'
}

const Coach = {
    name: 'The Coach',
    photo: CoachAvatar,
    nickname: '@I_am_the_coach',
}

const Fletcher = {
    name: 'Fletcher',
    photo: FletcherPhoto,
    nickname: '@Fletchermundo'
}

const Rosalind = {
    name: 'Rosalind Pearson',
    photo: RosalindPhoto,
    nickname: '@Rosalind'
}

const DryEye = {
    name: 'Dry Eye',
    photo: DryEyePhoto,
    nickname: '@Dry-eye'
}

const Input = (props) => {
    const [name, setName] = useState();
    const [photo, setPhoto] = useState();
    const [nickname, setNickname] = useState();
    const [text, setText] = useState();
    const [image, setImage] = useState();

 const AddPost = () => {
     useDispatch(newPost({
    photo: photo,
    name: name,
    nickname: nickname,
    text: text,
    image: image
     }))
 }

 const chooseAuthor = (userinput) => {
     if(userinput === 'Mickey Pearson') {
     setNickname(Mickey.nickname)
     setPhoto(Mickey.photo)
    } else if(userinput === 'Raymond Smith') {
     setNickname(Ray.nickname)
     setPhoto(Ray.photo)
    } else if(userinput === 'The Coach') {
        setNickname(Coach.nickname)
        setPhoto(Coach.photo)
       } else if(userinput === 'Fletcher') {
        setNickname(Fletcher.nickname)
        setPhoto(Fletcher.photo)
       } else if(userinput === 'Rosalind Pearson') {
        setNickname(Rosalind.nickname)
        setPhoto(Rosalind.photo)
       } else if(userinput === 'Dry Eye') {
        setNickname(DryEye.nickname)
        setPhoto(DryEye.photo)
       } else return null;
 }
 return (
     <form className='input-form'>
         <div className='input-box'>
         <select className='author-choice' value={name} onChange={event => {setName(event.target.value);{chooseAuthor(event.target.value)}}}>
                        <option value={Mickey.name}>Mickey Pearson</option>
                        <option value= {Ray.name} selected>Raymond Smith</option>
                        <option value= {Coach.name}>Coach</option>
                        <option value= {Fletcher.name}>Fletcher</option>
                        <option value= {Rosalind.name}>Rosalind</option>
                        <option value= {DryEye.name}>Dry Eye</option>
                    </select>
                    <input className='link-input' type="text" placeholder='Enter the image link here' 
                    onChange={event => {setImage(event.target.value)}}/>
                    <textarea className="message-input" placeholder="Write your message here..." cols="30" rows="7"
                    onChange={event => {setText(event.target.value)}}></textarea>
         </div>
         <div className="button flex">
             <button onClick={AddPost}>Add Post</button>
         </div>
     </form>
 )
}

export default Input;
