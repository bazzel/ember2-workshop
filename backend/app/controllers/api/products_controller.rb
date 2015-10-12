module Api
  class ProductsController < JSONAPI::ResourceController
    before_action :delay

    private
    def delay
      sleep 1
    end
  end
end
