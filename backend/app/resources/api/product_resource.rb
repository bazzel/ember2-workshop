module Api
  class ProductResource < JSONAPI::Resource
    attributes :title, :description, :price, :image
  end
end
