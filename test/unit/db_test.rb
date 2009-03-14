require 'test_helper'

class DbTest < ActiveSupport::TestCase
  context "A DB" do
    should_have_one :avatar
    should_validate_presence_of :name, :occupation

    should "have a score" do
      db = Db.new
      assert_equal Float, db.score.class
    end
  end
end
