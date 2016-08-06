class DesignerResource < JSONAPI::Resource
  attributes :name, :created_at, :updated_at

  def self.sortable_fields(context)
    [:name]
  end
end
