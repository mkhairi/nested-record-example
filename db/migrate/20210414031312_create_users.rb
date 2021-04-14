class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.integer :pin
      t.jsonb :profile
      t.jsonb :emails
      t.timestamps
    end
  end
end
