import { Button } from '@react-email/button';
import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import * as React from 'react';

export default function Email() {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';

  return (
    <Html>
      <Head />
      <Preview>Your documentation is ready. Now you can install the Mintlify GitHub bot.</Preview>
      <Section style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src={`${baseUrl}/static/logo.png`}
              width="181"
              height="40"
              alt="Mintlify"
              style={logo}
            />
          </Section>
          <Text style={text}>
            Hey Alan,
          </Text>
          <Text style={text}>
            Thanks for completing the onboarding process. You can access your new documentation website at{' '}
            <Link href="https://thenextairbnb.mintlify.app" style={link}>
              thenextairbnb.mintlify.app
            </Link>.
          </Text>
          <Text style={text}>
            Now we need to ensure that every change you make gets deployed automatically. To do so, you can install the Mintlify GitHub bot.
          </Text>
          <Section style={buttonContainer}>
            <Button pY={8} pX={20} style={button} href="https://mintlify.com">
              Install GitHub Bot
            </Button>
          </Section>
          <Text style={text}>
            Also, check out the{' '}
            <Link href="https://mintlify.com/docs" style={link}>
              Mintlify docs
            </Link>
            {' '} to learn more about how you can customize your new documentation website.
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            Mintlify, Inc — 169 Madison Ave #2146 New York, NY 10016
          </Text>
        </Container>
      </Section>
    </Html>
  );
}

const fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";

const main = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
};

const container = {
  border: '1px solid #eaeaea',
  borderRadius: '5px',
  margin: '40px auto',
  padding: '20px',
  width: '465px',
};

const logoContainer = {
  margin: '32px 0'
};

const logo = {
  margin: '0 auto',
};

const link = {
  color: '#0f172a',
  textDecoration: 'none',
  fontWeight: 'bold',
  borderBottom: '1px solid #55D799'
};

const text = {
  fontFamily,
  color: '#000',
  fontSize: '14px',
  lineHeight: '24px',
};

const buttonContainer = {
  padding: '12px 0',
};

const button = {
  fontFamily,
  backgroundColor: '#0c8c5f',
  borderRadius: '9999px',
  fontWeight: '600',
  color: '#fff',
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
};

const hr = {
  border: 'none',
  borderTop: '1px solid #eaeaea',
  margin: '26px 0',
  width: '100%',
};

const footer = {
  fontFamily,
  color: '#666666',
  fontSize: '12px',
  lineHeight: '24px',
  marginBottom: 0,
};
