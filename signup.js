function validation(e){
    
    if (document.getElementById('rPassword').value != document.getElementById('password_again').value) {
      
        document.getElementById("repeat_pwd").innerHTML = "<p style='color:red'>Password is not matching!!!</p>";
        return false;
}
return true;
}

$(document).ready(()=>{
    $("#registerForm").submit((e)=>{
        e.preventDefault();
        var flag = validation(e);
      
        if(flag){
            console.log("posting");
            var id1=$("#id").val();
            console.log("id is"+id1);
            var FirstName1=$("#fName").val();
            var lastName1=$("#lName").val();
            var email1=$("#sEmail").val().toLowerCase();
            var password1=$("#rPassword").val();
            var password2=$("#password_again").val();;
            $.ajax({
                url:"http://localhost:3000/Users",
                method:"POST",
                data:{
                    "id":id1,
                    "first_name":FirstName1,
                    "last_name": lastName1,
                    "password":password1,
                    "email": email1,
                    "password_again":password2 ,
                },
                success:(x)=>{
                    alert(x.first_name+" name posted");
                },
                error:(e1)=>{
                    alert("error"+e1);
                }
            });
        }
        })  
})