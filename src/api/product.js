import apiClient from './apiClient';
import { v1 as uuidv1 } from 'uuid';

const getProducts = () => apiClient.get('/product');
const deleteProduct = (id) => apiClient.delete(`/product/${id}`);
const getProductById = (id) => apiClient.get(`/product/${id}`);
const buyProduct = (items) => apiClient.post(`/product/buy`, items);
const addProduct = (values, mainImg, gallery) => {
  const { title, price, aNumber, discountP } = values;
  const items = new FormData();
  const uploaded = new Date();
  const id = uuidv1();

  items.append('title', title);
  items.append('price', price);
  items.append('discountP', discountP);
  items.append('aNumber', aNumber);
  items.append('uploaded', uploaded);
  items.append('images', mainImg.file, id);
  items.append('thumbs', mainImg.uri);
  gallery.forEach((el) => {
    items.append('images', el.file, id);
    items.append('thumbs', el.uri);
  });
  return apiClient.post('/product/add', items);
};

const exportedObject = {
  getProducts,
  deleteProduct,
  getProductById,
  buyProduct,
  addProduct,
};

export default exportedObject;
