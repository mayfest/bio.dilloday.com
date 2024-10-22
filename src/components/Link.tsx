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
  padding: 16px 24px;
  margin: 0;

  font-family: inherit;
  line-height: 1.5;
  text-align: left;

  transition:
    background-color 150ms ease-in-out,
    color 150ms ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.linkBackgroundHover};
    color: ${({ theme }) => theme.linkForegroundHover};
    text-decoration: none;
  }
`;

const Text = styled.p`
  font-weight: 500;
  margin: 0;
  padding: 0;

  font-size: 1rem;
  line-height: 1.5;
  color: inherit;
  text-align: center;
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
