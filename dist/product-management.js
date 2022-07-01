"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManagement = void 0;
class ProductManagement {
    getAllProduct() {
        return ProductManagement.products;
    }
    addNewProduct(product) {
        ProductManagement.products.push(product);
    }
    updateProduct(index, product) {
        ProductManagement.products[index] = product;
    }
    deleteProduct(index) {
        ProductManagement.products.splice(index, 1);
    }
    findByName(name) {
        for (let i = 0; i < ProductManagement.products.length; i++) {
            if (ProductManagement.products[i].name == name) {
                return ProductManagement.products[i];
            }
        }
        return null;
    }
}
exports.ProductManagement = ProductManagement;
ProductManagement.products = [];
