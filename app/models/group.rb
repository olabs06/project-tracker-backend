class Group < ApplicationRecord
    has_many :users
    has_many :projects, through: :users

end
