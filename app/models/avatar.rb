class Avatar < ActiveRecord::Base
  belongs_to :db
  has_attached_file :image, :styles => { :profile => "150x150#" }
end
