CREATE TABLE products
(
    product_id        INT NOT NULL,
    category_id       INT NULL,
    product_name      VARCHAR(255) NULL,
    unit_price DOUBLE NULL,
    units_in_stock    SMALLINT NULL,
    quantity_per_unit VARCHAR(255) NULL,
    CONSTRAINT pk_products PRIMARY KEY (product_id)
);