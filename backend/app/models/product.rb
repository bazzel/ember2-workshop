class Product < ActiveRecord::Base
  has_many :reviews, -> { order(created_at: :desc) }, dependent: :destroy

  validates :title, presence: true
end
