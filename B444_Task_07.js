GUVI: Zen Class — Part 1: Find the culprits and nail them — debugging javascript
1.The error in the provided code is a syntax error in the alert() function call. 
The double quotation marks used around the string "I’m JavaScript!’ are not proper. 
The closing single quotation mark is incorrect; it should be a closing double quotation mark instead.
Here's the corrected code:
<!DOCTYPE html>
<html>
<body>
 <script>
 alert("I'm JavaScript!");
 </script>
 Whats the error in this ?
</body>
</html>

2. Find the culprit and invoke the alert
 The culprit in the given code is a typographical error in the script tag of the HTML file. 
 The double quotation marks used in the script source attribute are invalid.
 They should be replaced with valid double quotation marks ("") or single quotation marks ('').

Here's the corrected version of the code:
<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>
alert("I'm invoked!");

3. 
