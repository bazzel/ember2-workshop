class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :description
      t.integer :rating
      t.string :user
      t.references :product, index: true

      t.timestamps null: false
    end
  end
end
