class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.date :date
      t.integer :season
      t.string :home
      t.string :visitor
      t.string :ft
      t.integer :hgoal
      t.integer :vgoal
      t.integer :tier
      t.integer :totgoal
      t.integer :goaldif
      t.string :result

      t.timestamps null: false
    end
  end
end
