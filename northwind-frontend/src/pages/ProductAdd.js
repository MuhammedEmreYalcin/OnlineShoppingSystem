/* import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import { Button, FormField, Label } from 'semantic-ui-react'
import * as Yup from "yup"
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 10 }
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunlu")
    })
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values)=>{console.log(values)}}
        >
            <Form className='ui form'>
                <KodlamaIoTextInput name="productName" placeholder="Ürün Adı"/>
                 <FormField>
                    <Field name="productName" placeholder="Ürün Adı"></Field>
                    <ErrorMessage name='productName' render={error=>
                        <Label pointing basic color='red' content={error}></Label>
                    }></ErrorMessage>
                </FormField> 
                  <FormField>
                    <Field name="unitPrice" placeholder="Ürün Fiyatı"></Field>
                    <ErrorMessage name='unitPrice' render={error=>
                        <Label pointing basic color='red' content={error}></Label>
                    }></ErrorMessage>
                </FormField>  
                <KodlamaIoTextInput name="unitPrice" placeholder="Ürün Fiyatı"/> 
                <Button color='green' type='submit'>Ürün Ekle</Button>
            </Form>
        </Formik>
    )
} */


    import React, { useState } from 'react';
    import { Formik } from 'formik';
    import { Button, Card, Header } from 'semantic-ui-react';
    import * as Yup from "yup";
    import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';
    import ProductService from '../services/productService';
    import { toast } from 'react-toastify';
    
    export default function ProductAdd() {
        const [isSubmitting, setIsSubmitting] = useState(false);
        const productService = new ProductService();
        
        const initialValues = {
            productName: "",
            unitPrice: "",
            unitsInStock: "0",
            quantityPerUnit: "1",
            categoryId: "1"
        };
        
        const validationSchema = Yup.object({
            productName: Yup.string().required("Ürün adı zorunlu"),
            unitPrice: Yup.number().required("Ürün fiyatı zorunlu").min(0, "Fiyat 0'dan küçük olamaz"),
            unitsInStock: Yup.number().min(0, "Stok adedi 0'dan küçük olamaz"),
            quantityPerUnit: Yup.string(),
            categoryId: Yup.number()
        });
    
        const handleSubmit = async (values, { resetForm }) => {
            setIsSubmitting(true);
            try {
                await productService.addProduct({
                    productName: values.productName,
                    unitPrice: values.unitPrice,
                    unitsInStock: values.unitsInStock,
                    quantityPerUnit: values.quantityPerUnit,
                    categories: {
                        categoryId: values.categoryId,
                        categoryName: "Default" // Dies könnte aus einer Kategorie-Liste kommen
                    }
                });
                toast.success("Ürün başarıyla eklendi!");
                resetForm();
            } catch (error) {
                toast.error("Ürün eklenirken bir hata oluştu!");
                console.error('Error adding product:', error);
            } finally {
                setIsSubmitting(false);
            }
        };
    
        return (
            <Card fluid>
                <Card.Content>
                    <Header as='h2'>Ürün Ekle</Header>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        enableReinitialize
                    >
                        {(formik) => (
                            <form className='ui form' onSubmit={formik.handleSubmit}>
                                <KodlamaIoTextInput
                                    name="productName"
                                    placeholder="Ürün Adı"
                                    type="text"
                                />
                                <KodlamaIoTextInput
                                    name="unitPrice"
                                    placeholder="Ürün Fiyatı"
                                    type="number"
                                />
                                <KodlamaIoTextInput
                                    name="unitsInStock"
                                    placeholder="Stok Adedi"
                                    type="number"
                                />
                                <KodlamaIoTextInput
                                    name="quantityPerUnit"
                                    placeholder="Birim Başına Miktar"
                                    type="text"
                                />
                                <KodlamaIoTextInput
                                    name="categoryId"
                                    placeholder="Kategori ID"
                                    type="number"
                                />
                                <Button 
                                    color='green' 
                                    type='submit'
                                    disabled={!formik.isValid || isSubmitting}
                                    loading={isSubmitting}
                                >
                                    Ürün Ekle
                                </Button>
                            </form>
                        )}
                    </Formik>
                </Card.Content>
            </Card>
        );
    }