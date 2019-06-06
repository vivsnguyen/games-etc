word_to_be_guessed = input("What word shall be guessed?")
word = ['_']*len(word_to_be_guessed)
strikes = 0
guesses = 0
guess_word = ""

while strikes < 10 or guess_word != word_to_be_guessed:
	print("Your progress on guessing the word: " + str(word))
	guess = input("What letter do you guess?")
	for i in range(len(word_to_be_guessed)):
		if word_to_be_guessed[i] == guess:
			word[i] = guess
			guess_word += str(word[i])
			print(guess_word)
			print(guess_word==word_to_be_guessed)
	if not(guess in word):
		strikes+=1
		print("You have this many strikes(you can have 10): " + str(strikes))
	guesses += 1

if strikes >= 10:
	print("The guesser loses! The word was: " + word_to_be_guessed)
else:
	print("The guesser wins! You guessed this many times: " + guesses)
