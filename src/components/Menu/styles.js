import {css} from 'glamor';

const navBarStyle = css({
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    backgroundColor: '#333',
    '& li': {
        float: 'left'
    },
    '& li a': {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none'
    }
})

const style = {
    navBarStyle
}

export default style;