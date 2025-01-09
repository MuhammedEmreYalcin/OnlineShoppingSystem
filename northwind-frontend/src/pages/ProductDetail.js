import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Card, Button, Image } from 'semantic-ui-react';
import ProductService from '../services/productService'

export default function ProductDetail() {
  const { name } = useParams();

  const [product, setProduct] = useState({})

  useEffect(()=>{
    let productService = new ProductService()
    productService.getByName(name).then(result=>setProduct(result.data.data))
  },[])

  return (
    <div className="ui container">
      <Card fluid>
        <Card.Content>
          <Image 
            floated="right" 
            size="mini" 
            alt={product.productName} 
          />
          <Card.Header>{product.productName}</Card.Header>
          <Card.Meta>{product.unitPrice}</Card.Meta>
          <Card.Description>
            {product.quantityPerUnit}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}