class Profile < NestedRecord::Base
  attribute :fullname, :string
  attribute :age, :integer
  attribute :active, :boolean
  has_one_nested :contacts

  validates :age, presence: true
end
