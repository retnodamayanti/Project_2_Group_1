const addCategoryHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#categoryName').value.trim();
    
    console.log(name)
    if (name) {

      const response = await fetch('/api/categories', {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add category.');
      }
    }
  };
  
  const addProductHandler = async (event) => {
    event.preventDefault();
  
    const product_name = document.querySelector('#productName').value.trim();
    const quantity = document.querySelector('#quantity').value.trim();
    const stock_id = document.querySelector('#stock_id').value.trim();
    const filename = document.querySelector('#filename').value.trim();
    const description = document.querySelector('#description').value;
    const category_id = document.querySelector('#category_id').value.trim();
    
    console.log(product_name, quantity, stock_id, filename, description, category_id )
    if (product_name && quantity && stock_id && filename && description && category_id) {
      const response = await fetch('/api/inventory', {
        method: 'POST',
        body: JSON.stringify({ product_name, quantity, stock_id, filename, description, category_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add product.');
      }
    }
  };
  

  document
    .querySelector('.addCategory-form')
    .addEventListener('submit', addCategoryHandler);

    document
    .querySelector('.addProduct-form')
    .addEventListener('submit', addProductHandler);
