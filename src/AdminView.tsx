import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { FormEvent, useEffect, useState } from 'react';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider, db } from './app';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {
  faRightFromBracket,
  faGripVertical,
  faPlus,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { LinkData } from './types';
import { Reorder, motion } from 'framer-motion';

const SaveButton = styled.button`
  border: none;
  background-color: #d44c54;
  color: #f5efdb;
  padding: 25px 0;
  font-weight: 700;
  font-size: 20px;
  border-radius: 15px;
  transition:
    background-color 150ms ease-in-out,
    color 150ms ease-in-out;
  width: 100%;

  &:hover {
    background-color: #f5efdb;
    color: #d44c54;
    transition:
      background-color 150ms ease-in-out,
      color 150ms ease-in-out;
  }
`;

const AddButton = styled.button`
  border: none;
  background-color: #f8b547;
  color: #f5efdb;
  padding: 25px 0;
  font-weight: 900;
  font-size: 20px;
  border-radius: 15px;
  width: 100px;
  transition:
    background-color 150ms ease-in-out,
    color 150ms ease-in-out;

  &:hover {
    background-color: #f5efdb;
    color: #f8b547;
    transition:
      background-color 150ms ease-in-out,
      color 150ms ease-in-out;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const Icon = styled(FontAwesomeIcon)`
  margin: auto 0;
  font-size: 25px;
  color: #13381f;
`;

const SignInOutText = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #13381f;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f8b547;
  border-radius: 10px;
  gap: 10px;
  width: fit-content;
  height: 50px;
  margin: auto 0;
  padding: 0 15px;
  transform: scale(1);
  transition-timing-function: ease-in-out;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
    transition-timing-function: ease-in-out;
    transition: transform 0.5s;
  }
`;

const TrashContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TrashButton = styled.button`
  border: none;
  border-radius: 0 15px 15px 0;
  background-color: #d44c54;
  font-size: 20px;
  color: #f5efdb;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  transition:
    background-color 150ms ease-in-out,
    color 150ms ease-in-out;

  &:hover {
    background-color: #f5efdb;
    color: #d44c54;
    transition:
      background-color 150ms ease-in-out,
      color 150ms ease-in-out;
  }
`;

const Background = styled.img`
  width: 100%;
  min-height: 240px;
  max-height: 320px;
  object-fit: cover;
  object-position: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 64px 32px;
  box-sizing: border-box;
  position: relative;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 120px;
  margin-bottom: 16px;
  border-radius: 50%;
  position: absolute;
  top: -76px;
  border: 8px solid ${({ theme }) => theme.background};
`;

const StatusText = styled.p`
  opacity: 0.75;
  height: 256px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 2px solid ${({ theme }) => theme.linkBackground};
  background: ${({ theme }) => theme.linkBackground};
  color: ${({ theme }) => theme.linkForeground};
  border-radius: 0 16px 16px 0;
  width: 100%;
  text-decoration: none;
  margin: 20px 0 20px 0;
`;

const Container = styled(motion.div)`
  display: flex;
  background: ${({ theme }) => theme.linkBackground};
  color: ${({ theme }) => theme.linkForeground};
  border-radius: 16px;
  width: 100%;
  text-decoration: none;
  transition:
    background-color 150ms ease-in-out,
    color 150ms ease-in-out;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  margin-right: 20px;

  &:hover {
    color: #13381f;
    outline: none;
    border-color: #13381f;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: #13381f;
  transition: color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;
  text-align: start;
`;

const Input = styled.input`
  height: 35px;
  background-color: #05060f0a;
  border-radius: 0.5rem;
  padding: 0 1rem;
  border: 2px solid transparent;
  font-size: 1rem;
  transition:
    border-color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
    color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
    background 0.2s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;

  &:focus {
    outline: none;
    border-color: #13381f;
    color: #13381f;
  }
  &:hover {
    outline: none;
    border-color: #13381f;
  }
`;

const Grip = styled(FontAwesomeIcon)`
  margin: auto 20px;
  font-size: 18px;
  transition: color 150ms ease-in-out;

  &:hover {
    color: #d54c54;
    transition: color 150ms ease-in-out;
  }
`;

const ReorderGroup = styled(Reorder.Group)`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  width: 100%;
  margin: 32px 0;
  padding: 0;
`;

const Form = styled.form`
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const Header = styled.h2`
  margin: auto auto;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.08,
    },
  },
};

const variants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Admin() {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(
    'To access the admin page, please sign in.'
  );

  const [links, setLinks] = useState<LinkData[] | null>(null);

  useEffect(() => {
    if (authorized) {
      getDoc(doc(db, 'bio', 'content'))
        .then((doc) => {
          if (doc.exists()) {
            setLinks(doc.data().links);
          }
        })
        .catch((error) => {
          setStatus(`Error getting links: ${error}`);
        });

      // no need to show loading status if load times are fast
      const timeout = setTimeout(() => {
        setStatus('Dilloading links...');
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [authorized]);

  let validEmails = [] as string[];

  const handleClick = () => {
    signInWithPopup(auth, provider).then((result) => {
      const docRef = doc(db, 'bio', 'admin');
      setLoading(true);
      getDoc(docRef)
        .then((doc) => {
          if (doc.exists()) {
            validEmails = doc.data().users;

            if (
              validEmails.includes(result.user.email ? result.user.email : '')
            ) {
              setAuthorized(true);
              setStatus('Dilloading links...');
            } else {
              setAuthorized(false);
              setStatus('This email is not an admin. Please try agin.');
            }
            localStorage.setItem(
              'email',
              result.user.email ? result.user.email : ''
            );
            setLoading(false);
          }
        })
        .catch(() => {
          setStatus('Error logging in. Please try again');
        });
    });
  };

  useEffect(() => {
    const docRef = doc(db, 'bio', 'admin');
    setLoading(true);
    getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        if (
          doc
            .data()
            .users.includes(
              localStorage.getItem('email')
                ? (localStorage.getItem('email') as string)
                : ''
            )
        ) {
          setAuthorized(true);
          setStatus('Dilloading links...');
        } else {
          setAuthorized(false);
          setStatus('To access the admin page, please sign in.');
        }

        setLoading(false);
      }
    });
  }, []);

  function saveChanges(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    const tmp: LinkData[] = [];

    for (let i: number = 0; i < (links ? links.length : 0); i++) {
      tmp.push({
        title: formJson['title' + i.toString()] as string,
        url: formJson['url' + i.toString()] as string,
      });
    }
    setLinks(tmp);

    const contentRef = doc(db, 'bio', 'content');
    updateDoc(contentRef, {
      links: tmp,
    });
  }

  const addLink = () => {
    if (links != null) {
      setLinks([...links, { title: '', url: '' }]);
    }
  };

  const deleteLink = (link: LinkData) => {
    if (links != null) {
      setLinks(
        links.filter((l) => l.title !== link.title && l.url !== link.url)
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    if (links != null) {
      const isTitle = e.target.name.includes('title');
      const newLinks = links.map((l, idx) => {
        if (idx == i) {
          if (isTitle) {
            return {
              title: e.target.value,
              url: l.url,
            };
          } else {
            return {
              title: l.title,
              url: e.target.value,
            };
          }
        } else {
          return l;
        }
      });
      setLinks(newLinks);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {authorized == false ? (
        <div>
          <Background src="/background.jpg" />
          <Main>
            <Logo src="/logo.png" />
            {loading ? null : (
              <ContentContainer>
                <Header>{status}</Header>
                <ButtonContainer onClick={handleClick}>
                  <SignInOutText>Sign in with </SignInOutText>
                  <Icon icon={faGoogle} />
                </ButtonContainer>
              </ContentContainer>
            )}
          </Main>
        </div>
      ) : (
        <div>
          <Background src="/background.jpg" />
          <Main>
            <Logo src="/logo.png" />
            {links ? (
              <Form onSubmit={saveChanges}>
                <ReorderGroup
                  values={links}
                  onReorder={setLinks}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {links.map((link, i) => (
                    <Reorder.Item
                      value={link}
                      key={link.url}
                      variants={variants}
                    >
                      <Container>
                        <Grip icon={faGripVertical} />
                        <TextContainer>
                          <InputGroup>
                            <Label>Title</Label>
                            <Input
                              autoComplete="off"
                              name={'title' + i.toString()}
                              id={'title' + i.toString()}
                              defaultValue={link.title}
                              onChange={(e) => handleChange(e, i)}
                            />
                          </InputGroup>
                          <InputGroup>
                            <Label>Url</Label>
                            <Input
                              autoComplete="off"
                              name={'url' + i.toString()}
                              id={'url' + i.toString()}
                              defaultValue={link.url}
                              onChange={(e) => handleChange(e, i)}
                            />
                          </InputGroup>
                        </TextContainer>
                        <TrashContainer>
                          <TrashButton
                            type="reset"
                            onClick={() => deleteLink(link)}
                          >
                            <FontAwesomeIcon icon={faTrashCan} />
                          </TrashButton>
                        </TrashContainer>
                      </Container>
                    </Reorder.Item>
                  ))}
                  <ButtonsContainer>
                    <SaveButton type="submit">Save Changes</SaveButton>
                    <AddButton type="reset" onClick={addLink}>
                      <FontAwesomeIcon icon={faPlus} />
                    </AddButton>
                  </ButtonsContainer>
                </ReorderGroup>
              </Form>
            ) : (
              <StatusText>{status}</StatusText>
            )}
            <SignOut
              setAuthorized={setAuthorized}
              setLoading={setLoading}
              setStatus={setStatus}
            />
          </Main>
        </div>
      )}
    </ThemeProvider>
  );
}

type SignOutProps = {
  setAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
};

function SignOut(props: SignOutProps) {
  const handleClick = () => {
    props.setLoading(true);
    signOut(auth)
      .then(() => {
        localStorage.clear();
        props.setAuthorized(false);
        props.setStatus('To access the admin page, please sign in.');
        props.setLoading(false);
      })
      .catch(() => {
        props.setStatus('Error signing out! Please try again.');
        props.setLoading(false);
      });
  };

  return (
    <ButtonContainer onClick={handleClick}>
      <SignInOutText>Sign Out</SignInOutText>
      <Icon icon={faRightFromBracket} />
    </ButtonContainer>
  );
}
