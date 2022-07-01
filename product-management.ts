import {Product} from "./product";
export class ProductManagement {
    private static products: Product[] = [];

    getAllProduct (): Product[]{
        return ProductManagement.products;
    }
    addNewProduct (product: Product): void {
        ProductManagement.products.push(product);
    }
    updateProduct (index: number, product: Product ): void{
        ProductManagement.products[index] = product;
    }
    deleteProduct (index: number): void{
        ProductManagement.products.splice(index,1)
    }
    findByName(name: string): Product | null {
        for (let i = 0; i < ProductManagement.products.length; i++) {
            if (ProductManagement.products[i].name == name){
                return ProductManagement.products[i]
            }

        }
        return null;
    }


}