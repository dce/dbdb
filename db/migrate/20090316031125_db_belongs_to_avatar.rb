class DbBelongsToAvatar < ActiveRecord::Migration
  def self.up
    add_column :dbs, :avatar_id, :integer
    remove_column :avatars, :db_id
  end

  def self.down
    add_column :avatars, :db_id, :integer
    remove_column :dbs, :avatar_id
  end
end
