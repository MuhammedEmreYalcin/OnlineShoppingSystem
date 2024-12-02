package com.kodlamaio.northwind.core.utilities.results;

import com.kodlamaio.northwind.entities.concretes.Products;

import java.util.List;

public class SuccessDataResult<T> extends DataResult<T> {
    public SuccessDataResult(T data, boolean success) {
        super(data, true);
    }


    public SuccessDataResult(T data, String message) {
        super(data, true, message);
    }

    public SuccessDataResult(String message) {
        super(null, true, message);
    }

    public SuccessDataResult(Products byProductName) {
        super(null, true);
    }

}
