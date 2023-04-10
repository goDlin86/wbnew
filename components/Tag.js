import { styled } from '@nextui-org/react'

export const Tag = styled('button', {
  // reset button styles
  background: 'transparent',
  border: 'none',
  padding: '7px',
  margin: 0,
  // styles
  margin: '0 5px',
  dflex: 'center',
  bg: '$primary',
  borderRadius: '15px',
  cursor: 'pointer',
  transition: 'opacity 0.25s ease 0s, transform 0.25s ease 0s',
  '&:hover': {
    opacity: 0.8
  },
  '&:active': {  
    transform: 'scale(0.9)'
  }
})