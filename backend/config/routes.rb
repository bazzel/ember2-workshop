Rails.application.routes.draw do
  namespace :api do
    jsonapi_resources :products
  end
end
