require 'prime'

def sumOfDivided(lst)
  primes = []
  lst.each { |num| primes << Prime.prime_division(num).map(&:first) }
  result = primes.flatten.uniq.sort.reject { |prime| prime < 0 }
  result.map { |prime| [prime, lst.select { |num| num % prime == 0 }.sum ] }
end

print sumOfDivided([12, 15])
