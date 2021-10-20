import { makeStyles } from '@material-ui/core/styles';

export const useButtonStyles = makeStyles({
  root: {
    width: 'fit-content',
    fontSize: '13px',
    lineHeight: '20px',
    color: '#000',
    border: '#999',
    borderRadius: '0.154em',
    borderColor: 'rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)',
    backgroundColor: '#e3e3e3',
    backgroundImage: 'linear-gradient(to bottom, #fff, #e3e3e3',
    backgroundRepeat: 'repeat-x',
    textTransform: 'unset',
    padding: '5px 12px',

    '&:hover': {
      borderColor: '#ec8026',
      backgroundColor: '#e3e3e3',
      backgroundPosition: '0 -15px'
    },

    '&.main-button': {
      borderColor: '#ec8026',
      marginRight: '5px'
    },

    '&.secondary-button': {
      marginLeft: '5px'
    }
  }
});
