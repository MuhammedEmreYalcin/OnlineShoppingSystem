package com.kodlamaio.northwind.business.abstracts;

import com.kodlamaio.northwind.core.utilities.results.DataResult;
import com.kodlamaio.northwind.core.utilities.results.Result;
import com.kodlamaio.northwind.entities.concretes.Products;
import com.kodlamaio.northwind.entities.dtos.ProductWithCategoryDto;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductService{

    DataResult<List<Products>> getAllProducts();
    DataResult<List<Products>> getAllSorted();
    DataResult<List<Products>> getAllProducts(int pageNo, int pageSize);
    Result add(Products products);

    DataResult<Products> getByProductName(String productName);

    DataResult<Products> getByProductNameAndCategories_CategoryId(String productName, int categoryId);

    DataResult<List<Products>> getByProductNameOrCategories_CategoryId(String productName, int categoryId);

    DataResult<List<Products>> getByCategories_CategoryIdIn(List<Integer> categories);

    DataResult<List<Products>> getByProductNameContains(String productName);

    DataResult<List<Products>> getByProductNameStartsWith(String productName);

    DataResult<List<Products>> getByProductNameEndsWith(String productName);

    DataResult<List<Products>> getByNameAndCategories(String productName, int categoryId);

    DataResult<List<ProductWithCategoryDto>> getProductWithCategoryDetails();
}
