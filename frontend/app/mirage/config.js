export default function() {
  this.get('/products', function(db) {
    return {
      data: db.products.map(attrs => (
        {type: 'products', id: attrs.id, attributes: attrs }
      ))
    };
  });
  this.get('/products/:id', function(db, request) {
    var id = request.params.id;

    return {
      data: {
        type: 'products',
        id: id,
        attributes: db.products.find(id)
      }
    };
  });
  this.patch('/products/:id', function(db, request) {
    var id = request.params.id;
    var product = JSON.parse(request.requestBody);

    db.products.update(id, product.data.attributes);

    return product;
  });
}
