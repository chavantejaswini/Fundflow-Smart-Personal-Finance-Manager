export async function getUser(req){
    try{
        let userId = localStorage.getItem("loggedInUserId");
        console.log("fetch:userId:",userId);
        const response =await fetch(`/api/expense?userId=`+userId)
        console.log("getExpense response:",response);
        const json = await response.json()
        return json;
    }catch(error){
        return error;
    }
}

// posting a new user
export async function addUser(formData){
    try{
      console.log("formData:", formData);
      const Options = {
        method: "POST",
        body: JSON.stringify(formData),
      };
      const response = await fetch(`/api/expense`, Options);
      sendEmail(formData.category);
      console.log("response:", response);
      const json = await response.json();
      return json;
    }catch(error){
        return error;
    }
}