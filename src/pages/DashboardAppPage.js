// import { Helmet } from 'react-helmet-async';
// import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import Iconify from '../components/iconify';
// components
// import Iconify from '../components/iconify';
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
// import AppWidgetSummary from '../sections/@dashboard/app/AppWidgetSummary';
import AppWebsiteVisits from '../sections/@dashboard/app/AppWebsiteVisits';
import AppCurrentVisits from '../sections/@dashboard/app/AppCurrentVisits';
import AppTasks from '../sections/@dashboard/app/AppTasks'
import AppTrafficBySite from '../sections/@dashboard/app/AppTrafficBySite'

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>
        
        <Grid container spacing={3}>
          {/* <Grid item xs={12} sm={6} md={3}>
             <AppWidgetSummary title="Weekly Sales" total={714000} icon={'ant-design:android-filled'}/>
          </Grid> */}

            {/* To do tasks */}

            <Grid item xs={12} md={6} lg={8}>
              <AppTasks
                title="Tasks"
                list={[
                  { id: '1', label: 'Create FireStone Logo' },
                  { id: '2', label: 'Add SCSS and JS files if required' },
                  { id: '3', label: 'Stakeholder Meeting' },
                  { id: '4', label: 'Scoping & Estimations' },
                  { id: '5', label: 'Make sure to tell on call doctor to ensure the Quality' },
                  { id: '6', label: 'Tell the Workers to not go before time' },
                  { id: '7', label: 'Call My Friend' },
                  { id: '8', label: 'Be Hydrated' },

                ]}
              />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Cases Chart"
              chartData={[
                { label: 'General Checkups', value: 910 },
                { label: 'Surgeries', value: 1005 },
                { label: 'Lab Tests', value: 1300 },
                { label: 'Cardiology', value: 459 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.success.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid> 



            {/* Clinical Profit and Loss */}

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
