// new

import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from '../../Search Option/Search';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import AdminAddCustPurch from "./AdminAddCustPurch";
import UpdateCustPurch from "./AdminUpdateCustPurch";
import PurchaseInvoice from  "./AdminPurchaseInvoice";
import config from '../../../config';
import { format } from 'date-fns';
import DateFilter from 'components/Admin Panel/Purchase/DateFilter';

const AdminCustPurchIndex = () => {
  const [custPurchData, setCustPurchData] = useState([]);
  const [searchCustPurchData, setSearchCustPurchData] = useState([]);
  const [dataPerPage, setDataPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [openNew, setOpenNew] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDlt, setOpenDlt] = useState(false);
  const [openInvoice, setOpenInvoice] = useState(false);
  const [updateData, setUpdateData] = useState([]);
  const [dltData, setDltData] = useState();
  const [invoiceData, setInvoiceData] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [deliveredIds, setDeliveredIds] = useState(new Set());

  // Fetch customer purchase data
  useEffect(() => {
    axios.get(`${config.apiUrl}/cust_purch/getCustPurchDataForAdmin`)
      .then((res) => {
        setCustPurchData(res.data);
        setSearchCustPurchData(res.data);

        // Track delivered IDs
        const delivered = new Set(res.data.filter(item => item.deliveryed).map(item => item.cust_purch_id));
        setDeliveredIds(delivered);
      })
      .catch((err) => {
        console.log("Customer purchase data is not fetched.");
      });
  }, [openNew, openUpdate, openDlt]);

  const handleUpdate = (id) => {
    const selectUpdate = custPurchData.find((cust_purch) => cust_purch.cust_purch_id === cust_purch_id);
    if (selectUpdate) {
      setUpdateData(selectUpdate);
      setOpenUpdate(true);
    }
  };

  const handleDlt = (id) => {
    setDltData(id);
    setOpenDlt(true);
  };

  const confirmDlt = () => {
    axios.delete(`${config.apiUrl}/cust_purch/deleteCustPurch/${dltData}`)
      .then((res) => {
        setOpenDlt(false);
      })
      .catch((err) => {
        console.log("Error deleting data. Please try again later.");
      });
  };

  const handleChangeDataPerPage = (e) => {
    const newDataPerPage = parseInt(e.target.value, 10);
    if (newDataPerPage === 1) {
      setDataPerPage(custPurchData.length);
      setCurrentPage(1);
    } else {
      setDataPerPage(newDataPerPage);
      setCurrentPage(1);
    }
  };

  const handleInvoice = (data) => {
    setInvoiceData(data);
    setOpenInvoice(true);
  };

  const handleFilter = () => {
    if (startDate && endDate) {
      const filteredData = custPurchData.filter((cust_purch) => {
        const custDate = new Date(cust_purch.created_at);
        return custDate >= new Date(startDate) && custDate <= new Date(endDate);
      });
      setSearchCustPurchData(filteredData);
      setCurrentPage(1);
    } else {
      setSearchCustPurchData(custPurchData);
    }
  };

  const firstIndexOfData = (currentPage - 1) * dataPerPage;
  const lastIndexOfData = currentPage * dataPerPage;
  const currentData = searchCustPurchData.slice(firstIndexOfData, lastIndexOfData);

  const handleDelivered = (id) => {
    axios.post(`${config.apiUrl}/cust_purch/markAsDelivered/${id}`)
      .then((res) => {
        console.log(res.data.message);
        setDeliveredIds(prev => new Set(prev.add(id)));
      })
      .catch((err) => {
        console.log("Error marking as delivered. Please try again later.");
      });
  };

  return (
    <>
      <h1 className='text-center'>Customer Purchase Index</h1>
      <Grid container spacing={2} className='mt-3'>
        <Grid item xs={4} display='flex' justifyContent='center'>
          <Button onClick={() => setOpenNew(true)} variant="contained">Purchase Product</Button>
        </Grid>
        <Grid item xs={4} display='flex' justifyContent='center'>
          <Search data={custPurchData} setData={setSearchCustPurchData} />
        </Grid>
        <Grid item xs={4} display='flex' justifyContent='center'>
          <FormControl>
            <Select value={dataPerPage} onChange={handleChangeDataPerPage}>
              <MenuItem value={5}>5 Per Page</MenuItem>
              <MenuItem value={10}>10 Per Page</MenuItem>
              <MenuItem value={15}>15 Per Page</MenuItem>
              <MenuItem value={1}>All Per Page</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <DateFilter
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        onFilter={handleFilter}
      />
      <TableContainer component={Paper} className='mt-4'>
        <Table>
          <TableHead>
            <TableRow>
              {["S.No", "Customer Name", "Customer Mobile", "Customer Email", "Product Name", "Quantity", "Price", "Date/Time", "Payment Type", "Payment Amount", "Balance", "Total", "Action"].map((heading) => (
                <TableCell key={heading} style={{ fontWeight: 'bold', textAlign: 'center' }}>{heading}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData.map((cust_purch, index) => {
              // Split product names, quantities, and prices
              const productNames = cust_purch.product_names ? cust_purch.product_names.split(',') : [];
              const quantities = cust_purch.quantities ? cust_purch.quantities.split(',') : [];
              const prices = cust_purch.prices ? cust_purch.prices.split(',') : [];

              return (
                <TableRow key={cust_purch.cust_purch_id}>
                  <TableCell align="center">{firstIndexOfData + index + 1}</TableCell>
                  <TableCell align="center">{cust_purch.cust_name}</TableCell>
                  <TableCell align="center">{cust_purch.cust_mobile}</TableCell>
                  <TableCell align="center">{cust_purch.cust_email}</TableCell>
                  <TableCell align="center">
                    {productNames.length > 0 ? (
                      productNames.map((name, idx) => (
                        <div key={idx}>{name}</div>
                      ))
                    ) : 'No products'}
                  </TableCell>
                  <TableCell align="center">
                    {quantities.length > 0 ? (
                      quantities.map((qty, idx) => (
                        <div key={idx}>{qty}</div>
                      ))
                    ) : 'No quantities'}
                  </TableCell>
                  <TableCell align="center">
                    {prices.length > 0 ? (
                      prices.map((price, idx) => (
                        <div key={idx}>{price}</div>
                      ))
                    ) : 'No prices'}
                  </TableCell>
                  <TableCell>
                    {(() => {
                      const formattedDate = format(new Date(cust_purch.created_at), 'dd/MM/yyyy HH:mm:ss');
                      const [datePart, timePart] = formattedDate.split(' ');
                      return (
                        <>
                          {datePart}{" "}
                          <span style={{ color: 'red' }}>{timePart}</span>
                        </>
                      );
                    })()}
                  </TableCell>
                  <TableCell align="center">{cust_purch.payment_type}</TableCell>
                  <TableCell align="center">{cust_purch.payment_amount}</TableCell>
                  <TableCell align="center">{cust_purch.balance}</TableCell>
                  <TableCell align="center">{cust_purch.total}</TableCell>
                  <TableCell align="center">
                    <Button onClick={() => handleUpdate(cust_purch.cust_purch_id)} variant="contained" color="primary" size="small" style={{ margin: '2px' }}>Edit</Button>
                    <Button onClick={() => handleDlt(cust_purch.cust_purch_id)} variant="contained" color="secondary" size="small" style={{ margin: '2px' }}>Delete</Button>
                    <Button onClick={() => handleInvoice(cust_purch)} variant="contained" color="success" size="small" style={{ margin: '2px' }}>Invoice</Button>
                    {!deliveredIds.has(cust_purch.cust_purch_id) && (
                      <Button onClick={() => handleDelivered(cust_purch.cust_purch_id)} variant="contained" color="info" size="small" style={{ margin: '2px' }}>Mark as Delivered</Button>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2} className="mt-4" direction="row" justifyContent="center">
        <Pagination
          count={Math.ceil(searchCustPurchData.length / dataPerPage)}
          page={currentPage}
          onChange={(e, page) => setCurrentPage(page)}
          color="primary"
        />
      </Stack>
      <Dialog open={openNew} onClose={() => setOpenNew(false)} maxWidth="md" fullWidth>
        <DialogTitle>Purchase Product</DialogTitle>
        <DialogContent>
          <AdminAddCustPurch onClose={() => setOpenNew(false)} />
        </DialogContent>
      </Dialog>
      <Dialog open={openUpdate} onClose={() => setOpenUpdate(false)} maxWidth="md" fullWidth>
        <DialogTitle>Update Purchase</DialogTitle>
        <DialogContent>
          <UpdateCustPurch updateData={updateData} onClose={() => setOpenUpdate(false)} />
        </DialogContent>
      </Dialog>
      <Dialog open={openDlt} onClose={() => setOpenDlt(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this item?
        </DialogContent>
        <DialogActions>
          <Button onClick={confirmDlt} color="primary">Confirm</Button>
          <Button onClick={() => setOpenDlt(false)} color="secondary">Cancel</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openInvoice} onClose={() => setOpenInvoice(false)} maxWidth="md" fullWidth>
  <DialogTitle>Purchase Invoice</DialogTitle>
  <DialogContent dividers>
    {invoiceData && <PurchaseInvoice data={invoiceData} dueDate={invoiceData.dueDate} />}
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setOpenInvoice(false)} color="primary">Close</Button>
  </DialogActions>
</Dialog>
    </>
  );
};




export default AdminCustPurchIndex;