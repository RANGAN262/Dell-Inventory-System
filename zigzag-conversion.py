def convert(s, num_rows):

    
    if num_rows == 1 or num_rows >= len(s):
        return s

    
    rows = []

    for i in range(num_rows):
        rows.append("")

    current_row = 0
    going_down = False

    
    for char in s:

        rows[current_row] += char

        
        if current_row == 0 or current_row == num_rows - 1:
            going_down = not going_down

        if going_down:
            current_row += 1
        else:
            current_row -= 1

    
    return "".join(rows)


print("Rows :", num_rows)

print("Output :", result)
