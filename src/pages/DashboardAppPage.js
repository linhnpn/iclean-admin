import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// sections
import {
  AppWebsiteVisits,
  AppWidgetSummary,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  const [tableDataLable, setTableDataLable] = useState([]);

  const [tableDataValue, setTableDataValue] = useState([]);

  useEffect(() => {
    getStatistic();
  }, []);

  const getStatistic = async () => {
    try {
      const url = 'https://i-clean-api.herokuapp.com/api/v1/payment/statistic';
      const { data } = (await axios.get(url));
      setTableDataLable(data.data.map(item => item.paymentDay));
      setTableDataValue(data.data.map(item => item.totalBalance));
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>
      <Helmet>
        <title> Dashboard | iClean </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary title="Weekly Sales" total={5410000} icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary title="New Users" total={28} color="info" icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary title="Item Orders" total={102} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <AppWebsiteVisits
              title="Payment History"
              subheader="(+100%) than last month"
              chartLabels={tableDataLable}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: tableDataValue,
                },
              ]}
            />
          </Grid>

        </Grid>
      </Container>
    </>
  );
}
