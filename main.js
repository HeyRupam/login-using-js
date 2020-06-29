function myFunction(){
    var name = document.getElementById("name");
    var pass = document.getElementById("pass");
    var valid = false;

    if(name.value.trim()=="")
	{
		alert("username cant be blanked");
		name.style.border="solid 1px red";
		return false;
	}
	else if(pass.value.trim()=="")
	{
		alert("password cant be blanked");
		pass.style.border="solid 1px red";
		return false;
	}
	else
	{
		if((name.value=="tiger@gmail.com") && (pass.value=="lion"))
		{
			valid=true;
        }
        if((name.value=="lion@gmail.com") && (pass.value=="tiger"))
        {
            valid= true;
        }
		if(valid)
		{
			alert("Login Was Successful");
			return true;
		}
		else
		{
			alert("Wrong username & Password");
			name.style.border="solid 1px red";
			pass.style.border="solid 1px red";
			return false;
		}
	}
}