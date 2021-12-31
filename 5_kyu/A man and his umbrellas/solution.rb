def rainy(weather)
  weather == "rainy" || weather == "thunderstorms"
end

def min_umbrellas(weather)
  umbrellas_at_home = 0;
  umbrellas_at_work = 0;
  weather.each_with_index do |weather, index|
    next if !rainy(weather)
    if index % 2 != 0
      if umbrellas_at_home == 0
        umbrellas_at_work += 1
      else
        umbrellas_at_home -= 1
        umbrellas_at_work += 1
      end
    else
      if umbrellas_at_work == 0
        umbrellas_at_home += 1
      else
        umbrellas_at_work -= 1
        umbrellas_at_home += 1
      end
    end
  end
  umbrellas_at_home + umbrellas_at_work
end
