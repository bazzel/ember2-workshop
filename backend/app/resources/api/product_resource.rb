module Api
  class ProductResource < JSONAPI::Resource
    attributes :title, :description, :price, :image
    has_many :reviews
  end
end
