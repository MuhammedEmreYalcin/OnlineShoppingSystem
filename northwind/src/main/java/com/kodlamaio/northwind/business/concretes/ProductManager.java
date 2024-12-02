package com.kodlamaio.northwind.business.concretes;

import com.kodlamaio.northwind.business.abstracts.ProductService;
import com.kodlamaio.northwind.core.utilities.results.DataResult;
import com.kodlamaio.northwind.core.utilities.results.Result;
import com.kodlamaio.northwind.core.utilities.results.SuccessDataResult;
import com.kodlamaio.northwind.dataAccess.abstracts.ProductRepository;
import com.kodlamaio.northwind.entities.concretes.Products;
import com.kodlamaio.northwind.entities.dtos.ProductWithCategoryDto;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class ProductManager implements ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductManager(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public DataResult<List<Products>> getAllProducts() {
        return new SuccessDataResult<>(
                this.productRepository.findAll(),
                "Data Listelendi"
        );
    }

    @Override
    public DataResult<List<Products>> getAllSorted() {
        Sort sort = Sort.by(Sort.Direction.ASC, "productName");
        return new SuccessDataResult<List<Products>>(
                this.productRepository.findAll(sort),
                "Data başarıyla sıralandı"
        );
    }

    @Override
    public DataResult<List<Products>> getAllProducts(int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo -1, pageSize);
        Page<Products> productPage = this.productRepository.findAll(pageable);
        return new SuccessDataResult<List<Products>>(
                productPage.getContent(),
                "Sayfalı veri getirildi"
        );
    }

    @Override
    public Result add(Products products) {
        this.productRepository.save(products);
        return new SuccessDataResult<>("Ürün eklendi");
    }

    @Override
    public DataResult<Products> getByProductName(String productName) {
        return new SuccessDataResult<>(
                this.productRepository.getByProductName(productName),
                "Data Listelendi"
        );
    }

    @Override
    public DataResult<Products> getByProductNameAndCategories_CategoryId(String productName, int categoryId) {
        return new SuccessDataResult<>(
                this.productRepository.getByProductNameAndCategories_CategoryId(productName, categoryId),
                "Data Listelendi"
        );
    }

    @Override
    public DataResult<List<Products>> getByProductNameOrCategories_CategoryId(String productName, int categoryId) {
        return new SuccessDataResult<>(
                this.productRepository.getByProductNameOrCategories_CategoryId(productName, categoryId),
                "Data Listelendi"
        );
    }

    @Override
    public DataResult<List<Products>> getByCategories_CategoryIdIn(List<Integer> categories) {
        return new SuccessDataResult<>(
                this.productRepository.getByCategories_CategoryIdIn(categories),
                "Data Listelendi"
        );
    }

    @Override
    public DataResult<List<Products>> getByProductNameContains(String productName) {
        return new SuccessDataResult<>(
                this.productRepository.getByProductNameContains(productName),
                "Data Listelendi"
        );
    }

    @Override
    public DataResult<List<Products>> getByProductNameStartsWith(String productName) {
        return new SuccessDataResult<>(
                this.productRepository.getByProductNameStartsWith(productName),
                "Data Listelendi"
        );
    }

    @Override
    public DataResult<List<Products>> getByProductNameEndsWith(String productName) {
        return new SuccessDataResult<>(
                this.productRepository.getByProductNameEndsWith(productName),
                "Data Listelendi"
        );
    }

    @Override
    public DataResult<List<Products>> getByNameAndCategories(String productName, int categoryId) {
        return new SuccessDataResult<>(
                this.productRepository.getByNameAndCategories(productName, categoryId),
                "Data Listelendi"
        );
    }

    @Override
    public DataResult<List<ProductWithCategoryDto>> getProductWithCategoryDetails() {
        return new SuccessDataResult<List<ProductWithCategoryDto>>(
                this.productRepository.getProductWithCategoryDetails(),
                "Data Listelendi"
        );
    }


}
