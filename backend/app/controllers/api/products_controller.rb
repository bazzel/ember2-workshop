module Api
  class ProductsController < JSONAPI::ResourceController
    prepend_before_action :ensure_categories

    private
    def ensure_categories
      params[:include] = 'category'
    end
  end
end
