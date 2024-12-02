package com.kodlamaio.northwind.api.controllers;

import com.kodlamaio.northwind.business.abstracts.ProductService;
import com.kodlamaio.northwind.core.utilities.results.DataResult;
import com.kodlamaio.northwind.core.utilities.results.Result;
import com.kodlamaio.northwind.entities.concretes.Products;
import com.kodlamaio.northwind.entities.dtos.ProductWithCategoryDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.data.domain.Sort.Direction.ASC;

@RestController
@RequestMapping("/api/products")
public class ProductsController {

    private ProductService productService;

    @Autowired
    public ProductsController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/getall")
    public DataResult<List<Products>> getAllProducts() {
        return this.productService.getAllProducts();
    }

    @GetMapping("/getByName")
    public DataResult<Products> getProductsByName(@RequestParam("productName") String productName) {
        return this.productService.getByProductName(productName);
    }

    @GetMapping("/getByNameAndCategoryId")
    public DataResult<Products> getProductsByNameAndCategoryId(@RequestParam("productName") String productName, int categoryId) {
        return this.productService.getByProductNameAndCategories_CategoryId(productName, categoryId);
    }

    @GetMapping("getByProductNameContains")
    public DataResult<List<Products>> getProductsByNameContains(@RequestParam("productName") String productName) {
        return this.productService.getByProductNameContains(productName);
    }

    @GetMapping("getAllByPage")
    public DataResult<List<Products>> getAllProducts(int pageNo, int pageSize) {
        return this.productService.getAllProducts(pageNo, pageSize);
    }

    @GetMapping("/getAllSorted")
    public DataResult<List<Products>> getAllSorted() {
        return this.productService.getAllSorted();
    }

    @GetMapping("/getProductsWithCategoryDetails")
    public DataResult<List<ProductWithCategoryDto>> getProductsWithCategoryDetails() {
        return this.productService.getProductWithCategoryDetails();
    }

    @PostMapping("/add")
    public Result addProduct(@RequestBody Products products) {
        return this.productService.add(products);
    }
}
