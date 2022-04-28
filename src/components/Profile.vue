<template>
  <div class="flex w-full mt-20">
      <!---Profileside--->
      <div class="flex w-1/4  rounded-lg bg-gray-100 ">
    <ul>
        <li>
            <div class="">
            <!---USER LOGO--->
            <div class="">
                <img src="../assets/user.png"  class="ml-16 rounded-full object-cover lg:w-28 lg:h-28 flex justify-center ">
                    <svg class="w-5 h-5 text-green-900 ml-28 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" /></svg>
                    <span class="mt-2  text-xs font-thin ">Change Profile</span>
                    <input type='file' class="hidden" />         
            </div>
            </div>
        </li>
          <li>
            <!---GMAIL ACCOUNT-->
            <div class="">
                <input class=" text-sm text-green-500 w-80 text-center p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="juan.delacruz@dnsc.edu.ph" disabled>
            </div>
          </li>
          <li>
              <!--Gmail Account--> 
                <input type="text" id="usertype" v-model="fullname" placeholder="STUDENT" class=" w-72 mt-5 uppercase container p-16  text-base text-center border-b py-1 focus:outline-none focus:border-green-900 focus:border-b-2 transition-colors peer" autocomplete="off">
          </li>
          <li>
            <div>
                <!--SECURITY BUTTOn-->
                 <button class=" text-sm  w-60 mt-5 bg-gradient-to-r from-green-900 to-green-800 px-10 py-2 rounded-lg text-yellow-50 uppercase  font-medium" @click="showModal=true">Password Security</button>
            </div>
          </li>
     </ul>
      </div>
      <!--Information side--->
    <div class=" ml-10 w-3/4 rounded-lg  grid gap- grid-cols-2">
         <!--FULLNAME-->
         <div class="mt-5">
            <div class="relative" >
                <input type="text" id="fullname" v-model="fullname" placeholder="Juan Dela Cruz" class=" text-xs uppercase container p-16 border-b py-1  focus:outline-none focus:border-green-900 focus:border-b-2 transition-colors peer" autocomplete="off" required>
                <label for="fullname" class=" text-xs  font-medium absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-green-600 transition-all">Fullname:</label>
            </div>
        </div>
      <div>
        <div class="">
         <!--GENDER-->
            <div class="mt-2  relative" > 
                <select class=" w-60 mt-1  border  h-100 px-10 py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-900 rounded-md text-gray-500">
                    <option value="">-- Choose Gender--</option>
                    <option value="">Female</option>
                    <option value="">Male</option>
                </select>
            </div>
        </div>
      </div>
    <div>
    <div class="mt-28 relative  mb-40">
        <input type="date" id="birthdate" v-model="birthdate"  class=" text-xs container p-16  text-center border-b py-1  focus:outline-none focus:border-green-900 focus:border-b-2 transition-colors peer" autocomplete="off" required>
        <label for="birthdate" class=" font-medium text-xs ml-8 absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-green-600 transition-all">Birthdate:</label>
    </div>
    </div>
    <div>
        <div class="mt-24 relative mb-40" > 
            <select class="w-60 mt-1  border  h-100 px-10 py-2  hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-900 rounded-md text-gray-500">
                <option value="">-- Choose Institute--</option>
                <option value="">Institute of Aquatic and Applied Sciences</option>
                <option value="">Institute of Computing</option>
                <option value="">Institute of Leadership, Entrepreneurship and Good Governance</option>
                <option value="">Institute of Teacher Education</option>
            </select>
        </div>
    </div>
    <div class="">
    <!--CONTACT NUMBER-->
        <div class="mt-5">
            <div class="relative" >
                <input type="text" id="contact" v-model="fullname" placeholder="+69" class=" ml-5 text-xs w-72 uppercase container p-16 border-b py-1  focus:outline-none focus:border-green-900 focus:border-b-2 transition-colors peer" autocomplete="off" required>
                <label for="contact" class=" text-xs font-medium  absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-green-600 transition-all">Contact No:</label>
            </div>
        </div>
    </div>
    <div class=" mt-20 flex space-x-10 space-y-35">
        <button class=" text-sm w-80 mt-5 bg-gradient-to-r from-red-900 to-red-800 px-10 py-2 rounded-lg text-yellow-50 uppercase  font-medium">Cancel</button>
        <button class=" text-sm w-80 mt-5 bg-gradient-to-r from-green-900 to-green-800 px-10 py-2 rounded-lg text-yellow-50 uppercase  font-medium"> <span>update</span> </button>
    </div>
    <!---PASSWORD MOdal--->
    <transition name="slide" >
        <div class="modal border-2 border-gray-300 mx-10 mt-6 w-1/3  " v-if="showModal" id="modal" >
        <!--PASSWORDHEADER-->  
            <div class=" bg-green-900 flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                <h3 class="uppercase text-xl font-thin  lg:text-2xl text-yellow-50">Juan.Delacruz@dnsc.edu.ph</h3>
                <button @click="showModal=false" type="button"  data-dismiss="modal" aria-label="Close" class="Close  text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                <svg class="w-5 h-5 cursor-pointer hover: text-gray-600 transition duration-500 hover:scale-125 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            <!---OLDPASSWORD--->
            <div class="mx-4 mt-10 ">
                <label class="font-thin">Current Password</label>
                <input @click="toggleShowOldpassword"  type="password" id="oldpassword" class=" block px-3 py-2 rounded-lg w-11/12 bg-white border-2 border-gray-300 placeholder-green-600 shadow-md focus:placeholder-green-500 focus:bg-white focus:border-green-600 focus:outline-none" required>
            </div>
            <!--NEWPASSWORD--->
            <div class="mx-4">
                <label class="font-thin">New Password</label>
                <input type="password" @click="toggleShowPassword" class=" block px-3 py-2 rounded-lg w-11/12 bg-white border-2 border-gray-300 placeholder-green-600 shadow-md focus:placeholder-green-500 focus:bg-white focus:border-green-600 focus:outline-none" id="password" required>  
            </div>
            <!--REPEATPASSWORD-->
            <div class="mx-4 ">
                    <label class="font-thin">Repeat Password</label>
                    <input  @click="toggleShowrepeatenewpassword" type="password" id="repeatenewpassword" class=" block px-3 py-2 rounded-lg w-11/12 bg-white border-2 border-gray-300 placeholder-green-600 shadow-md focus:placeholder-green-500 focus:bg-white focus:border-green-600 focus:outline-none" required>
                     <div class="valid-feedback"><span class="text-green-500 text-xs italic ">New password is identical</span></div>
            </div>
                <!--BUTTON-->
                <div class="flex space-x-2 space-y-1 mx-1">
                      <button @click="submitInput"  class=" ml-3 bg-gradient-to-r from-red-700 to-red-600 px-10 py-2 rounded-lg"><span type="submit" class=" cursor-progress  font-medium uppercase text-yellow-50"  data-modal-toggle="defaultModal" >cancel</span></button>
                    <button @click="submitInput"    class=" bg-gradient-to-r from-green-700 to-green-600 px-10 py-2 rounded-lg"><span type="submit" class=" cursor-progress  font-medium uppercase text-yellow-50" >Change Password</span></button>
                </div>
        </div>
    </transition>


    
    </div>

    
   
  </div>
</template>

<script>
export default {
    name:'Profile',
    el:'app',
    data(){
        return{
            showModal:  false,
            

            

        }
    },
    methods:{ 
        toggleShowPassword(){
            var show = document.getElementById('password')
            if(this.showpassword    ==  false){
                this.showpassword = true
                show.type = "text"
            }   else{
                this.showpassword   =   false
                show.type   =   "password"
            }
            
        },
         toggleShowOldpassword(){
            var show = document.getElementById('oldpassword')
            if(this.oldpassword    ==  false){
                this.oldpassword = true
                show.type = "text"
            }   else{
                this.oldpassword   =   false
                show.type   =   "password"
            }
            
        },
        toggleShowrepeatenewpassword(){
            var show = document.getElementById('repeatenewpassword')
            if(this.repeatenewpassword    ==  false){
                this.repeatenewpassword = true
                show.type = "text"
            }   else{
                this.repeatenewpassword   =   false
                show.type   =   "password"
            }
        }
         

    }

}
</script>

<style>
#FormCenter{
  margin-right: 500px;
}
.button {
 appearance: none;
 outline: none;
 border: none;
 background: none;
 cursor: pointer;
 
 display: inline-block;
 padding: 15px 25px;
 background-image: linear-gradient(to right, #126b2e, #168259);
 border-radius: 8px;
 
 color: #FFF;
 font-size: 18px;
 font-weight: 700;
 
 box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
 transition: 0.4s ease-out;
 

}

.modal-overlay {
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 z-index: 98;
 color: #168259;
 background-color: rgba(0, 0, 0, 0.10);
}

.modal {
 position: fixed;
 top: 50%;
 left: 55%;
 transform: translate(-50%, -50%);
 z-index: 99;

 background-color: #FFF;
 border-radius: 16px;
 padding: 25px;
 
 
}

.fade-enter-active,
.fade-leave-active {
 transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
 opacity:0;
}

.slide-enter-active,
.slide-leave-active {
 transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
 transform: translateY(-50%) translateX(100vw);
}


</style>