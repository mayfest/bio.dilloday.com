import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin: 32px 0;

  * {
    box-sizing: border-box;
  }
`;

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.08,
    },
  },
};

export default function Links({ children }: { children: React.ReactNode }) {
  return (
    <Container initial="hidden" animate="visible" variants={variants}>
      {children}
    </Container>
  );
}
