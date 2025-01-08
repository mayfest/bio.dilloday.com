import styled from 'styled-components';
import { mobile } from '../theme';
import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../app';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  padding: 8px;
  transition: height 200ms;
`;

const Text = styled.div`
  padding: 12px;
`;

const Title = styled.p`
  margin: 0;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;

  ${mobile} {
    text-align: center;
  }
`;

const Description = styled.p`
  text-align: left;
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.footerText};
  ${mobile} {
    text-align: center;
  }
`;

const StatusText = styled.p`
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 8px 0;

  ${mobile} {
    flex-direction: column;
    padding: 0 8px;
    box-sizing: border-box;
  }
`;

const Input = styled.input`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: none;
  outline: none;
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 8px;
  flex: 1;
  margin: 0 8px;
  font-weight: 500;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: ${({ theme }) => theme.footerText};
  }

  &:hover {
    outline: 2px solid ${({ theme }) => theme.linkBackgroundHover};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.linkBackground};
  }

  ${mobile} {
    margin: 8px;
  }
`;

const Email = styled(Input)`
  flex: 75%;
`;

const Submit = styled.button`
  margin: 0 8px;
  padding: 12px 16px;
  background: ${({ theme }) => theme.linkBackground};
  border: 2px solid ${({ theme }) => theme.linkBackground};
  color: ${({ theme }) => theme.linkForeground};
  border-radius: 8px;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  width: 100%;
  box-sizing: border-box;
  flex: 25%;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: ${({ theme }) => theme.linkBackgroundHover};
    color: ${({ theme }) => theme.linkForegroundHover};
  }

  ${mobile} {
    margin: 8px;
  }
`;

export default function MailingList() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const handleSubmit = () => {
    setState('submitting');
    setDoc(doc(db, 'members', email), {
      firstName,
      lastName,
      email,
      createdAt: new Date(),
    })
      .then(() => setState('success'))
      .catch((error) => {
        console.error(error);
        setState('error');
      });
  };

  return (
    <Container
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Text>
        <Title>Join the Mayfest Productions mailing list!</Title>
        <Description>
          Don't miss out on the latest Dillo Day news and exclusive free stuff.
        </Description>
      </Text>
      {state === 'success' ? (
        <StatusText>
          You've been added to the mailing list. Thanks for joining!
        </StatusText>
      ) : state === 'error' ? (
        <StatusText>
          Something went wrong when adding you to the mailing list.
        </StatusText>
      ) : (
        <>
          <Row>
            <Input
              type="text"
              placeholder="First Name"
              autoComplete="given-name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Last Name"
              autoComplete="family-name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Row>
          <Row>
            <Email
              type="email"
              placeholder="Email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Submit type="submit" disabled={state === 'submitting'}>
              {state === 'submitting' ? '...' : 'Subscribe'}
            </Submit>
          </Row>
        </>
      )}
    </Container>
  );
}
