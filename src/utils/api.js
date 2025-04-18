// src/utils/api.js
export const postUserToLambda = async (data) => {
    const response = await fetch("https://ardbyd7sf7.execute-api.ap-northeast-2.amazonaws.com/dev/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  
    return response;
  };
  