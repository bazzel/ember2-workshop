Rails.application.routes.draw do
  namespace :api do
    jsonapi_resources :products do
      jsonapi_related_resources :reviews
    end
  end
end
