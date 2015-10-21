Rails.application.routes.draw do
  namespace :api do
    jsonapi_resources :products do
      jsonapi_relationships
    end
    jsonapi_resources :categories
  end
end
