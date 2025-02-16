import styled from 'styled-components';
import { LinkData } from '../types';
import { motion } from 'framer-motion';

const Container = styled(motion.a)`
  display: block;
  border: 2px solid ${({ theme }) => theme.linkBackground};
  background: ${({ theme }) => theme.linkBackground};
  color: ${({ theme }) => theme.linkForeground};
  border-radius: 16px;
  width: 100%;
  text-decoration: none;
  transition:
    background-color 150ms ease-in-out,
    color 150ms ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.linkBackgroundHover};
    color: ${({ theme }) => theme.linkForegroundHover};
  }
`;

const Text = styled.p`
  font-weight: 800;
  font-size: 18px;
`;

const variants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Link({ title, url }: LinkData) {
  return (
    <Container href={url} target="_blank" rel="noreferrer" variants={variants}>
      <Text>{title}</Text>
    </Container>
  );
}
