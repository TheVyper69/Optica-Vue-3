import { defineStore } from "pinia";
import router from "../router"


export const useUserStore = defineStore("user", {
    state: () => ({
        userData: null,
        loadigUser: false,
        loadingSession:false,
    }),

    actions:{
        async loginUser(email,password){
            this.loadingUser = true

            try{
                const formdata = new FormData();
                formdata.append("nombre", email);
                formdata.append("contrasena", password);

                const requestOptions = {
                method: "POST",
                body: formdata,
                redirect: "follow"
                };

                fetch("http://127.0.0.1:8000/api/login", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    this.userData = {name: result[0].nombre, id: result[0].id }
                    router.push("/")
                  })
                .catch((error) => console.error(error));

            }catch(error){
                console.log(error)
            }finally{
                this.loadingUser=false
            }
        },
        async logoutUser(){
            try {
                
                this.userData=null
                router.push("/Login")

            } catch (error) {
                console.log(error)
            }
        },
    }


});