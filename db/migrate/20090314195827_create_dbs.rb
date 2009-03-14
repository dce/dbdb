class CreateDbs < ActiveRecord::Migration
  def self.up
    create_table :dbs do |t|
      t.string :name
      t.string :occupation

      t.timestamps
    end
  end

  def self.down
    drop_table :dbs
  end
end
