export default function() {
  this.get('/products', function(db, request) {
    return {
      data: db.products.map(attrs => (
        {type: 'products', id: attrs.id, attributes: attrs }
      ))
    };
  });
}
