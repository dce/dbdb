class Db < ActiveRecord::Base
  validates_presence_of :name, :occupation
end
