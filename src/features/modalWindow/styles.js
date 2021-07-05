import styled from 'styled-components';
import { Box } from '@chakra-ui/react';


const StyledModalContent = styled(Box)`
  border: 1px solid #ccc;
  margin: 2.5rem 2rem 2rem;
  height: 20rem;
`

const InputWrapper = styled(Box)`
display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 80%;
  margin: 0 2rem;
`
export { StyledModalContent, InputWrapper }
