const fetchProducts = async (url) => {
  try {
    const response = await fetch(url);
    const products = await response.json();
    return products;
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchProducts;
