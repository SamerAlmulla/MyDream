function getArray()
{
	var toDoList = new Array;                             //Create An Array
	var taskStr = localStorage.getItem('toDoList');         //Get the Task from Input using LocalStorage
	if(taskStr !== null)                                    //if the value is NOT empty --null--
	     {                                                   //parse the data into the Array
		     toDoList = JSON parse(taskStr);
	     }
		return toDoList;
}

function addTask()
{
	var task = document.getElementById("taskName").value;       //create a variable to hold value of input
	var array = getArray();                                     //create a variable to hold our Array
	array.push(task);                                           //pushing the task into the Array
	localStorage.setItem('toDoList', JSON.stringify(task));     //Store the task localStorage saving to the Array
    show();
    
    return false;
}

function Show()
{
	var array = getArray();                                 //create the variable to hold Array
	var htmlFormat = "<ul>";                                //Add unordered List
	
	 for (var i=0; i < array.length; i++)                   //A For Loop to display the Array 
	{
		 htmlFormat += "<li>" + array[i] + "</li>";
	}
  htmlFormat += "</ul>";	 
  document.getElementById('taskList').innerHTML = htmlFormat;	    //Show the document
}

document.getElementById('add').addEventListener('click',addTask);
show();






