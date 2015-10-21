require 'open-uri'
require 'base64'

CATEGORIES = %w(abstract animals business cats city food nightlife fashion people nature sports technics transport)

Category.destroy_all
Product.destroy_all

CATEGORIES.each do |item|
  Category.create do |category|
    category.name = item.titleize
  end
end

15.times do
  Product.create do |product|
    product.title       = Faker::Commerce.product_name
    product.description = Faker::Lorem.paragraph
    product.price       = Faker::Commerce.price
    product.category    = Category.all.sample

    # Retrieve a random image from lorempixel.com
    # and store it as a base64 string.
    image_id            = rand(1..10)
    url                 = 'http://lorempixel.com/320/150/%s/%d' % [CATEGORIES.sample, image_id]

    product.image       = 'data:image/jpeg;base64,' + Base64.encode64(open(url) { |io| io.read })

    rand(1..10).times do
      product.reviews << Review.new.tap do |review|
        review.description = Faker::Lorem.paragraph(1)
        review.rating      = rand(0..5)
        review.user        = Faker::Name.name
        review.created_at  = rand(1..10).days.ago
      end
    end
  end
end

