Rails.application.routes.draw do
  resources :questions, only: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
