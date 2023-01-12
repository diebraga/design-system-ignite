import { styled } from './styles'

const Button = styled('button', {
  backgroundColor: '',
  borderRadius: '',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: '',
  },
})

export const App = () => {
  return <Button>HI</Button>
}
