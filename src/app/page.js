import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import VideoMonitor from '../../components/VideoMonitor';

export default function Home() {
  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <VideoMonitor title="Molino SAG" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <VideoMonitor title="Molino BOLAS" />
        </Grid>
      </Grid>
    </main>
  );
}
