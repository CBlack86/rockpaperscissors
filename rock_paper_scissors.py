from calendar import c
import random
rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''

#Write your code below this line 👇
choices = [rock, paper, scissors]
user_choice = int(input ("What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors. "))
u_choice = choices[user_choice]
print (u_choice)
Com_choice = (random.randint(0, 2))
print ("Computer chose: ")
print (choices[Com_choice])
if user_choice == 0 and Com_choice == 2:
  print("You win!")
elif Com_choice == 0 and user_choice == 2:
  print("You lose")
elif Com_choice > user_choice:
  print("You lose")
elif user_choice > Com_choice:
  print("You win!")
elif Com_choice == user_choice:
  print("It's a draw")
#if u_choice == Com_choice:
#    print ("You have Tied")
#elif u_choice == "rock":
#    if Com_choice == "scissors":
#        print ("You Win!")
#    else:
#        print ("You Lose")
#elif u_choice == "scissors":
#    if Com_choice == "paper":
#        print ("You Win!")
#    else:
#        print ("You Lose")
#elif u_choice == "paper":
#    if Com_choice == "rock":
#        print ("You Win!")
#    else:
#        print ("You Lose")
