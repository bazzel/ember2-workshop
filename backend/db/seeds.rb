require 'open-uri'
require 'base64'

CATEGORIES = %w(abstract animals business cats city food nightlife fashion people nature sports technics transport)

Product.destroy_all

100.times do
  Product.create do |product|
    product.title       = Faker::Commerce.product_name
    product.description = Faker::Lorem.paragraph
    product.price       = Faker::Commerce.price

    # Retrieve a random image from lorempixel.com
    # and store it as a base64 string.
    image_id            = rand(1..10)
    url                 = 'http://lorempixel.com/320/150/%s/%d' % [CATEGORIES.sample, image_id]

    product.image       = 'data:image/jpeg;base64,' + Base64.encode64(open(url) { |io| io.read })
  end
end

