import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// material-ui
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import Grid from '@mui/material/Grid';

// apexcharts
import Chart from 'react-apexcharts';
import config from '../../config';
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| TOTAL PROFIT CHART ||============================== //
const TotalProfitChart = ({ isLoading }) => {
  const theme = useTheme();
  const [totals, setTotals] = useState({ total_sales: 0, total_purchases: 0 });
  const [profit, setProfit] = useState(0);

  useEffect(() => {
    axios
      .get(`${config.apiUrl}/totals`)
      .then((res) => {
        const data = res.data;
        // Ensure values are numbers
        const totalSales = Number(data.total_sales) || 0;
        const totalPurchases = Number(data.total_purchases) || 0;

        setTotals({ total_sales: totalSales, total_purchases: totalPurchases });
        setProfit(totalSales - totalPurchases);
      })
      .catch((err) => {
        console.error('Error fetching total data:', err);
      });
  }, []);

  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Total Profit',
        data: [0]
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Profit']
      },
      yaxis: {
        title: {
          text: 'Total Profit'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.25,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [0, 50, 100]
        }
      },
      tooltip: {
        y: {
          formatter: (val) => `$${val.toFixed(2)}`
        }
      }
    }
  });

  useEffect(() => {
    setChartData((prevState) => ({
      ...prevState,
      series: [
        {
          name: 'Total Profit',
          data: [profit.toFixed(2)]
        }
      ]
    }));
  }, [profit]);

  return (
    <div>
      {isLoading ? (
        <Typography variant="h6">Loading...</Typography>
      ) : (
        <MainCard>
          <Typography variant="h4" align="center" color={theme.palette.primary.main}>
            PROFIT
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="h6">
                Total Sales: <CurrencyRupeeOutlinedIcon />{totals.total_sales.toFixed(2)}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">
                Total Purchases: <CurrencyRupeeOutlinedIcon />{totals.total_purchases.toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
          <Chart options={chartData.options} series={chartData.series} type="bar" height={350} />
        </MainCard>
      )}
    </div>
  );
};

TotalProfitChart.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalProfitChart;
