class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :title
      t.string :description
      t.float :price
      t.text :image

      t.timestamps null: false
    end
  end
end
