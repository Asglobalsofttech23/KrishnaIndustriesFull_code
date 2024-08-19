// import { Button, Grid, MenuItem, TextField } from '@mui/material';
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import config from '../../../config';

// const UpdateCustPurch = ({data,onClose}) => {
//     const [proData,setProData] = useState([]);
//     const [custData,setCustData] = useState([])
//     const [updateData,setUpdateData] = useState({
//         cust_id : data ?data.cust_id : "",
//         pro_id : data ?data.pro_id :"",
//         quantity : data ?data.quantity : "",
//         price : data ?data.price :"",
//         payment_type : data ?data.payment_type :"",
//         payment_amount : data ?data.payment_amount :"",
//         balance :data ?data.balance : "",
//         total :data ?data.total : "",
//     });
//     const [errors,setErrors] = useState({
//         cust_id : "",
//         pro_id : "",
//         quantity : "",
//         price : "",
//         payment_type : "",
//         payment_amount : "",
//         balance : "",
//         total : "",
//     });


//     useEffect(()=>{
//         axios.get(`${config.apiUrl}/product/getProductData`)
//         .then((res)=>{
//             setProData(res.data);
//         })
//         .catch((err)=>{
//             console.log("Customer purchase data is not fetched.")
//         })
//     },[])

//     useEffect(()=>{
//         axios.get(`${config.apiUrl}/customer/getCustomerByEmpId/${sessionStorage.getItem('emp_id')}`)
//         .then((res)=>{
//             setCustData(res.data)
//         })
//         .catch((err)=>{
//             console.log("Customer data is not fetched.")
//         })
//     },[])

//     const handleValidation = (name,value) =>{
//         let errmsg = "";
//         const trimmedValue = value && typeof value === 'string' ? value.trim():value;
//         switch(name){
//             case "pro_id":
//                 if(!trimmedValue){
//                     errmsg = "Product name is required."
//                 }
//                 break;
//             case "quantity":
//                 if(!trimmedValue){
//                     errmsg = "Quantity is required."
//                 }
//                 break;
//             case "price":
//                 if(!trimmedValue){
//                     errmsg = "Price is required."
//                 }
//                 break;
//             case "payment_type":
//                 if(!trimmedValue){
//                     errmsg = "Payment type is required."
//                 }
//                 break;
//             case "payment_amount":
//                 if(!trimmedValue){
//                     errmsg = "payment_amount Amount is required."
//                 }
//                 break;
//             case "balance":
//                 if(!trimmedValue){
//                     errmsg = "balance amount is required."
//                 }
//                 break;
//             case "total":
//                 if(!trimmedValue){
//                     errmsg = "Total amount is required."
//                 }
//                 break;
//         }
//     }

//     const handleChangeInput = (e) => {
//         const { name, value } = e.target;
//         let updatedUpdateData = { ...updateData, [name]: value };
        
//         // Calculate balance amount if payment_type is 'partial'
//         if (name === 'payment_type' && value === 'partial') {
//             const total = parseFloat(updatedUpdateData.total || 0);
//             const payment_amount = parseFloat(updatedUpdateData.payment_amount || 0);
//             updatedUpdateData.balance = (total - payment_amount).toFixed(2);
//         } else if (name === 'payment_amount') {
//             const total = parseFloat(updatedUpdateData.total || 0);
//             const payment_amount = parseFloat(value || 0);
//             updatedUpdateData.balance = (total - payment_amount).toFixed(2);
//         } else if (name === 'quantity' || name === 'price') {
//             const quantity = parseFloat(updatedUpdateData.quantity || 0);
//             const price = parseFloat(updatedUpdateData.price || 0);
//             updatedUpdateData.total = (quantity * price).toFixed(2);
//         }
        
//         const error = handleValidation(name, value);
        
//         setUpdateData(updatedUpdateData);
//         setErrors({ ...errors, [name]: error });
//     };
    
    

//     const handleUpdate = (e) => {
//         e.preventDefault();
//         let formErr = {};
//         Object.keys(updateData).forEach((name) => {
//             const value = updateData[name];
//             const error = handleValidation(name, value);
//             if (error) {
//                 formErr = error;
//             }
//         });

//         if (Object.keys(formErr).length > 0) {
//             setErrors(formErr);
//             return;
//         }

//         axios
//             .put(`${config.apiUrl}/cust_purch/updateCustPurch/${data.cust_purch_id}`, updateData)
//             .then((res) => {
//                 onClose();
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };
//   return (
//     <div>
//         <h1 className='text-center'>Update Customer Purchase</h1>
//       <Grid container spacing={2}>
//       <Grid item xs={6}>
//       <TextField
//             select
//             fullWidth
//             name='cust_id'
//             label='Select customer'
//             onChange={handleChangeInput}
//             value={updateData.cust_id}
//             error={!!errors.cust_id}
//             helperText={errors.cust_id}
//         >
//             {custData.map((cust) => (
//                 <MenuItem key={cust.cust_id} value={cust.cust_id}>{cust.cust_name}</MenuItem>
//             ))}
//         </TextField>
//       </Grid>

//         <Grid item xs={6}>
//             <TextField
//             select
//             fullWidth
//             name = 'pro_id'
//             label = 'Select Product Name'
//             onChange={handleChangeInput}
//             value={updateData.pro_id}
//             error = {!!errors.pro_id}
//             helperText = {errors.pro_id}
//             >
//                 {proData.map((pro)=>(
//                     <MenuItem key={pro.pro_id} value={pro.pro_id}>{pro.pro_name}</MenuItem>
//                 ))}
//             </TextField>
//         </Grid>
//         <Grid item xs={6}>
//             <TextField
//             fullWidth
//             name = 'quantity'
//             label = 'Quantity'
//             type='number'
//             onChange={handleChangeInput}
//             value={updateData.quantity}
//             error = {!!errors.quantity}
//             helperText = {errors.quantity}
//             />
//         </Grid>
//         <Grid item xs={6}>
//             <TextField
//             fullWidth
//             name = 'price'
//             label = 'Price'
//             type='number'
//             onChange={handleChangeInput}
//             value={updateData.price}
//             error = {!!errors.price}
//             helperText = {errors.price}
//             />
//         </Grid>
//         <Grid item xs={6}>
//             <TextField
//             select
//             fullWidth
//             name = 'payment_type'
//             label = 'Select Payment type'
//             onChange={handleChangeInput}
//             value={updateData.payment_type}
//             error = {!!errors.payment_type}
//             helperText = {errors.payment_type}
//             >
//                  <MenuItem value="full">Full Payment</MenuItem>
//                  <MenuItem value="partial">Partial Payment</MenuItem>
//             </TextField>
//         </Grid>
//         <Grid item xs={6}>
//             <TextField
//             fullWidth
//             name = 'total'
//             label = 'Total'
//             type='number'
//             onChange={handleChangeInput}
//             value={updateData.total}
//             error = {!!errors.total}
//             helperText = {errors.total}
//             />
//         </Grid>
//         <Grid item xs={6}>
//             <TextField
//             fullWidth
//             name = 'payment_amount'
//             label = 'Amount'
//             type='number'
//             onChange={handleChangeInput}
//             value={updateData.payment_amount}
//             error = {!!errors.payment_amount}
//             helperText = {errors.payment_amount}
//             />
//         </Grid>
        
//         <Grid item xs={6}>
//             <TextField
//             fullWidth
//             name = 'balance'
//             label = 'Balance Amount'
//             type='number'
//             onChange={handleChangeInput}
//             value={updateData.balance}
//             error = {!!errors.balance}
//             helperText = {errors.balance}
//             />
//         </Grid>
//         <Grid item xs={12} display='flex' justifyContent='center'>
//             <Button onClick={handleUpdate}>Submit</Button>
//         </Grid>
//       </Grid>
//     </div>
//   )
// }

// export default UpdateCustPurch
// src/components/UpdatePurch.js

import React, { useState, useEffect } from 'react';
import { Button, TextField, Grid, DialogActions, DialogContent, DialogTitle, Dialog } from '@mui/material';
import axios from 'axios';
import config from '../../../config';

const UpdatePurch = ({ updateData, onClose }) => {
  const [formData, setFormData] = useState({
    cust_id: "",
    cust_name: '',
    cust_mobile: '',
    cust_email: '',
    product_names: '',
    quantities: '',
    prices: '',
    payment_type: '',
    payment_amount: '',
    balance: '',
    total: ''
  });

  const [productMap, setProductMap] = useState({}); // For storing product name to ID mapping

  useEffect(() => {
    if (updateData) {
      setFormData({
        cust_id: updateData.cust_id || '',
        cust_name: updateData.cust_name || '',
        cust_mobile: updateData.cust_mobile || '',
        cust_email: updateData.cust_email || '',
        product_names: Array.isArray(updateData.product_names) ? updateData.product_names.join(', ') : updateData.product_names || '',
        quantities: Array.isArray(updateData.quantities) ? updateData.quantities.join(', ') : updateData.quantities || '',
        prices: Array.isArray(updateData.prices) ? updateData.prices.join(', ') : updateData.prices || '',
        payment_type: updateData.payment_type || '',
        payment_amount: updateData.payment_amount || '',
        balance: updateData.balance || '',
        total: updateData.total || ''
      });

      // Fetch the product name to ID mapping from the backend
      axios.get(`${config.apiUrl}/products`)
        .then(response => {
          const productData = response.data;
          const map = productData.reduce((acc, product) => {
            acc[product.name] = product.id; // Assuming the product has 'name' and 'id' fields
            return acc;
          }, {});
          setProductMap(map);
        })
        .catch(err => console.error("Error fetching product data:", err));
    }
  }, [updateData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = () => {
    const { product_names, quantities, prices, ...rest } = formData;

    // Convert comma-separated product names to product IDs
    const productIds = product_names ? product_names.split(',').map(name => productMap[name.trim()] || null) : [];
    const productQuantities = quantities ? quantities.split(',').map(qty => qty.trim()) : [];
    const productPrices = prices ? prices.split(',').map(price => price.trim()) : [];

    // Combine arrays into a single object
    const products = {
      pro_id: productIds,
      quantity: productQuantities,
      price: productPrices
    };

    const updatedData = { ...rest, ...products };

    axios.put(`${config.apiUrl}/cust_purch/updateCustPurch/${updateData.cust_purch_id}`, updatedData)
      .then((res) => {
        onClose();
      })
      .catch((err) => {
        console.error("Error updating data. Please try again later.", err);
      });
  };

  return (
    <Dialog open={true} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Update Purchase</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Customer Name"
              name="cust_name"
              value={formData.cust_name}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Customer Mobile"
              name="cust_mobile"
              value={formData.cust_mobile}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Customer Email"
              name="cust_email"
              value={formData.cust_email}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Product Names (comma separated)"
              name="product_names"
              value={formData.product_names}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantities (comma separated)"
              name="quantities"
              value={formData.quantities}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Prices (comma separated)"
              name="prices"
              value={formData.prices}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Payment Type"
              name="payment_type"
              value={formData.payment_type}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Payment Amount"
              name="payment_amount"
              value={formData.payment_amount}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Balance"
              name="balance"
              value={formData.balance}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Total"
              name="total"
              value={formData.total}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleUpdate} color="primary">Update</Button>
        <Button onClick={onClose} color="secondary">Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdatePurch;
