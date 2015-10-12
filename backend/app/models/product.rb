class Product < ActiveRecord::Base
  validates :title, presence: true
end
