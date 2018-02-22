# Intro to OO

### Highlights
- Everything is an Object in Ruby
- We can **send** *messages* to objects, these are **methods**
  - `"hello how are you".split` is the same as `"hello how are you".send(:split)`
- Objects are unique when we create them
- Objects are **instances** of classes
- Before, we saved data in hashes
  - `dog = { "name": "Fido", "species": "corgi" }`
  - But this is inefficient
    - We can have typos, and this breaks the mold of our data
    - Also we cannot write methods on this without using the `[]` syntax
  - Let classes save the day
- Classes
  - Blueprint of a new object and what they can do
  - `class Dog`
    - `class` keyword
    - Capitalize the first letter of the class name
  - When we want a new `Dog`, we will say `Dog.new`
  - `#initialize` method gets called and will need to match the arguments when we use `Dog.new`
    - `def initialize(name, breed)` means `Dog.new(name, breed)`
  - Parameters can also have default values
    - `def initialize(name, breed, owner="Prince")`
  - We can have **instance** variables denoted with a single `@` such as `@name`
    - These are unique to every object we create
  - We can also have **class** variables denoted with double `@@` such as `@@all`
    - When we call `Dog.all`, we call upon a class variable for our `Dog` class rather than any instance of `Dog`
  - `self` can mean different things in different context
    - `self` inside of our `#initialize` method, means we are talking about the **instance** of our `Dog`
    - When we use `self.all` as a method name, this represents us talking about our **class** `Dog`