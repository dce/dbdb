class Db < ActiveRecord::Base
  validates_presence_of :name, :occupation
  has_one :avatar

  def avatar=(attrs = {})
    self.build_avatar(attrs)
  end
end
