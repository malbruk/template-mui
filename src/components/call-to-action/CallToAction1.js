import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function CTA(props) {
  const content = {
    'header': 'The New Internet',
    'description': 'Decentralized, secure, private. The PiperNet is on it\'s way to revolutionize every smartphone, PC, and smart-fridge near you.',
    'primary-action': 'Join the Revolution',
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="md">
        <Box py={8} textAlign="center">
          <Typography variant="h3" component="h2" gutterBottom={true}>{content['header']}</Typography>
          <Typography variant="h5" color="textSecondary">{content['description']}</Typography>
          <Box mt={4}>
            <Button variant="contained" size="large" color="primary">{content['primary-action']}</Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}