import {
  faInstagram,
  faSpotify,
  faTiktok,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import styled, { ThemeProvider } from 'styled-components';
import Link from './components/Link';
import Social from './components/Social';
import { theme } from './theme';
import { useEffect, useState } from 'react';
import { LinkData } from './types';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './app';
import MailingList from './components/MailingList';
import Links from './components/Links';
import { AnimatePresence } from 'framer-motion';
import paperTexture from '/image.png';

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-color: #2e4595;
  font-family: 'Rye';
`;

const TextureOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: #2e4595;
  mix-blend-mode: multiply;
  opacity: 0.6;
`;

const TextureImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
`;

const Background = styled.img`
  width: 100%;
  min-height: 240px;
  max-height: 320px;
  object-fit: cover;
  object-position: center;
  position: relative;
  z-index: 1;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: 64px 32px;
  box-sizing: border-box;
  position: relative;
  z-index: 10;
  color: white;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 120px;
  margin-bottom: 16px;
  border-radius: 50%;
  position: absolute;
  top: -76px;
  border: 8px solid ${({ theme }) => theme.background};
  z-index: 2;
`;

const TitleImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: 0;
  margin-bottom: 12px;
`;

const Description = styled.p`
  margin: 0;
  font-size: 1.25rem;
  color: #f6f2a3;
  font-family: Merriweather;
  font-weight: 600;
`;

const Socials = styled.div`
  display: flex;
  margin: 16px 0;
  gap: 4px;
`;

const StatusText = styled.p`
  opacity: 0.75;
  height: 256px;
`;

const Footer = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.footerText};
  margin: 32px 0;
`;

export default function App() {
  const [status, setStatus] = useState('');
  const [links, setLinks] = useState<LinkData[] | null>(null);

  useEffect(() => {
    getDoc(doc(db, 'bio', 'content'))
      .then((doc) => {
        if (doc.exists()) {
          setLinks(doc.data().links);
        }
      })
      .catch((error) => {
        setStatus(`Error getting links: ${error}`);
      });

    const timeout = setTimeout(() => {
      setStatus('Dilloading links...');
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence>
        <PageContainer>
          <TextureOverlay />
          <TextureImage src={paperTexture} alt="" />
          <Background src="/background.jpg" />
          <Main>
            <Logo src="/pfpblue.png" />
            <TitleImage src="/dillodaycarnival@4x.png" alt="Dillo Day" />
            <Description>
              The largest student-run music festival in the nation.
            </Description>
            <Socials>
              <Social
                icon={faInstagram}
                link="https://www.instagram.com/dillo_day/"
              />
              <Social icon={faTiktok} link="https://www.tiktok.com/@dilloday" />
              <Social
                icon={faSpotify}
                link="https://open.spotify.com/user/dillo_day"
              />
              <Social icon={faXTwitter} link="https://twitter.com/Dillo_Day" />
            </Socials>
            {links ? (
              <Links>
                {links.map((link) => (
                  <Link key={link.title} {...link} />
                ))}
              </Links>
            ) : (
              <StatusText>{status}</StatusText>
            )}
            <MailingList />
            <Footer>
              Copyright © {new Date().getFullYear()} Mayfest Productions
            </Footer>
          </Main>
        </PageContainer>
      </AnimatePresence>
    </ThemeProvider>
  );
}
