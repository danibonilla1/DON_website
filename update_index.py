
with open('index.html', 'r') as f:
    lines = f.readlines()

# Lines are 0-indexed in python list, but 1-indexed in my tool usage.
# I want to replace lines 227 to 588 (inclusive).
# In 0-indexed: 226 to 588 (exclusive of 589).
# Let's verify.
# Line 226 (1-based) is index 225.
# Line 227 (1-based) is index 226.
# Line 588 (1-based) is index 587.
# So I want to replace lines[226:588].

# Let's check the content of the lines to be sure.
# Line 226 (index 225): <div id="testimonialsContainer" class="testimonials-container fade-in">
# Line 227 (index 226): <div class="testimonial active">
# Line 588 (index 587): </div> (closing the last testimonial)
# Line 589 (index 588): </div> (closing the container)

# So I want to keep index 225 and index 588.
# I want to replace everything between them.
# So lines[226:588] should be replaced.

with open('testimonials.html', 'r') as f:
    new_content = f.readlines()

# Insert indentation if needed?
# The new content seems to have some indentation, but maybe not enough or too much.
# The script generated it with 12 spaces indentation.
# Let's check index.html indentation.
# Line 227 starts with 12 spaces.
# My script output starts with 12 spaces.
# So it should be fine.

final_lines = lines[:226] + new_content + lines[588:]

with open('index.html', 'w') as f:
    f.writelines(final_lines)
