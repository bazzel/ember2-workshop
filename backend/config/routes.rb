Rails.application.routes.draw do
  namespace :api do
    resources :products
  end
end
