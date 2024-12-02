package com.kodlamaio.northwind.dataAccess.abstracts;

import com.kodlamaio.northwind.entities.concretes.Products;
import com.kodlamaio.northwind.entities.dtos.ProductWithCategoryDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository <Products,Integer>{

    Products getByProductName(String productName);

    Products getByProductNameAndCategories_CategoryId(String productName, int categoryId);

    List<Products> getByProductNameOrCategories_CategoryId(String productName, int categoryId);

    List<Products> getByCategories_CategoryIdIn(List<Integer> categories);

    List<Products> getByProductNameContains(String productName);

    List<Products> getByProductNameStartsWith(String productName);

    List<Products> getByProductNameEndsWith(String productName);

    @Query("FROM Products p WHERE p.productName = :productName AND p.categories.categoryId = :categoryId")
    List<Products> getByNameAndCategories(String productName, int categoryId);

    @Query("Select new com.kodlamaio.northwind.entities.dtos.ProductWithCategoryDto(p.id, p.productName, c.categoryName) From Categories c Inner Join c.products p")
    List<ProductWithCategoryDto> getProductWithCategoryDetails();

}
