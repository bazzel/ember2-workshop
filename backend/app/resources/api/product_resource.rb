module Api
  class ProductResource < JSONAPI::Resource
    attributes :title, :description, :price, :image
    has_many :reviews
    has_one :category
  end
end
