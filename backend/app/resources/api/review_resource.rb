module Api
  class ReviewResource < JSONAPI::Resource
    attributes :description, :rating, :user, :created_at
  end
end
