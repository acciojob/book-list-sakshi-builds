//your JS code here. If required.
let sub=document.getElementById("submit");
sub.addEventListener("click",addBook);
function addBook(){
	let title=document.getElementById("title").value ;
	let author=document.getElementById("author").value ;
	let isbn=document.getElementById("isbn").value ;

	let body=document.getElementById("book-list");
	let row=document.createElement("tr");
	row.innerHTML=
		`
		<td>${title}</td>
        <td>${author}</td>
		<td>${isbn}</td> 
		<td>
		<button class="delete">Clear</button>
		</td>
		` ;
	body.appendChild(row);

	document.getElementById("title").value="";
	document.getElementById("author").value="";
	document.getElementById("isbn").value="";

	let deleteBtn=row.querySelector(".delete");
	deleteBtn.addEventListener("click",function(){
		row.remove();
	});
	
}
