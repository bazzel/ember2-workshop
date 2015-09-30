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
}
