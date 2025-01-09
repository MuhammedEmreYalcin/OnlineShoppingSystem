import axios from "axios";

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:8080/api/products/getall")
    }

    getByName(productName){
        return axios.get("http://localhost:8080/api/products/getByName?productName=" + productName)
    }

    addProduct(product) {
        return axios.post("http://localhost:8080/api/products/add", {
            productName: product.productName,
            unitPrice: product.unitPrice,
            unitsInStock: 0,  // Default Wert oder vom Formular
            quantityPerUnit: "1",  // Default Wert oder vom Formular
            categories: {
                categoryId: 1,  // Default Kategorie oder vom Formular
                categoryName: "Default"  // Default Wert oder vom Formular
            }
        });
    }

}