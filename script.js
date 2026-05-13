//your JS code here. If required.
let sub=document.getElementById("submit");
sub.addEventListener("click",addBook);
fucntion addBook(){
	let title=document.getElementById("title").value ;
	let author=document.getElementById("author").value ;
	let isbn=document.getElementById("isbn").value ;

	let body=document.getElementById("book-list");
	let row=document.createElement("tr");
	row.innerHTML=
		<td>${title}</td>
        <td>${author}</td>
		<td>${isbn}</td> 
		<td class="delete">Clear</td> ;
	booklist.appendchild(row);

	document.getElementById("title")="";
	document.getElementById("author")="";
	document.getElementById("isbn")="";

	let deleteBtn=document.querySelector(".delete");
	deleteBtn.addEventListener("click",function(){
		row.remove();
	});
	
}
