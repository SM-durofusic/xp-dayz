import React from 'react'
import css from './styles';

const HomeBlogPost = (props) => {
    return (
        <div className={css.homeBlogPostStyle}>
            <h1>Naslov</h1>
            <h2>Autor</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste corporis
                tenetur consectetur in labore saepe eligendi velit molestiae, quaerat excepturi?</p>
        </div>
    )
}

export default HomeBlogPost;
