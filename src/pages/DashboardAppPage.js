import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
// import {
//   AppTasks,
//   AppNewsUpdate,
//   AppOrderTimeline,
//   AppCurrentVisits,
//   AppWebsiteVisits,
//   AppTrafficBySite,
//   AppWidgetSummary,
//   AppCurrentSubject,
//   AppConversionRates,
// } from '../sections/@dashboard/app';
import AppWidgetSummary from '../sections/@dashboard/app/AppWidgetSummary';
import AppWebsiteVisits from '../sections/@dashboard/app/AppWebsiteVisits';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>
        
        <Grid>
          {/* <Grid item xs={12} sm={6} md={3}>
             <AppWidgetSummary title="Weekly Sales" total={714000} icon={'ant-design:android-filled'}/>
          </Grid> */}

<Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Clinical Profit"
              subheader="Over Some Past Years"
              chartLabels={[
                '01/01/2022',
                '01/01/2021',
                '01/01/2020',
                '01/01/2019',
                '01/01/2018',
                '01/01/2017',
                '01/01/2016',
                '01/01/2015',
              ]}
              chartData={[
                // {
                //   name: 'Team A',
                //   type: 'column',
                //   fill: 'solid',
                //   data: [23, 11, 22, 27, 13, 22, 37, 21],
                // },
                {
                  name: 'Profit',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 80],
                },
                {
                  name: 'Investment',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 100],
                },
              ]}
            />
          </Grid>



        </Grid>
      </Container>
    </>
  );
}
