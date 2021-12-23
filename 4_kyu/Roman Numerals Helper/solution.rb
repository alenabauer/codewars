ROMAN_HASH = {
  "M" => 1000,
  "CM" => 900,
  "D" => 500,
  "C" => 100,
  "XC" => 90,
  "L" => 50,
  "X" => 10,
  "IX" => 9,
  "V" => 5,
  "IV" => 4,
  "I" => 1
}

class RomanNumerals
  def self.to_roman(num)
    roman = ""
    ROMAN_HASH.each do |k, v|
      roman += k * (num / v).truncate
      num = num % v
    end
    roman
  end

  def self.from_roman(roman)
    num_array = roman.chars.map { |char| ROMAN_HASH[char] }
    result = 0
    i = 0
    while i < num_array.length
      if i == num_array.length - 1 || num_array[i] >= num_array[i + 1]
        result += num_array[i]
        i += 1
      else
        result = result + num_array[i + 1] - num_array[i]
        i += 2
      end
    end
    result
  end
end
