function table() 
			{
				const x = parseInt(document.getElementById("x").value);
				const y = parseInt(document.getElementById("y").value);

                if 
				(
					isNaN(x) || isNaN(y) ||
					x < 2 || y < 2 || x > 10 || y > 10 ||
					x > y
                ) 
				{
					alert("Please enter numbers between 2 and 10!");
					document.getElementById("table").innerHTML = "";
					return;
				}

			    let output = "<table><tr><th>*</th>";
                for (let count = x; count <= y; count++) 
                {
                    output += <th>${i}</th>;
                }
                output += "</tr>";

                for ( let count = x; count <= y; count++) 
                {
					output += <tr><th>${count}</th>;
					for (let j = x; j <= y; j++) 
					{
						output += <td>${count * j}</td>;
					}
				output += "</tr>";
				}

                output += "</table>";
				document.getElementById("table").innerHTML = output;
				}
			}