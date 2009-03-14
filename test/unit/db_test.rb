require 'test_helper'

class DbTest < ActiveSupport::TestCase
  context "A DB" do
    should_have_one :avatar
    should_validate_presence_of :name, :occupation
  end
end
