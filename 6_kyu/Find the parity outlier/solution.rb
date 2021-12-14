def find_outlier(integers)
  groups = integers.partition(&:odd?)
  groups.find(&:one?).first
end
