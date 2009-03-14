class Db < ActiveRecord::Base
  validates_presence_of :name, :occupation
  has_one :avatar

  def avatar=(attrs = {})
    self.build_avatar(attrs)
  end

  def score
    (rand(50) + 1) / 10.0
  end
end
