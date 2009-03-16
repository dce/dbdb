class Avatar < ActiveRecord::Base
  has_one :db
  has_attached_file :image, :styles => { :profile => "150x150#", :thumb => "50x50#" }
end
