class Db < ActiveRecord::Base
  validates_presence_of :name, :occupation
  has_one :avatar

  def avatar=(attrs = {})
    self.build_avatar(attrs)
  end

  def bagfactor
    sleep(2)
    rand(50) / 10.0
  end
end
