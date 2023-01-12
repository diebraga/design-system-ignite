import { styled } from './styles'

const Button = styled('button', {
  backgroundColor: '$black',
  borderRadius: '$full',
  fontSize: 'large',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: '',
  },
})

export const App = () => {
  return <Button>HI</Button>
}
