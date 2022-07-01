import {ProductManagement} from "./product-management";
import * as rl from 'readline-sync';
import {Product} from "./product";
let listProduct = new ProductManagement();
let choice = '-1';
let menu = '1.Hien thi danh sach hang hoa\n' +
    '2.Tim kiem hang hoa theo ten\n' +
    '3.Nhap thong tin mot mat hang moi\n' +
    '4.Chinh sua thong tin mot mat hang\n' +
    '5.Xoa mot mat hang ra khoi ung dung\n' +
    '0.Thoat\nMoi ban nhap lua chon'

function addProduct(){
    let name = rl.question('Nhap ten san pham')
    let price = +rl.question('Nhap gia san pham')
    let typeProduct = rl.question('Nhap loai san pham')
    let amount = +rl.question('Nhap so luong san pham')
    let date = +rl.question('Nhap so ngay tao')
    let description = rl.question('Nhap so luong san pham')
    return new Product(name,typeProduct,price,amount,date,description)
}

function showAllProduct() {
    console.log('Hien thi danh sach hang hoa')
    let products = listProduct.getAllProduct();
    for (let product of products) {
        console.log(`Ma hang: ${product.id}\nTen hang: ${product.name}\nLoai hang: ${product.typeProduct}\nGia: ${product.price}\n So luong: ${product.amount}\nNgay tao: ${product.date}\n Mo ta: ${product.description}`)
    }

}

function findProductByName() {
    console.log('Tim kiem hang hoa theo ten')
    let name = rl.question('Nhap ten san pham ban muon tim kiem')
    let product = listProduct.findByName(name);
    if(product == null){
        console.log('Khong co du lieu phu hop');
    }else {
        console.log(product);
    }
}

function inputNewProduct() {
    console.log('Nhap thong tin mot mat hang moi')
    let newProduct = addProduct()
    listProduct.addNewProduct(newProduct)
}

function updateProduct() {
    console.log('Chinh sua thong tin mot mat hang')
    let index = +rl.question('Nhap vi tri ban muon chinh sua:');
    listProduct.updateProduct(index, addProduct());
}

function deleteProduct() {
    console.log('Xoa mot mat hang ra khoi ung dung')
    let index = +rl.question('Nhap vi tri muon xoa');
    listProduct.deleteProduct(index);
}

do {
    choice= rl.question(menu)

    switch (choice) {
        case '1': {
            showAllProduct();
            break
        }
        case '2': {
            findProductByName();
            break;

        }
        case '3': {
            inputNewProduct();
            break;

        }
        case '4': {
            updateProduct();
            break;

        }
        case '5': {
            deleteProduct();
            break;

        }


    }
}while (choice != '0');