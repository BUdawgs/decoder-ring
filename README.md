# Decoder-Ring

## Project testing requirements:
- Writing a series of unit tests using Mocha and Chai
- Using different expect() methods to test your code

## Project functionality requirements:
### For the Caesar shift (example: caesar("Zebra Magazine", 3) => "cheud pdjdclqh"), the tests that you write should test that the following is true:

- It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
- It ignores capital letters. (For example, the results of A Message and a message should be the same.)
- When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)
- It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.
### For the Polybius square (example: polybius("message") => "23513434112251"), the tests that you write should test that the following is true:

- When encoding, it translates the letters i and j to 42.
- When decoding, it translates 42 to (i/j).
- It ignores capital letters. (For example, the results of A Message and a message should be the same.)
- It maintains spaces in the message, before and after encoding or decoding.
### For the substitution cipher (example: substitution("message", "plmoknijbuhvygctfxrdzeswaq") => "ykrrpik"), the tests that you write should test that the following is true:

- It returns false if the given alphabet isn't exactly 26 characters long.
- It correctly translates the given phrase, based on the alphabet given to the function.
- It returns false if there are any duplicate characters in the given alphabet.
- It maintains spaces in the message, before and after encoding or decoding.
- It ignores capital letters. (For example, the results of A Message and a message should be the same.)
- This project decodes and encodes using the Caesar shift, Substitution, and Polybius square. 
## Screenshots
### Caesar Shift
![image](https://64.media.tumblr.com/5928f61d756d4f3be772cc58d6651697/0685be9c7f79a4a8-b1/s1280x1920/468cce05827361e253e797357abad267aa338e8f.png)
### Polybius Square
![image](https://64.media.tumblr.com/2d359dc8c049c525a1f35c8c713c7e00/d858d6c76b4b8c99-c2/s1280x1920/2a4288d6c3496b172cbf398a390def91fb3919c9.png)
### Substitution Cipher
![image](https://64.media.tumblr.com/d5da6220d25fe3cc8d499cd08b92fa1d/3c1dd63cfa491dbe-fe/s1280x1920/3202e3627ce5c943248ea551ea11ddeeb94ff051.png)
## Future goals for this project:
- My goal is to implement this application in the Signal messaging app.
## Technology
### Built with:
- React, including Router & Context
- Created with create-react-app
- Confirmation modal via react-modal
