require 'uri'

def domain_name(url)
  uri = URI.parse(url)
  uri.host.nil? ? search(url.split('.')) : search(uri.host.split('.'))
end

def search(url)
  url.find { |el| el.match(/.*www.*/) == nil && el.match(/.*http.*/) == nil }
end
