import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    container: {
      height: '50vh',
      width: '100%',
      position: 'relative',
    },
    bgVideoContainer: {
      width: '100%',
      height: '100vh'
    },
    bgVideo: {
      height: '100%',
      width: '100%',
      objectFit: 'fill'
    },
    contentContainer: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      top: '0',
      left: '0',
      width: '100%'
    },
    title: {
      fontFamily: 'Roboto Condensed',
      fontSize: '2.5rem',
      color: 'rgb(60,60,60)',
      margin: '20px'
    },
    mainButtons: {
      padding: '10px 40px',
      borderRadius: '10px',
      border: '0.5px solid orange',
      background: 'linear-gradient(0deg, rgb(219, 163, 33) 10%, rgb(242, 228, 196))',
      fontWeight: '600',
      cursor: 'pointer',
      margin: '20px'
    },
    score: {
      fontSize: '1.8rem',
      marginBottom: '20px',
      color: '#816b0a'
    },
    finalScore: {
      fontSize: '1.8rem',
      fontWeight: '900',
      margin: '25px',
      color: '#816b0a'
    },
    '@media (max-width: 992px)': {
      title: {
          fontSize: '2rem'
      },
      score: {
        fontSize: '1.5rem'
      }
    },
})