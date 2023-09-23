class ProductManager {
    constructor() {
      this.products = [];
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products.push(product);
      return product;
    }
  
    getProduct(code) {
      return this.products.find(product => product.code === code);
    }
  
    getProducts() {
      return this.products;
    }
  
    updateProduct(code, updatedProduct) {
      this.products = this.products.map(product =>
        product.code === code ? { ...product, ...updatedProduct } : product
      );
      return this.getProduct(code);
    }
  
    deleteProduct(code) {
      const index = this.products.findIndex(product => product.code === code);
      if (index !== -1) {
        const deletedProduct = this.products.splice(index, 1);
        return deletedProduct[0];
      } else {
        return null;
      }
    }
  }


const productManager = new ProductManager();

productManager.addProduct('Producto 1', 'Descripción 1', 10, 'imagen1.jpg', 'P001', 50);
productManager.addProduct('Producto 2', 'Descripción 2', 20, 'imagen2.jpg', 'P002', 30);

const allProducts = productManager.getProducts();
console.log(allProducts);