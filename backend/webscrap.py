try:
	from googlesearch import search
except ImportError:
	print("No module named 'google' found")


user_input = "Virat Kohli is just 199 runs away from entering the 8000-run club in Tests"
links = search(user_input)

for x in links:
    print(x)