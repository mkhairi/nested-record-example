class Email < NestedRecord::Base
  attribute :email, :string, primary: true
  attribute :primary, :boolean, default: false
  attribute :confirmed_at, :datetime

  attr_accessor :_destroy

  validates :email, presence: true
end
