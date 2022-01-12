import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    questionContainer: {
        textAlign: 'center',
        padding: '10px',
        borderRadius: '10px',
        backgroundColor: 'rgba(237, 250, 253, 0.6)',
        boxShadow: '2px 5px 10px 0px black',
        maxWidth: '70%'
    },
    questionNo: {
        fontSize: '1.1rem',
        fontWeight: '100',
        margin: '10px'
    },
    question: {
        fontSize: '1.2rem',
        fontWeight: '900',
        margin: '20px 0'
    },
    answerButtons: {
        width: '100%',
        margin: '10px 0',
        padding: '10px',
        borderRadius: '10px',
        border: '1px solid rgb(230, 230, 230)',
        backgroundColor: 'rgb(139, 224, 243)',
        cursor: 'pointer',
        fontWeight: '500',
        fontSize: '0.9rem',
        background: 'linear-gradient(to left, rgb(160, 238, 253) 50%, rgb(240, 240, 240) 50%)',
        backgroundSize: '210% 100%',
        backgroundPosition: 'right bottom',
        '&:hover': {
            backgroundPosition: 'left',
            transition: 'all 0.4s ease'
        }
    },
    correctAnswer: {
        background: 'rgb(59, 197, 40)',
        color: 'rgb(240, 240, 240)'
    },
    wrongAnswer: {
        background: 'rgb(160, 43, 43)',
        color: 'rgb(240, 240, 240)'
    },
    correctText: {
        fontFamily: 'Roboto Condensed',
        fontSize: '1.5rem',
        margin: '5px 0',
        color: '#0a8153',
        fontWeight: '400'

    },
    wrongText: {
        fontFamily: 'Roboto Condensed',
        color: '#b11d24',
        fontWeight: '400',
        fontSize: '1.5rem',
        margin: '5px 0',
    },
    '@media (max-width: 992px)': {
        question: {
            fontSize: '1rem'
        },
        answerButtons: {
            fontSize: '0.8rem',
            margin: '5px 0'
        },
        questionNo: {
            fontSize: '1rem'
        },
        questionContainer: {
            maxWidth: '90%'
        },
        correctText: {
            fontSize: '1.2rem'
        },
        wrongText: {
            fontSize: '1.2rem'
        }
    }
})