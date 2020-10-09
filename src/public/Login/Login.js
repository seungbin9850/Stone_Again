const Id = document.getElementById("Id");
const password = document.getElementById("password");
const form = document.getElementById("form");



form.onsubmit = async (e) => {
    e.preventDefault();
    try { 
        const res = await axios({
            method: 'post',
            url: `${CONSTANT.SERVER_ADRESS}/user/login`,
            data: {
                userId: Id.value,
                password: password.value
            }
        })      
        localStorage.setItem("accessToken",res.data.accessToken);
        localStorage.setItem("refreshToken",res.data.refreshToken);
        if(res.status === 201) 
            window.location.href = "../Intro/intro.html";
        if (res.status === 200)
        window.location.href = "../Main/LoginStateMainUI.html";
    } 
    catch (err) {
        if(err.response.status === 409){
            alert("입력정보가 틀렸습니다!");
        }
        else if(err.response.status  === 404){
            alert("존재하지 않는 유저입니다");
        }                        
     }
}
